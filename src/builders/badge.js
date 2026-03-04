function achievementBadge(x, label, achieved, theme) {
  const color = achieved ? theme.gold : '#555';
  const center = 60; // circle center
  const radius = 50;

  return `
  <g transform="translate(${x}, 0)">
    <circle cx="${center}" cy="${center}" r="${radius}" fill="url(#bg)" stroke="${color}" stroke-width="4"/>
    <text x="${center}" y="${center + 5}" text-anchor="middle" fill="${color}" font-size="14" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
      ${label}
    </text>
  </g>
  `;
}

module.exports = { achievementBadge };