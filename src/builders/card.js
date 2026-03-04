const { getRank } = require('../utils/rank');

/**
 * Generate a trophy icon with customizable size
 * @param {string} color - Icon color
 * @param {number} size - Icon size (default: 60)
 * @returns {string} SVG group
 */
function trophyIcon(color, size = 60) {
  const scale = size / 60; // original design at 60x60
  return `
  <g transform="scale(${scale})">
    <path d="M20 10 L40 10 L45 25 L40 40 L20 40 L15 25 L20 10" fill="${color}" opacity="0.9" />
    <circle cx="30" cy="25" r="8" fill="white" opacity="0.3" />
    <rect x="25" y="40" width="10" height="12" fill="${color}" rx="2" />
    <rect x="18" y="52" width="24" height="4" fill="${color}" rx="1" />
    <path d="M30 10 L30 5 L34 5 L30 0 L26 5 L30 5" fill="${color}" />
  </g>
  `;
}

/**
 * Generate a statistic card
 * @param {number} x - X offset
 * @param {string} title - Card title
 * @param {number} value - Numeric value
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Card dimensions (width, height)
 * @returns {string} SVG group
 */
function createCard(x, title, value, theme, dimensions = { width: 280, height: 160 }) {
  const { width, height } = dimensions;
  const rank = getRank(value);
  const medalColor = theme[rank.medal];
  const padding = 20;
  const trophyX = width - 80;

  return `
  <g transform="translate(${x}, 0)" filter="url(#dropShadow)">
    <!-- Card background with gradient and inner border -->
    <rect width="${width}" height="${height}" rx="20" fill="url(#cardGradient)" stroke="${theme.accent1}" stroke-width="1" stroke-opacity="0.3" />
    
    <!-- Subtle highlight at top -->
    <rect width="${width}" height="4" rx="2" fill="white" opacity="0.1" y="5" />

    <!-- Title -->
    <text x="${padding}" y="35" fill="${theme.textSecondary}" font-size="14" font-weight="500" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      ${title}
    </text>

    <!-- Value -->
    <text x="${padding}" y="80" fill="${theme.textPrimary}" font-size="36" font-weight="700" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      ${value}
    </text>

    <!-- Rank badge with medal icon -->
    <g transform="translate(${padding}, 100)">
      <circle cx="10" cy="10" r="8" fill="${medalColor}" />
      <text x="25" y="15" fill="${medalColor}" font-size="14" font-weight="600">Rank ${rank.label}</text>
    </g>

    <!-- Trophy -->
    <g transform="translate(${trophyX}, 30)">
      ${trophyIcon(medalColor, 50)}
    </g>
  </g>
  `;
}

module.exports = { createCard, trophyIcon };