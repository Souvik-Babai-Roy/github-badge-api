const { getRank } = require('../utils/rank');

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
  const trophyX = width - 80; // right aligned

  return `
  <g transform="translate(${x}, 0)">
    <rect width="${width}" height="${height}" rx="20" fill="url(#bg)" />

    <text x="${padding}" y="35" fill="${theme.textSecondary}" font-size="14" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      ${title}
    </text>

    <text x="${padding}" y="80" fill="${theme.textPrimary}" font-size="32" font-weight="bold" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      ${value}
    </text>

    <text x="${padding}" y="115" fill="${medalColor}" font-size="18" font-weight="bold" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      Rank ${rank.label}
    </text>

    <g transform="translate(${trophyX}, 40)">
      <path d="M20 10 L40 10 L35 30 L25 30 Z" fill="${medalColor}" />
      <rect x="27" y="30" width="6" height="10" fill="${medalColor}" />
      <rect x="22" y="40" width="16" height="4" fill="${medalColor}" />
    </g>
  </g>
  `;
}

module.exports = { createCard };