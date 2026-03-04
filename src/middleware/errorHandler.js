const logger = require('../utils/logger');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });

  // Send a fallback error SVG
  const errorSvg = `
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#2d2d2d" rx="10" />
  <text x="20" y="50" fill="#ff5555" font-size="20" font-family="monospace">Error</text>
  <text x="20" y="90" fill="#f8f8f2" font-size="14" font-family="monospace">${err.message}</text>
  <text x="20" y="130" fill="#f8f8f2" font-size="12" font-family="monospace">Please try again later.</text>
</svg>
  `;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(500).send(errorSvg);
}

module.exports = errorHandler;