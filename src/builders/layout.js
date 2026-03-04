const { createCard } = require('./card');
const { achievementBadge } = require('./badge');

function buildDashboardSVG(user, stars, theme, dimensions) {
  const cardWidth = dimensions.cardWidth || 280;
  const spacing = dimensions.spacing || 20;
  const totalWidth = 3 * cardWidth + 2 * spacing;

  let content = '';
  content += createCard(0, 'Repositories', user.public_repos, theme, dimensions);
  content += createCard(cardWidth + spacing, 'Followers', user.followers, theme, dimensions);
  content += createCard(2 * (cardWidth + spacing), 'Total Stars', stars, theme, dimensions);

  return { content, width: totalWidth, height: dimensions.cardHeight || 160 };
}

function buildBadgesSVG(user, stars, theme, dimensions) {
  const badgeWidth = dimensions.badgeWidth || 120;
  const spacing = dimensions.spacing || 20;
  const totalWidth = 3 * badgeWidth + 2 * spacing;

  let content = '';
  content += achievementBadge(0, '100+ Repos', user.public_repos >= 100, theme);
  content += achievementBadge(badgeWidth + spacing, '100+ Stars', stars >= 100, theme);
  content += achievementBadge(2 * (badgeWidth + spacing), '50+ Followers', user.followers >= 50, theme);

  return { content, width: totalWidth, height: dimensions.badgeHeight || 120 };
}

function buildSingleSVG(user, theme, dimensions) {
  const cardWidth = dimensions.cardWidth || 280;
  const content = createCard(0, 'Repositories', user.public_repos, theme, dimensions);
  return { content, width: cardWidth, height: dimensions.cardHeight || 160 };
}

function buildTrophyWallSVG(user, stars, theme, dimensions) {
  const total = user.public_repos + user.followers + stars;
  const rank = getRank(total);
  const medalColor = theme[rank.medal];
  const width = dimensions.cardWidth || 400;
  const height = dimensions.cardHeight || 300;

  const content = `
  <g transform="translate(0,0)" filter="url(#dropShadow)">
    <rect width="${width}" height="${height}" rx="30" fill="url(#cardGradient)" />
    <g transform="translate(${width/2}, ${height/2 - 20})">
      ${trophyIcon(medalColor, 120)}
    </g>
    <text x="${width/2}" y="${height - 60}" text-anchor="middle" fill="${theme.textPrimary}" font-size="24" font-weight="700">
      ${user.name || user.login}
    </text>
    <text x="${width/2}" y="${height - 30}" text-anchor="middle" fill="${medalColor}" font-size="18" font-weight="600">
      Rank ${rank.label} · ${total} points
    </text>
  </g>
  `;
  return { content, width, height };
}

module.exports = { buildDashboardSVG, buildBadgesSVG, buildSingleSVG, buildTrophyWallSVG };