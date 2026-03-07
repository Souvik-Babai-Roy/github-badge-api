/**
 * Generate a professional achievement badge
 * @param {number} x - X offset
 * @param {string} label - Badge label
 * @param {boolean} achieved - Whether badge is achieved
 * @param {object} theme - Theme colors
 * @returns {string} SVG group
 */
function achievementBadge(x, label, achieved, theme) {
  const center = 70;
  const radius = 65;
  const color = achieved ? theme.gold : '#444';
  const bgColor = achieved ? theme.gold : '#666';
  const opacity = achieved ? 0.95 : 0.5;
  const strokeOpacity = achieved ? 0.8 : 0.3;

  return `
  <g transform="translate(${x}, 0)">
    <defs>
      <filter id="badgeShadow_${x}" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="${achieved ? 0.25 : 0.1}"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <radialGradient id="badgeGradient_${x}" cx="30%" cy="30%">
        <stop offset="0%" stop-color="${color}" stop-opacity="${opacity}"/>
        <stop offset="100%" stop-color="${bgColor}" stop-opacity="0.7"/>
      </radialGradient>
    </defs>

    <!-- Main badge circle -->
    <g filter="url(#badgeShadow_${x})">
      <!-- Background circle -->
      <circle 
        cx="${center}" 
        cy="${center}" 
        r="${radius}" 
        fill="url(#badgeGradient_${x})" 
        stroke="${color}" 
        stroke-width="2.5"
        stroke-opacity="${strokeOpacity}"
      />
      
      <!-- Inner highlight for dimension -->
      <circle 
        cx="${center - 15}" 
        cy="${center - 15}" 
        r="20" 
        fill="white" 
        opacity="${achieved ? 0.15 : 0.05}"
      />

      <!-- Achievement indicator -->
      ${achieved ? `
        <!-- Checkmark for achieved -->
        <g transform="translate(${center}, ${center - 25})">
          <circle cx="0" cy="0" r="12" fill="white" opacity="0.2"/>
          <path d="M -5 0 L 0 5 L 8 -3" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        </g>
      ` : `
        <!-- Lock for not achieved -->
        <g transform="translate(${center}, ${center - 25})">
          <circle cx="0" cy="0" r="12" fill="white" opacity="0.1"/>
          <path d="M -6 2 L -6 -3 Q -6 -6 -3 -6 L 3 -6 Q 6 -6 6 -3 L 6 2 M -8 2 L 8 2 M -8 2 L -8 6 L 8 6 L 8 2" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.4"/>
        </g>
      `}

      <!-- Badge label -->
      <foreignObject x="${center - 55}" y="${center + 20}" width="110" height="50">
        <div xmlns="http://www.w3.org/1999/xhtml" style="text-align: center; font-size: 11px; font-weight: 700; color: ${achieved ? color : '#999'}; font-family: 'Inter', 'Segoe UI', sans-serif; word-wrap: break-word; opacity: ${achieved ? 1 : 0.6};">
          ${label}
        </div>
      </foreignObject>
    </g>

    <!-- Decorative stars/shine -->
    ${achieved ? `
      <circle cx="${center - 45}" cy="${center - 45}" r="1.5" fill="${theme.accent1}" opacity="0.5"/>
      <circle cx="${center + 50}" cy="${center - 50}" r="1" fill="${theme.accent2}" opacity="0.4"/>
      <circle cx="${center + 35}" cy="${center + 60}" r="1.5" fill="${theme.gold}" opacity="0.4"/>
    ` : ''}
  </g>
  `;
}

module.exports = { achievementBadge };