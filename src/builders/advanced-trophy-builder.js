/**
 * Advanced Trophy Badge Builder
 * Professional trophy badge SVG generation with full customization
 */

const trophySystem = require('../types/trophy');
const filterSystem = require('../systems/filters');
const animationSystem = require('../systems/animations');

/**
 * Build professional trophy card SVG
 * @param {number} x - X position
 * @param {object} trophy - Trophy object
 * @param {object} earnedData - Earned trophy data {medal, tier, label, value}
 * @param {object} options - Customization options
 * @returns {string} SVG markup
 */
function buildTrophyCard(x, y, trophy, earnedData, options = {}) {
  const {
    width = 280,
    height = 180,
    theme,
    animation = 'shimmer',
    cornerRadius = 16,
    showStats = true,
    showRank = true,
    showValue = true,
  } = options;

  const medalColor = trophySystem.getMedalColor(earnedData.medal);
  const medal = earnedData.medal.toUpperCase();
  const padding = 16;
  const animDef = animation && animation !== 'none' ? `animation-${trophy.id}-${x}` : '';

  return `
  <g transform="translate(${x}, ${y})">
    <!-- Card background with gradient -->
    <defs>
      <linearGradient id="trophyGrad_${x}_${y}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${theme.bg1}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="${theme.bg2}" stop-opacity="1"/>
      </linearGradient>
      <filter id="trophyShadow_${x}_${y}" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.25"/>
      </filter>
      ${animDef ? animationSystem.getAnimationDef(animation, animDef) : ''}
    </defs>

    <!-- Main card -->
    <rect 
      width="${width}" 
      height="${height}" 
      rx="${cornerRadius}" 
      fill="url(#trophyGrad_${x}_${y})"
      stroke="${theme.accent1}"
      stroke-width="1"
      stroke-opacity="0.3"
      filter="url(#trophyShadow_${x}_${y})"
    />

    <!-- Top medal bar -->
    <rect 
      width="${width}" 
      height="4" 
      rx="2"
      fill="${medalColor.primary}"
      opacity="0.9"
    />

    <!-- Trophy icon area -->
    <g transform="translate(${width - 50}, ${padding})">
      ${buildMiniTrophyIcon(medalColor.primary, 40)}
    </g>

    <!-- Medal badge -->
    <g transform="translate(${width - 70}, ${height - 35})">
      <circle cx="0" cy="0" r="16" fill="${medalColor.primary}" opacity="0.2" stroke="${medalColor.primary}" stroke-width="1.5"/>
      <text 
        x="0" y="5" 
        text-anchor="middle"
        fill="${medalColor.primary}" 
        font-size="12" 
        font-weight="700" 
        font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
      >
        ${medal.charAt(0)}
      </text>
    </g>

    <!-- Trophy name -->
    <text 
      x="${padding}" 
      y="${padding + 18}" 
      fill="${theme.textPrimary}" 
      font-size="14" 
      font-weight="700" 
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
      letter-spacing="0.3"
    >
      ${trophy.name}
    </text>

    <!-- Trophy description -->
    <text 
      x="${padding}" 
      y="${padding + 40}" 
      fill="${theme.textSecondary}" 
      font-size="11" 
      font-weight="500" 
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
      opacity="0.8"
    >
      ${trophy.description.substring(0, 35)}${trophy.description.length > 35 ? '...' : ''}
    </text>

    <!-- Stats section -->
    ${showStats ? `
    <g>
      <!-- Achievement level -->
      <text 
        x="${padding}" 
        y="${height - 28}" 
        fill="${theme.textSecondary}" 
        font-size="11" 
        font-weight="600"
        opacity="0.7"
      >
        TIER: ${earnedData.tier.toUpperCase()}
      </text>

      <!-- Current value -->
      ${showValue ? `
      <text 
        x="${width - padding}" 
        y="${height - 28}" 
        text-anchor="end"
        fill="${medalColor.primary}" 
        font-size="12" 
        font-weight="700"
      >
        ${earnedData.value}
      </text>
      ` : ''}

      <!-- Tier label -->
      <text 
        x="${padding}" 
        y="${height - 8}" 
        fill="${medalColor.primary}" 
        font-size="11" 
        font-weight="700"
        letter-spacing="0.5"
      >
        ${earnedData.label}
      </text>
    </g>
    ` : ''}
  </g>
  `;
}

/**
 * Build showcase badge
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {object} trophy - Trophy object
 * @param {object} earnedData - Earned data
 * @param {object} options - Customization
 * @returns {string} SVG markup
 */
