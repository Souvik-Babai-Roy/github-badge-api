const { getRank } = require('../utils/rank');

/**
 * Generate a professional trophy icon with enhanced design
 * @param {string} color - Icon color
 * @param {number} size - Icon size (default: 60)
 * @returns {string} SVG group
 */
function trophyIcon(color, size = 60) {
  const scale = size / 60;
  return `
  <g transform="scale(${scale})">
    <!-- Cup body -->
    <path d="M15 12 Q15 8 19 8 L41 8 Q45 8 45 12 L40 32 Q40 38 30 38 Q20 38 20 32 Z" fill="${color}" opacity="0.95" />
    <!-- Cup shine/highlight -->
    <ellipse cx="28" cy="18" rx="6" ry="8" fill="white" opacity="0.25" />
    <!-- Handle left -->
    <path d="M40 15 Q48 15 48 25 Q48 35 40 35" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.95" />
    <!-- Handle right mirror -->
    <path d="M20 15 Q12 15 12 25 Q12 35 20 35" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.95" />
    <!-- Base -->
    <rect x="18" y="38" width="24" height="4" rx="2" fill="${color}" opacity="0.95" />
    <rect x="15" y="42" width="30" height="3" rx="1" fill="${color}" opacity="0.8" />
    <!-- Stars -->
    <g transform="translate(30, 22)" opacity="0.6">
      <polygon points="0,-2 0.6,-0.6 2,-0.6 1,0.5 1.6,2 0,1.2 -1.6,2 -1,0.5 -2,-0.6 -0.6,-0.6" fill="white" />
    </g>
  </g>
  `;
}

/**
 * Generate a professional statistic card with modern design
 * @param {number} x - X offset
 * @param {string} title - Card title
 * @param {number} value - Numeric value
 * @param {object} theme - Theme colors
 * @param {object} dimensions - Card dimensions (width, height)
 * @returns {string} SVG group
 */
function createCard(x, title, value, theme, dimensions = { width: 300, height: 180 }) {
  const { width, height } = dimensions;
  const rank = getRank(value);
  const medalColor = theme[rank.medal];
  const padding = 24;
  const cornerRadius = 24;

  return `
  <g transform="translate(${x}, 0)">
    <!-- Card shadow for depth -->
    <defs>
      <filter id="cardShadow_${x}" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="0" dy="6" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Main card background -->
    <g filter="url(#cardShadow_${x})">
      <!-- Card base with gradient -->
      <rect 
        width="${width}" 
        height="${height}" 
        rx="${cornerRadius}" 
        fill="url(#mainGradient_${x})" 
        stroke="${theme.accent1}" 
        stroke-width="1.5" 
        stroke-opacity="0.4"
      />
      
      <!-- Glassmorphism overlay -->
      <rect 
        width="${width}" 
        height="${cornerRadius}" 
        rx="${cornerRadius}" 
        fill="white" 
        opacity="0.08"
      />

      <!-- Accent bar on top -->
      <rect 
        width="${width}" 
        height="3" 
        rx="2" 
        fill="${medalColor}" 
        opacity="0.8"
      />

      <!-- Left accent stripe -->
      <rect 
        width="4" 
        height="${height}" 
        rx="2" 
        fill="${theme.accent1}" 
        opacity="0.15"
      />

      <defs>
        <linearGradient id="mainGradient_${x}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.bg1}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="${theme.bg2}" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="textGradient_${x}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${theme.textPrimary}"/>
          <stop offset="100%" stop-color="${theme.accent2}"/>
        </linearGradient>
      </defs>

      <!-- Title label -->
      <text 
        x="${padding}" 
        y="${padding + 4}" 
        fill="${theme.textSecondary}" 
        font-size="13" 
        font-weight="600" 
        font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
        letter-spacing="0.5"
        opacity="0.8"
      >
        ${title.toUpperCase()}
      </text>

      <!-- Main value -->
      <text 
        x="${padding}" 
        y="${padding + 52}" 
        fill="${theme.textPrimary}" 
        font-size="48" 
        font-weight="800" 
        font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
      >
        ${value}
      </text>

      <!-- Rank badge section -->
      <g transform="translate(${padding}, ${height - 36})">
        <!-- Rank background -->
        <rect 
          width="70" 
          height="28" 
          rx="10" 
          fill="${medalColor}" 
          opacity="0.2" 
          stroke="${medalColor}" 
          stroke-width="1"
          stroke-opacity="0.6"
        />
        
        <!-- Rank indicator dot -->
        <circle cx="8" cy="14" r="4" fill="${medalColor}" opacity="0.9" />
        
        <!-- Rank text -->
        <text 
          x="20" 
          y="18" 
          fill="${medalColor}" 
          font-size="13" 
          font-weight="700" 
          font-family="'Inter', 'Segoe UI', Roboto, sans-serif"
        >
          Rank ${rank.label}
        </text>
      </g>

      <!-- Trophy icon -->
      <g transform="translate(${width - 60}, ${height - 60})">
        ${trophyIcon(medalColor, 45)}
      </g>

      <!-- Decorative corner element -->
      <circle 
        cx="${width - 20}" 
        cy="20" 
        r="1.5" 
        fill="${theme.accent2}" 
        opacity="0.4"
      />
      <circle 
        cx="${width - 12}" 
        cy="28" 
        r="1" 
        fill="${theme.accent1}" 
        opacity="0.3"
      />
    </g>
  </g>
  `;
}

module.exports = { createCard, trophyIcon };