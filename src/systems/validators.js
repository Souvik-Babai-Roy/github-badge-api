/**
 * Request Parameter Validation System
 * Validates and sanitizes incoming API parameters
 */

const trophyTypes = require('../types/trophy');
const { ANIMATIONS } = require('./animations');

// Valid parameter values
const VALID_MODES = ['dashboard', 'showcase', 'wall', 'single', 'cards', 'badges'];
const VALID_MEDALS = ['gold', 'silver', 'bronze', 'platinum'];
const VALID_TIERS = ['bronze', 'silver', 'gold', 'platinum'];
const VALID_CATEGORIES = ['contribution', 'influence', 'popularity', 'activity', 'premium', 'teamwork', 'discipline', 'community', 'support', 'quality', 'knowledge', 'skill', 'creativity'];
const VALID_SORT_BY = ['name', 'category', 'threshold'];

/**
 * Validate and parse query parameters
 * @param {object} query - Express req.query object
 * @returns {object} Validated parameters or error info
 */
function validateQueryParams(query) {
  const errors = [];
  const params = {};

  // Username (required)
  if (!query.username || typeof query.username !== 'string') {
    errors.push('username is required and must be a string');
  } else {
    params.username = sanitizeString(query.username);
    if (params.username.length < 1 || params.username.length > 39) {
      errors.push('username must be between 1 and 39 characters');
    }
  }

  // Theme
  if (query.theme) {
    params.theme = sanitizeString(query.theme).toLowerCase();
  } else {
    params.theme = 'gotham';
  }

  // Mode
  if (query.mode) {
    params.mode = sanitizeString(query.mode).toLowerCase();
    if (!VALID_MODES.includes(params.mode)) {
      errors.push(`mode must be one of: ${VALID_MODES.join(', ')}`);
    }
  } else {
    params.mode = 'dashboard';
  }

  // Layout style
  if (query.layout) {
    params.layout = sanitizeString(query.layout).toLowerCase();
    const validLayouts = ['grid', 'row', 'column', 'compact', 'expanded'];
    if (!validLayouts.includes(params.layout)) {
      errors.push(`layout must be one of: ${validLayouts.join(', ')}`);
    }
  } else {
    params.layout = 'grid';
  }

  // Medals filter
  if (query.medals) {
    const medalArray = query.medals.split(',').map(m => m.trim().toLowerCase());
    const invalid = medalArray.filter(m => !VALID_MEDALS.includes(m));
    if (invalid.length > 0) {
      errors.push(`Invalid medals: ${invalid.join(', ')}. Must be: ${VALID_MEDALS.join(', ')}`);
    } else {
      params.medals = medalArray;
    }
  } else {
    params.medals = VALID_MEDALS; // Default: all medals
  }

  // Tiers filter
  if (query.tiers) {
    const tierArray = query.tiers.split(',').map(t => t.trim().toLowerCase());
    const invalid = tierArray.filter(t => !VALID_TIERS.includes(t));
    if (invalid.length > 0) {
      errors.push(`Invalid tiers: ${invalid.join(', ')}. Must be: ${VALID_TIERS.join(', ')}`);
    } else {
      params.tiers = tierArray;
    }
  } else {
    params.tiers = VALID_TIERS; // Default: all tiers
  }

  // Categories filter
  if (query.categories) {
    const categoryArray = query.categories.split(',').map(c => c.trim().toLowerCase());
    const invalid = categoryArray.filter(c => !VALID_CATEGORIES.includes(c));
    if (invalid.length > 0) {
      errors.push(`Invalid categories: ${invalid.join(', ')}. Must be: ${VALID_CATEGORIES.join(', ')}`);
    } else {
      params.categories = categoryArray;
    }
  }

  // Preset
  if (query.preset) {
    params.preset = sanitizeString(query.preset).toLowerCase();
    const validPresets = ['minimalist', 'balanced', 'comprehensive', 'pro', 'expert'];
    if (!validPresets.includes(params.preset)) {
      errors.push(`preset must be one of: ${validPresets.join(', ')}`);
    }
  }

  // Trophy IDs
  if (query.trophies) {
    const trophyArray = query.trophies.split(',').map(t => t.trim().toLowerCase());
    const validIds = Object.keys(trophyTypes.TROPHY_TYPES);
    const invalid = trophyArray.filter(t => !validIds.includes(t));
    if (invalid.length > 0) {
      errors.push(`Invalid trophy IDs: ${invalid.join(', ')}`);
    } else {
      params.trophies = trophyArray;
    }
  }

  // Animation
  if (query.animation) {
    params.animation = sanitizeString(query.animation).toLowerCase();
    const validAnimations = Object.keys(ANIMATIONS);
    if (!validAnimations.includes(params.animation)) {
      errors.push(`animation must be one of: ${validAnimations.join(', ')}`);
    }
  } else {
    params.animation = 'shimmer';
  }

  // Dimensions (with validation)
  const dimensionParams = ['width', 'height', 'cardWidth', 'cardHeight', 'badgeWidth', 'badgeHeight', 'spacing', 'padding'];
  dimensionParams.forEach(dim => {
    if (query[dim]) {
      const val = parseInt(query[dim], 10);
      if (isNaN(val) || val < 50 || val > 2000) {
        errors.push(`${dim} must be a number between 50 and 2000`);
      } else {
        params[dim] = val;
      }
    }
  });

  // Set default dimensions
  params.width = params.width || 1200;
  params.height = params.height || 400;
  params.cardWidth = params.cardWidth || 280;
  params.cardHeight = params.cardHeight || 160;
  params.badgeWidth = params.badgeWidth || 120;
  params.badgeHeight = params.badgeHeight || 120;
  params.spacing = params.spacing || 20;
  params.padding = params.padding || 20;

  // Boolean flags
  params.showStats = query.showStats !== 'false';
  params.showAnimation = query.showAnimation !== 'false';
  params.hideMissing = query.hideMissing === 'true';
  params.darkMode = query.darkMode !== 'false';
  params.showRanks = query.showRanks !== 'false';
  params.showIcons = query.showIcons !== 'false';

  // Sort options
  if (query.sortBy) {
    params.sortBy = query.sortBy.toLowerCase();
    if (!VALID_SORT_BY.includes(params.sortBy)) {
      errors.push(`sortBy must be one of: ${VALID_SORT_BY.join(', ')}`);
    }
  } else {
    params.sortBy = 'name';
  }

  params.sortDesc = query.sortDesc === 'true';

  return {
    valid: errors.length === 0,
    errors,
    params,
  };
}