function buildShowcaseBadge(x, y, trophy, earnedData, options = {}) {
  const {
    size = 120,
    theme,
    animation = 'pulse',
    showLabel = true,
  } = options;

  const medalColor = trophySystem.getMedalColor(earnedData.medal);
  const animDef = animation && animation !== 'none' ? `badge-anim-${trophy.id}-${x}` : '';

  return `
  <g transform="translate(${x}, ${y})">
    <defs>
      <filter id="badgeShadow_${x}_${y}">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.3"/>
      </filter>
      <radialGradient id="badgeGrad_${x}_${y}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${medalColor.light}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${medalColor.primary}" stop-opacity="0.1"/>
      </radialGradient>
      ${animDef ? animationSystem.getAnimationDef(animation, animDef) : ''}
    </defs>

    <!-- Badge circle -->
    <circle 
      cx="${size / 2}" 
      cy="${size / 2}" 
      r="${size / 2}" 
      fill="url(#badgeGrad_${x}_${y})"
      stroke="${medalColor.primary}"
      stroke-width="2"
      filter="url(#badgeShadow_${x}_${y})"
      ${animDef ? `class="badge-anim"` : ''}
    />

    <!-- Inner circle -->
    <circle 
      cx="${size / 2}" 
      cy="${size / 2}" 
      r="${size / 2 - 6}" 
      fill="none"
      stroke="${medalColor.primary}"
      stroke-width="1"
      opacity="0.4"
    />

    <!-- Trophy icon -->
    <g transform="translate(${size / 2 - 15}, ${size / 2 - 15})">
      ${buildMiniTrophyIcon(medalColor.primary, 30)}
    </g>

    <!-- Label -->
    ${showLabel ? `
    <text 
      x="${size / 2}" 
      y="${size + 18}" 
      text-anchor="middle"
      fill="${theme.textPrimary}" 
      font-size="11" 
      font-weight="600"
      font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
      letter-spacing="0.3"
    >
      ${earnedData.tier.toUpperCase()}
    </text>
    ` : ''}
  </g>
  `;
}

/**
 * Build mini trophy icon (used in badges)
 * @param {string} color - Icon color
 * @param {number} size - Icon size
 * @returns {string} SVG group
 */
function buildMiniTrophyIcon(color, size) {
  const scale = size / 40;
  return `
  <g transform="scale(${scale})">
    <!-- Cup -->
    <path d="M8 10 Q8 7 10 7 L30 7 Q32 7 32 10 L28 24 Q28 28 20 28 Q12 28 12 24 Z" 
      fill="${color}" opacity="0.95" />
    <!-- Shine -->
    <ellipse cx="18" cy="14" rx="4" ry="6" fill="white" opacity="0.3" />
    <!-- Handles -->
    <path d="M28 12 Q34 12 34 18 Q34 24 28 24" fill="none" stroke="${color}" stroke-width="2" opacity="0.95" />
    <path d="M12 12 Q6 12 6 18 Q6 24 12 24" fill="none" stroke="${color}" stroke-width="2" opacity="0.95" />
    <!-- Base -->
    <rect x="10" y="28" width="20" height="3" rx="1.5" fill="${color}" opacity="0.95" />
    <rect x="8" y="31" width="24" height="2" rx="1" fill="${color}" opacity="0.8" />
  </g>
  `;
}

/**
 * Build full trophy dashboard
 * @param {object} userStats - GitHub user statistics
 * @param {Array} earnedTrophies - Earned trophy data
 * @param {object} options - Customization options
 * @returns {object} {width, height, content}
 */
function buildDashboard(userStats, earnedTrophies, options = {}) {
  const {
    theme,
    layout = 'grid',
    columns = 3,
    cardWidth = 280,
    cardHeight = 180,
    spacing = 20,
    animation = 'shimmer',
    showStats = true,
  } = options;

  let content = '';
  let currentX = 20;
  let currentY = 20;
  let maxWidth = 20;
  let maxHeight = 40;
  let column = 0;

  earnedTrophies.forEach((earned, index) => {
    const trophy = trophySystem.getTrophy(earned.id);
    if (!trophy) return;

    content += buildTrophyCard(
      currentX,
      currentY,
      trophy,
      earned,
      {
        width: cardWidth,
        height: cardHeight,
        theme,
        animation,
        showStats,
      }
    );

    // Track dimensions
    maxWidth = Math.max(maxWidth, currentX + cardWidth);
    maxHeight = Math.max(maxHeight, currentY + cardHeight);

    // Position next card
    if (layout === 'grid') {
      column++;
      if (column >= columns) {
        currentX = 20;
        currentY += cardHeight + spacing;
        column = 0;
      } else {
        currentX += cardWidth + spacing;
      }
    } else if (layout === 'row') {
      currentX += cardWidth + spacing;
    } else if (layout === 'column') {
      currentY += cardHeight + spacing;
    }
  });

  const width = maxWidth + 20;
  const height = maxHeight + 20;

  return { width, height, content };
}

/**
 * Build trophy wall showcase
 * @param {object} userStats - User stats
 * @param {Array} earnedTrophies - Earned trophies
 * @param {object} options - Options
 * @returns {object} {width, height, content}
 */
function buildWall(userStats, earnedTrophies, options = {}) {
  const {
    theme,
    badgeWidth = 140,
    badgeHeight = 160,
    spacing = 20,
    animation = 'pulse',
  } = options;

  let content = '';
  let currentX = 20;
  let currentY = 20;
  let maxWidth = 20;
  let maxHeight = 40;
  let column = 0;
  const columns = 4;

  earnedTrophies.forEach(earned => {
    const trophy = trophySystem.getTrophy(earned.id);
    if (!trophy) return;

    content += buildShowcaseBadge(
      currentX,
      currentY,
      trophy,
      earned,
      {
        size: badgeWidth,
        theme,
        animation,
        showLabel: true,
      }
    );

    maxWidth = Math.max(maxWidth, currentX + badgeWidth);
    maxHeight = Math.max(maxHeight, currentY + badgeHeight);

    column++;
    if (column >= columns) {
      currentX = 20;
      currentY += badgeHeight + spacing;
      column = 0;
    } else {
      currentX += badgeWidth + spacing;
    }
  });

  const width = maxWidth + 20;
  const height = maxHeight + 20;

  return { width, height, content };
}

module.exports = {
  buildTrophyCard,
  buildShowcaseBadge,
  buildMiniTrophyIcon,
  buildDashboard,
  buildWall,
};
