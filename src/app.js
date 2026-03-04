const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const config = require('./config');
const logger = require('./utils/logger');
const github = require('./services/github');
const { getTheme } = require('./themes');
const { buildDashboardSVG, buildBadgesSVG, buildSingleSVG } = require('./builders/layout');
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security & utilities
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(rateLimiter);

// Health check
app.get('/health', (req, res) => res.send('OK'));

// Main endpoint
app.get('/api/trophy', async (req, res, next) => {
  try {
    const { username, theme: themeName = 'gotham', mode = 'dashboard' } = req.query;

    if (!username) {
      const error = new Error('Missing username parameter');
      error.status = 400;
      throw error;
    }

    // Fetch data
    const [user, stars] = await Promise.all([
      github.getUser(username),
      github.getTotalStars(username),
    ]);

    const theme = getTheme(themeName);

    // Build layout based on mode
    let layout;
    const dimensions = {
      cardWidth: parseInt(req.query.cardWidth, 10) || 280,
      cardHeight: parseInt(req.query.cardHeight, 10) || 160,
      badgeWidth: parseInt(req.query.badgeWidth, 10) || 120,
      badgeHeight: parseInt(req.query.badgeHeight, 10) || 120,
      spacing: parseInt(req.query.spacing, 10) || 20,
    };

    switch (mode) {
      case 'badges':
        layout = buildBadgesSVG(user, stars, theme, dimensions);
        break;
      case 'single':
        layout = buildSingleSVG(user, theme, dimensions);
        break;
      case 'dashboard':
      default:
        layout = buildDashboardSVG(user, stars, theme, dimensions);
    }

    // SVG template with gradients and optional shimmer
    const shimmer = req.query.shimmer !== 'false'; // enabled by default
const svg = `
<svg width="${layout.width}" height="${layout.height}" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <defs>
    <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${theme.bg1}"/>
      <stop offset="100%" stop-color="${theme.bg2}"/>
    </linearGradient>
    <filter id="dropShadow" x="-0.02" y="-0.02" width="1.04" height="1.04">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
    ${shimmer ? `
    <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.0">
        <animate attributeName="offset" values="-1;1" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/>
    </linearGradient>` : ''}
  </defs>

  ${layout.content}

  ${shimmer ? `<rect width="${layout.width}" height="${layout.height}" fill="url(#shimmer)" />` : ''}
</svg>
`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', `public, max-age=${config.cache.ttl}`);
    res.send(svg);
  } catch (error) {
    // Pass to global error handler
    next(error);
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Global error handler
app.use(errorHandler);

module.exports = app;