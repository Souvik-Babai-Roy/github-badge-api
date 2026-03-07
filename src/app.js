const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const config = require('./config');
const logger = require('./utils/logger');
const github = require('./services/github');
const { getTheme } = require('./themes');
const rateLimiter = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

// Professional systems
const validators = require('./systems/validators');
const filterSystem = require('./systems/filters');
const presets = require('./systems/presets');
const trophyBuilder = require('./builders/advanced-trophy-builder');
const animationSystem = require('./systems/animations');

const app = express();

// Security & utilities
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(rateLimiter);

// Health check
app.get('/health', (req, res) => res.json({ status: 'OK' }));

// API Documentation endpoint
app.get('/api/docs', (req, res) => {
  res.json({
    name: 'GitHub Trophy Badge API v2.0',
    description: 'Professional GitHub trophy badge generator with advanced filtering and customization',
    version: '2.0.0',
    endpoints: {
      '/api/trophy': {
        description: 'Generate custom trophy badges',
        method: 'GET',
        parameters: {
          username: 'GitHub username (required)',
          theme: 'Color theme (default: gotham)',
          preset: 'Configuration preset (minimalist, balanced, comprehensive, professional, expert, etc.)',
          mode: 'Display mode (dashboard, showcase, wall, single, cards, badges)',
          medals: 'Filter by medals (gold, silver, bronze, platinum) - comma separated',
          tiers: 'Filter by tiers - comma separated',
          categories: 'Filter by categories - comma separated',
          trophies: 'Specific trophy IDs to display - comma separated',
          animation: 'Animation type (none, shimmer, pulse, glow, wave, bounce, float, rotate, rainbow)',
          layout: 'Layout style (grid, row, column, compact, expanded)',
          sortBy: 'Sort trophies (name, category, threshold)',
          sortDesc: 'Sort descending (true/false)',
          showStats: 'Show statistics (true/false)',
          showRanks: 'Show rank information (true/false)',
          showIcons: 'Show icons (true/false)',
          cardWidth: 'Card width in pixels (50-2000)',
          cardHeight: 'Card height in pixels (50-2000)',
          spacing: 'Spacing between items (50-2000)',
        },
      },
      '/api/presets': 'List available presets',
      '/api/validation': 'Get validation information',
      '/api/docs': 'This documentation',
    },
  });
});

// Validation/Info endpoints
app.get('/api/validation', (req, res) => {
  res.json(validators.getValidationInfo());
});

app.get('/api/presets', (req, res) => {
  res.json({
    presets: presets.listPresets(),
    description: 'Use preset parameter in /api/trophy endpoint',
  });
});

// Main trophy badge endpoint
app.get('/api/trophy', async (req, res, next) => {
  try {
    // Validate parameters
    const validation = validators.validateQueryParams(req.query);
    if (!validation.valid) {
      const error = new Error(`Validation error: ${validation.errors.join(', ')}`);
      error.status = 400;
      throw error;
    }

    const params = validation.params;
    logger.debug(`Trophy request: username=${params.username}, preset=${params.preset}`);

    // Fetch GitHub data
    const [user, stars] = await Promise.all([
      github.getUser(params.username),
      github.getTotalStars(params.username),
    ]);

    // Prepare user statistics
    const userStats = {
      repos: user.public_repos,
      followers: user.followers,
      stars: stars,
      contributions: user.public_repos + user.followers, // Placeholder
      languages: [], // Can be enhanced with GitHub API
    };

    // Get theme
    const theme = getTheme(params.theme);

    // Apply preset if specified
    let finalConfig = params.preset
      ? presets.applyPreset(params.preset, params)
      : params;

    // Earn trophies based on user stats
    const earnedTrophies = filterSystem.earnTrophies(userStats);

    // Apply filters
    const filteredTrophies = filterSystem.filterTrophies({
      categories: finalConfig.categories,
      medals: finalConfig.medals,
      tiers: finalConfig.tiers,
      ids: finalConfig.trophies,
    }).map(trophy => {
      const earned = earnedTrophies.find(e => e.id === trophy.id);
      return earned;
    }).filter(Boolean); // Remove undefined

    // Sort trophies
    const sortedTrophies = filterSystem.sortTrophies(
      filteredTrophies,
      finalConfig.sortBy,
      finalConfig.sortDesc
    );

    // Build layout based on mode
    let layout;
    const mode = finalConfig.mode || 'dashboard';

    switch (mode) {
      case 'wall':
      case 'showcase':
        layout = trophyBuilder.buildWall(userStats, sortedTrophies, {
          theme,
          animation: finalConfig.animation,
          spacing: finalConfig.spacing,
        });
        break;
      case 'dashboard':
      case 'cards':
      default:
        layout = trophyBuilder.buildDashboard(userStats, sortedTrophies, {
          theme,
          layout: finalConfig.layout,
          columns: finalConfig.layout === 'grid' ? 3 : 1,
          cardWidth: finalConfig.cardWidth,
          cardHeight: finalConfig.cardHeight,
          spacing: finalConfig.spacing,
          animation: finalConfig.animation,
          showStats: finalConfig.showStats,
        });
    }

    // Build final SVG
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg 
  width="${layout.width}" 
  height="${layout.height}" 
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink"
  font-family="'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
>
  <defs>
    <style>
      @keyframes shimmer-anim {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes pulse-anim {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes bounce-anim {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes float-anim {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @keyframes rotate-anim {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.bg1}"/>
      <stop offset="100%" stop-color="${theme.bg2}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${layout.width}" height="${layout.height}" fill="url(#bgGradient)"/>

  <!-- Trophy content -->
  ${layout.content}
</svg>
`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', `public, max-age=${config.cache.ttl}`);
    res.send(svg);
  } catch (error) {
    next(error);
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use(errorHandler);

module.exports = app;