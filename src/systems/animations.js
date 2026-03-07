/**
 * Professional Animation System
 * Provides multiple animation types for enhanced visual appeal
 */

const ANIMATIONS = {
  // NO ANIMATION - Pure static SVG
  none: {
    id: 'none',
    name: 'None',
    description: 'No animation - static SVG',
    duration: 0,
    getSVGDef: () => '',
    getElementTransform: () => '',
  },

  // SHIMMER - Glossy shine effect
  shimmer: {
    id: 'shimmer',
    name: 'Shimmer',
    description: 'Glossy shimmer effect running across the badge',
    duration: 3,
    getSVGDef: (gradientId = 'shimmer') => `
    <linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      <animate attributeName="x1" values="0;1;0" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="1;2;1" dur="3s" repeatCount="indefinite"/>
    </linearGradient>`,
    getElementTransform: (width, height, gradientId = 'shimmer') =>
      `<rect width="${width}" height="${height}" fill="url(#${gradientId})" opacity="0.8" />`,
  },

  // PULSE - Opacity pulsing
  pulse: {
    id: 'pulse',
    name: 'Pulse',
    description: 'Gentle pulsing opacity effect',
    duration: 2,
    getSVGDef: (id = 'pulse') => `
    <style>
      @keyframes pulse-anim {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      .${id} { animation: pulse-anim 2s ease-in-out infinite; }
    </style>`,
    getElementTransform: (width, height, id = 'pulse') =>
      `class="${id}"`,
  },

  // GLOW - Outer glow effect
  glow: {
    id: 'glow',
    name: 'Glow',
    description: 'Radiant glow effect around the badge',
    duration: 2,
    getSVGDef: (filterId = 'glow') => `
    <filter id="${filterId}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
      <feColorMatrix type="saturate" values="1.2"/>
      <animate attributeName="stdDeviation" 
        values="1;3;1" 
        dur="2s" 
        repeatCount="indefinite"/>
    </filter>`,
    getElementTransform: (width, height, filterId = 'glow') =>
      `filter="url(#${filterId})"`,
  },

  // WAVE - Wave distortion effect
  wave: {
    id: 'wave',
    name: 'Wave',
    description: 'Subtle wave distortion effect',
    duration: 3,
    getSVGDef: (filterId = 'wave') => `
    <filter id="${filterId}">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1">
        <animate attributeName="scale" values="0.5;2;0.5" dur="3s" repeatCount="indefinite"/>
      </feDisplacementMap>
    </filter>`,
    getElementTransform: (width, height, filterId = 'wave') =>
      `filter="url(#${filterId})"`,
  },

  // BOUNCE - Scale pulsing effect
  bounce: {
    id: 'bounce',
    name: 'Bounce',
    description: 'Bouncy scale effect',
    duration: 1.5,
    getSVGDef: (id = 'bounce') => `
    <style>
      @keyframes bounce-anim {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .${id} { animation: bounce-anim 1.5s ease-in-out infinite; }
    </style>`,
    getElementTransform: (width, height, id = 'bounce', x = 0, y = 0) =>
      `class="${id}" transform-origin="${x + width / 2} ${y + height / 2}"`,
  },

  // FLOAT - Gentle vertical movement
  float: {
    id: 'float',
    name: 'Float',
    description: 'Gentle floating motion',
    duration: 3,
    getSVGDef: (id = 'float') => `
    <style>
      @keyframes float-anim {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      .${id} { animation: float-anim 3s ease-in-out infinite; }
    </style>`,
    getElementTransform: (width, height, id = 'float', x = 0, y = 0) =>
      `class="${id}" transform-origin="${x + width / 2} ${y + height / 2}"`,
  },

  // ROTATE - Continuous rotation
  rotate: {
    id: 'rotate',
    name: 'Rotate',
    description: 'Continuous rotation effect',
    duration: 4,
    getSVGDef: (id = 'rotate') => `
    <style>
      @keyframes rotate-anim {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .${id} { animation: rotate-anim 4s linear infinite; }
    </style>`,
    getElementTransform: (width, height, id = 'rotate', x = 0, y = 0) =>
      `class="${id}" transform-origin="${x + width / 2} ${y + height / 2}"`,
  },

  // GRADIENT SHIFT - Color animation
  gradientShift: {
    id: 'gradientShift',
    name: 'Gradient Shift',
    description: 'Animated color gradient shift',
    duration: 3,
    getSVGDef: (gradietId = 'gradShift') => `
    <linearGradient id="${gradietId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff006e" stop-opacity="1">
        <animate attributeName="stop-color" 
          values="#ff006e;#ffbe0b;#00d9ff;#ff006e" 
          dur="3s" 
          repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#00d9ff" stop-opacity="1">
        <animate attributeName="stop-color" 
          values="#00d9ff;#ff006e;#ffbe0b;#00d9ff" 
          dur="3s" 
          repeatCount="indefinite"/>
      </stop>
    </linearGradient>`,
    getElementTransform: (width, height, gradietId = 'gradShift') =>
      `fill="url(#${gradietId})"`,
  },

  // FLIP - 3D flip effect
  flip: {
    id: 'flip',
    name: 'Flip',
    description: '3D flip card effect',
    duration: 2,
    getSVGDef: (id = 'flip') => `
    <style>
      @keyframes flip-anim {
        0%, 100% { transform: rotateY(0deg); }
        50% { transform: rotateY(180deg); }
      }
      .${id} { animation: flip-anim 2s ease-in-out infinite; }
    </style>`,
    getElementTransform: (width, height, id = 'flip', x = 0, y = 0) =>
      `class="${id}" transform-origin="${x + width / 2} ${y + height / 2}"`,
  },

  // RAINBOWS - Slow rainbow effect
  rainbow: {
    id: 'rainbow',
    name: 'Rainbow',
    description: 'Beautiful rainbow color cycling',
    duration: 4,
    getSVGDef: (gradientId = 'rainbow') => `
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff0000">
        <animate attributeName="offset" values="0%;100%;100%" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="20%" stop-color="#ff7f00">
        <animate attributeName="offset" values="20%;120%;120%" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="40%" stop-color="#ffff00">
        <animate attributeName="offset" values="40%;140%;140%" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="60%" stop-color="#00ff00">
        <animate attributeName="offset" values="60%;160%;160%" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="80%" stop-color="#0000ff">
        <animate attributeName="offset" values="80%;180%;180%" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>`,
    getElementTransform: (width, height, gradientId = 'rainbow') =>
      `fill="url(#${gradientId})"`,
  },
};

