/**
 * Trophy Showcase Presets
 * Predefined configurations for common use cases
 */

const PRESETS = {
  // Minimalist - Only essential trophies
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Shows only top achievements - clean and minimal',
    config: {
      layout: 'row',
      columns: 3,
      displays: ['repositories', 'followers', 'stars'],
      medals: ['gold', 'platinum'],
      animation: 'none',
      showStats: false,
      cardWidth: 200,
      cardHeight: 140,
      spacing: 10,
      mode: 'badges',
    },
  },

  // Balanced - Good mix of trophies
  balanced: {
    id: 'balanced',
    name: 'Balanced',
    description: 'A well-rounded display of achievements',
    config: {
      layout: 'grid',
      columns: 3,
      displays: ['repositories', 'followers', 'stars', 'contributions'],
      medals: ['bronze', 'silver', 'gold', 'platinum'],
      animation: 'shimmer',
      showStats: true,
      cardWidth: 280,
      cardHeight: 160,
      spacing: 15,
      mode: 'dashboard',
    },
  },

  // Comprehensive - All achievements
  comprehensive: {
    id: 'comprehensive',
    name: 'Comprehensive',
    description: 'Complete trophy collection display',
    config: {
      layout: 'grid',
      columns: 4,
      // Display all available trophies
      medals: ['bronze', 'silver', 'gold', 'platinum'],
      animation: 'pulse',
      showStats: true,
      cardWidth: 200,
      cardHeight: 140,
      spacing: 15,
      mode: 'wall',
    },
  },

  // Professional
  professional: {
    id: 'professional',
    name: 'Professional',
    description: 'Premium professional appearance',
    config: {
      layout: 'grid',
      columns: 3,
      displays: ['repositories', 'followers', 'stars', 'contributions', 'openSource'],
      medals: ['silver', 'gold', 'platinum'],
      animation: 'glow',
      showStats: true,
      showRanks: true,
      cardWidth: 320,
      cardHeight: 180,
      spacing: 20,
      mode: 'dashboard',
    },
  },

  // Expert - Detailed view
  expert: {
    id: 'expert',
    name: 'Expert',
    description: 'In-depth achievement breakdown with all trophies',
    config: {
      layout: 'grid',
      columns: 5,
      medals: ['bronze', 'silver', 'gold', 'platinum'],
      animation: 'bounce',
      showStats: true,
      showRanks: true,
      showIcons: true,
      cardWidth: 180,
      cardHeight: 140,
      spacing: 12,
      mode: 'wall',
    },
  },

  // Showcase - Large display
  showcase: {
    id: 'showcase',
    name: 'Showcase',
    description: 'Large, eye-catching trophy display',
    config: {
      layout: 'grid',
      columns: 2,
      displays: ['repositories', 'followers', 'stars', 'contributions'],
      medals: ['gold', 'platinum'],
      animation: 'glow',
      showStats: true,
      cardWidth: 400,
      cardHeight: 200,
      spacing: 30,
      mode: 'dashboard',
    },
  },

  // Compact - Small, efficient
  compact: {
    id: 'compact',
    name: 'Compact',
    description: 'Space-efficient compact layout',
    config: {
      layout: 'row',
      columns: 6,
      displays: ['repositories', 'followers', 'stars'],
      medals: ['gold', 'silver'],
      animation: 'shimmer',
      showStats: false,
      cardWidth: 120,
      cardHeight: 100,
      spacing: 5,
      mode: 'badges',
    },
  },

  // Developer-focused
  devfocus: {
    id: 'devfocus',
    name: 'Developer Focus',
    description: 'Emphasizes coding activity and contributions',
    config: {
      layout: 'grid',
      columns: 3,
      displays: ['repositories', 'contributions', 'openSource', 'codeReview', 'documentation'],
      medals: ['silver', 'gold', 'platinum'],
      animation: 'float',
      showStats: true,
      cardWidth: 260,
      cardHeight: 160,
      spacing: 15,
      mode: 'dashboard',
    },
  },

  // Social-focused
  socialfocus: {
    id: 'socialfocus',
    name: 'Social Focus',
    description: 'Emphasizes community and social metrics',
    config: {
      layout: 'grid',
      columns: 3,
      displays: ['followers', 'collaboration', 'contributions', 'openSource', 'streak'],
      medals: ['gold', 'platinum'],
      animation: 'rainbow',
      showStats: true,
      cardWidth: 260,
      cardHeight: 160,
      spacing: 15,
      mode: 'dashboard',
    },
  },
};

/**
 * Get preset by ID
 * @param {string} presetId - Preset ID
 * @returns {object} Preset configuration
 */
function getPreset(presetId) {
  return PRESETS[presetId] || PRESETS.balanced;
}

/**
 * List all available presets
 * @returns {Array} Array of preset info objects
 */
function listPresets() {
  return Object.values(PRESETS).map(preset => ({
    id: preset.id,
    name: preset.name,
    description: preset.description,
  }));
}

/**
 * Get preset configuration
 * @param {string} presetId - Preset ID
 * @returns {object} Configuration object
 */
function getPresetConfig(presetId) {
  const preset = getPreset(presetId);
  return preset.config;
}

/**
 * Apply preset and merge with custom options
 * @param {string} presetId - Preset ID
 * @param {object} customOptions - Custom options to override
 * @returns {object} Final merged configuration
 */
function applyPreset(presetId, customOptions = {}) {
  const presetConfig = getPresetConfig(presetId);
  return {
    ...presetConfig,
    ...customOptions,
  };
}

/**
 * Create custom preset
 * @param {string} id - Preset ID
 * @param {string} name - Display name
 * @param {string} description - Description
 * @param {object} config - Configuration
 * @returns {object} New preset
 */
function createCustomPreset(id, name, description, config) {
  return {
    id,
    name,
    description,
    config,
  };
}

/**
 * Get presets by animation type
 * @param {string} animationType - Animation ID
 * @returns {Array} Matching presets
 */
function getPresetsByAnimation(animationType) {
  return Object.values(PRESETS)
    .filter(preset => preset.config.animation === animationType)
    .map(preset => ({ id: preset.id, name: preset.name }));
}

/**
 * Get presets by layout
 * @param {string} layout - Layout type
 * @returns {Array} Matching presets
 */
function getPresetsByLayout(layout) {
  return Object.values(PRESETS)
    .filter(preset => preset.config.layout === layout)
    .map(preset => ({ id: preset.id, name: preset.name }));
}

module.exports = {
  PRESETS,
  getPreset,
  listPresets,
  getPresetConfig,
  applyPreset,
  createCustomPreset,
  getPresetsByAnimation,
  getPresetsByLayout,
};