/**
 * Sanitize string input
 * @param {string} input - Input string
 * @returns {string} Sanitized string
 */
function sanitizeString(input) {
  return String(input)
    .trim()
    .replace(/[<>\"'`]/g, '') // Remove dangerous characters
    .substring(0, 100); // Limit length
}

/**
 * Validate theme name
 * @param {string} themeName - Theme name
 * @param {Array} availableThemes - Available theme names
 * @returns {boolean} Is valid
 */
function isValidTheme(themeName, availableThemes) {
  return availableThemes.includes(themeName);
}

/**
 * Get validation help/documentation
 * @returns {object} Validation information
 */
function getValidationInfo() {
  return {
    modes: VALID_MODES,
    medals: VALID_MEDALS,
    tiers: VALID_TIERS,
    categories: VALID_CATEGORIES,
    sortOptions: VALID_SORT_BY,
    animations: Object.keys(ANIMATIONS),
    trophies: Object.keys(trophyTypes.TROPHY_TYPES),
    dimensionConstraints: {
      min: 50,
      max: 2000,
      description: 'Width, height, and size parameters must be between 50 and 2000 pixels',
    },
  };
}

/**
 * Validate theme exists in theme list
 * @param {string} theme - Theme name
 * @param {object} themes - Theme object
 * @returns {boolean} Theme exists
 */
function validateThemeExists(theme, themes) {
  return theme in themes;
}

module.exports = {
  validateQueryParams,
  sanitizeString,
  isValidTheme,
  validateThemeExists,
  getValidationInfo,
  VALID_MODES,
  VALID_MEDALS,
  VALID_TIERS,
  VALID_CATEGORIES,
  VALID_SORT_BY,
};