/**
 * Get all available animations
 * @returns {Array} Array of animation objects
 */
function getAllAnimations() {
  return Object.values(ANIMATIONS).map(anim => ({
    id: anim.id,
    name: anim.name,
    description: anim.description,
    duration: anim.duration,
  }));
}

/**
 * Get animation by ID
 * @param {string} id - Animation ID
 * @returns {object} Animation object
 */
function getAnimation(id) {
  return ANIMATIONS[id] || ANIMATIONS.none;
}

/**
 * Get SVG definition for animation
 * @param {string} animationId - Animation ID
 * @param {string} defId - Definition ID for gradients/filters
 * @returns {string} SVG definition markup
 */
function getAnimationDef(animationId, defId = animationId) {
  const animation = getAnimation(animationId);
  return animation.getSVGDef(defId);
}

/**
 * Get animation element transform
 * @param {string} animationId - Animation ID
 * @param {number} width - Element width
 * @param {number} height - Element height
 * @param {string} defId - Definition ID
 * @param {number} x - X position (for origin)
 * @param {number} y - Y position (for origin)
 * @returns {string} Transform or attribute string
 */
function getAnimationTransform(animationId, width, height, defId, x = 0, y = 0) {
  const animation = getAnimation(animationId);
  return animation.getElementTransform(width, height, defId, x, y);
}

/**
 * List animations by duration
 * @param {number} maxDuration - Maximum duration in seconds
 * @returns {Array} Filtered animations
 */
function getAnimationsByDuration(maxDuration) {
  return Object.values(ANIMATIONS)
    .filter(anim => anim.duration > 0 && anim.duration <= maxDuration)
    .map(anim => ({
      id: anim.id,
      name: anim.name,
      description: anim.description,
      duration: anim.duration,
    }));
}

module.exports = {
  ANIMATIONS,
  getAllAnimations,
  getAnimation,
  getAnimationDef,
  getAnimationTransform,
  getAnimationsByDuration,
};
