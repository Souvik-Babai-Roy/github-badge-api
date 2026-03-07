const { createCard } = require('./card');
const { achievementBadge } = require('./badge');
const { getRank } = require('../utils/rank');
const { trophyIcon } = require('./card');

/**
 * Build dashboard SVG layout with 3 statistics cards
 * @param {object} user - GitHub user data
 * @param {number} stars - Total stars count
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Layout dimensions
 * @returns {object} SVG content and dimensions
 */
function buildDashboardSVG(user, stars, theme, dimensions) {
  const cardWidth = dimensions.cardWidth || 300;
  const cardHeight = dimensions.cardHeight || 180;
  const spacing = dimensions.spacing || 32;
  const totalWidth = 3 * cardWidth + 2 * spacing + 60;
  const totalHeight = cardHeight + 80;

  let content = '';
  content += createCard(30, 'Repositories', user.public_repos, theme, { width: cardWidth, height: cardHeight });
  content += createCard(30 + cardWidth + spacing, 'Followers', user.followers, theme, { width: cardWidth, height: cardHeight });
  content += createCard(30 + 2 * (cardWidth + spacing), 'Total Stars', stars, theme, { width: cardWidth, height: cardHeight });

  return { content, width: totalWidth, height: totalHeight };
}

/**
 * Build achievement badges layout
 * @param {object} user - GitHub user data
 * @param {number} stars - Total stars count
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Layout dimensions
 * @returns {object} SVG content and dimensions
 */
function buildBadgesSVG(user, stars, theme, dimensions) {
  const badgeWidth = dimensions.badgeWidth || 160;
  const spacing = dimensions.spacing || 40;
  const totalWidth = 3 * badgeWidth + 2 * spacing + 60;
  const totalHeight = badgeWidth + 80;

  let content = '';
  content += achievementBadge(30, '100+ Repos', user.public_repos >= 100, theme);
  content += achievementBadge(30 + badgeWidth + spacing, '100+ Stars', stars >= 100, theme);
  content += achievementBadge(30 + 2 * (badgeWidth + spacing), '50+ Followers', user.followers >= 50, theme);

  return { content, width: totalWidth, height: totalHeight };
}

/**
 * Build single card layout
 * @param {object} user - GitHub user data
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Layout dimensions
 * @returns {object} SVG content and dimensions
 */
function buildSingleSVG(user, theme, dimensions) {
  const cardWidth = dimensions.cardWidth || 300;
  const cardHeight = dimensions.cardHeight || 180;
  const content = createCard(30, 'Repositories', user.public_repos, theme, { width: cardWidth, height: cardHeight });
  return { content, width: cardWidth + 60, height: cardHeight + 80 };
}

/**
 * Build trophy showcase wall
 * @param {object} user - GitHub user data
 * @param {number} stars - Total stars count
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Layout dimensions
 * @returns {object} SVG content and dimensions
 */
function buildTrophyWallSVG(user, stars, theme, dimensions) {
  const total = user.public_repos + user.followers + stars;
  const rank = getRank(total);
  const medalColor = theme[rank.medal];
  const width = dimensions.width || 450;
  const height = dimensions.height || 320;
  const padding = 30;

  const content = `
  <g transform="translate(${padding}, ${padding})">
    <!-- Background card -->
    <rect 
      width="${width - 2 * padding}" 
      height="${height - 2 * padding}" 
      rx="28" 
      fill="url(#wallGradient)" 
      stroke="${theme.accent1}" 
      stroke-width="2" 
      stroke-opacity="0.5"
    />
    
    <!-- Top accent -->
    <rect 
      width="${width - 2 * padding}" 
      height="4" 
      rx="2" 
      fill="${medalColor}" 
      opacity="0.9"
    />

    <!-- Trophy Icon -->
    <g transform="translate(${(width - 2 * padding) / 2 - 30}, 40)">
      ${trophyIcon(medalColor, 100)}
    </g>

    <!-- User name -->
    <text 
      x="${(width - 2 * padding) / 2}" 
      y="180" 
      text-anchor="middle" 
      fill="${theme.textPrimary}" 
      font-size="28" 
      font-weight="800" 
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
    >
      ${user.name || user.login}
    </text>

    <!-- Rank display -->
    <text 
      x="${(width - 2 * padding) / 2}" 
      y="215" 
      text-anchor="middle" 
      fill="${medalColor}" 
      font-size="20" 
      font-weight="700" 
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
    >
      Rank ${rank.label} Developer
    </text>

    <!-- Stats summary -->
    <text 
      x="${(width - 2 * padding) / 2}" 
      y="250" 
      text-anchor="middle" 
      fill="${theme.textSecondary}" 
      font-size="14" 
      font-weight="600" 
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
    >
      ${user.public_repos} repos • ${user.followers} followers • ${stars} stars
    </text>
  </g>

  <defs>
    <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.bg1}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${theme.bg2}" stop-opacity="1"/>
    </linearGradient>
  </defs>
  `;

  return { content, width, height };
}

module.exports = { buildDashboardSVG, buildBadgesSVG, buildSingleSVG, buildTrophyWallSVG };