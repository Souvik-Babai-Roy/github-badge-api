/**
 * Trophy Type Definitions & System
 * Defines all available trophy types with achievement tiers and medals
 */

const TROPHY_TYPES = {
  // REPOSITORIES
  repositories: {
    id: 'repositories',
    name: 'Repository Master',
    description: 'Awarded for maintaining multiple repositories',
    category: 'contribution',
    icon: 'repo',
    tiers: {
      bronze: { threshold: 5, medal: 'bronze', label: 'Rising Developer' },
      silver: { threshold: 20, medal: 'silver', label: 'Code Architect' },
      gold: { threshold: 50, medal: 'gold', label: 'Repository Legend' },
      platinum: { threshold: 100, medal: 'platinum', label: 'Master Developer' },
    },
  },

  // FOLLOWERS
  followers: {
    id: 'followers',
    name: 'Community Leader',
    description: 'Awarded for building a strong community following',
    category: 'influence',
    icon: 'community',
    tiers: {
      bronze: { threshold: 10, medal: 'bronze', label: 'Emerging Voice' },
      silver: { threshold: 50, medal: 'silver', label: 'Tech Influencer' },
      gold: { threshold: 100, medal: 'gold', label: 'Industry Leader' },
      platinum: { threshold: 500, medal: 'platinum', label: 'Thought Leader' },
    },
  },

  // STARS
  stars: {
    id: 'stars',
    name: 'Star Collector',
    description: 'Awarded for creating popular, well-received code',
    category: 'popularity',
    icon: 'star',
    tiers: {
      bronze: { threshold: 50, medal: 'bronze', label: 'Appreciated Creator' },
      silver: { threshold: 500, medal: 'silver', label: 'Popular Developer' },
      gold: { threshold: 2000, medal: 'gold', label: 'Star Renowned' },
      platinum: { threshold: 5000, medal: 'platinum', label: 'Legend Status' },
    },
  },

  // CONTRIBUTIONS
  contributions: {
    id: 'contributions',
    name: 'Contribution Champion',
    description: 'Awarded for consistent contribution activity',
    category: 'activity',
    icon: 'commit',
    tiers: {
      bronze: { threshold: 500, medal: 'bronze', label: 'Active Contributor' },
      silver: { threshold: 2000, medal: 'silver', label: 'Dedicated Developer' },
      gold: { threshold: 5000, medal: 'gold', label: 'Prolific Coder' },
      platinum: { threshold: 10000, medal: 'platinum', label: 'Contribution Titan' },
    },
  },

  // GITHUB PRO STATUS
  githubPro: {
    id: 'githubPro',
    name: 'GitHub Pro',
    description: 'Awarded for GitHub Pro account status',
    category: 'premium',
    icon: 'verified',
    tiers: {
      gold: { threshold: 1, medal: 'gold', label: 'Pro Member' },
    },
  },

  // COLLABORATION
  collaboration: {
    id: 'collaboration',
    name: 'Collaboration Specialist',
    description: 'Awarded for working across multiple projects',
    category: 'teamwork',
    icon: 'users',
    tiers: {
      bronze: { threshold: 3, medal: 'bronze', label: 'Team Player' },
      silver: { threshold: 10, medal: 'silver', label: 'Collaboration Expert' },
      gold: { threshold: 25, medal: 'gold', label: 'Partnership Master' },
      platinum: { threshold: 50, medal: 'platinum', label: 'Network Leader' },
    },
  },

  // STREAK (Active contribution days in last 90 days)
  streak: {
    id: 'streak',
    name: 'Consistency Champion',
    description: 'Awarded for maintaining active contribution streaks',
    category: 'discipline',
    icon: 'flame',
    tiers: {
      bronze: { threshold: 15, medal: 'bronze', label: 'Consistent Coder' },
      silver: { threshold: 30, medal: 'silver', label: 'Streak Master' },
      gold: { threshold: 60, medal: 'gold', label: 'Unstoppable Force' },
      platinum: { threshold: 90, medal: 'platinum', label: 'Perfect Dedication' },
    },
  },

  // OPEN SOURCE CONTRIBUTIONS
  openSource: {
    id: 'openSource',
    name: 'Open Source Champion',
    description: 'Awarded for contributing to open source projects',
    category: 'community',
    icon: 'github',
    tiers: {
      bronze: { threshold: 10, medal: 'bronze', label: 'Open Source Contributor' },
      silver: { threshold: 50, medal: 'silver', label: 'OSS Advocate' },
      gold: { threshold: 200, medal: 'gold', label: 'Open Source Leader' },
      platinum: { threshold: 1000, medal: 'platinum', label: 'OSS Legend' },
    },
  },

  // ISSUES & DISCUSSIONS
  issues: {
    id: 'issues',
    name: 'Issue Solver',
    description: 'Awarded for resolving issues and helping others',
    category: 'support',
    icon: 'bug',
    tiers: {
      bronze: { threshold: 20, medal: 'bronze', label: 'Helpful Developer' },
      silver: { threshold: 100, medal: 'silver', label: 'Problem Solver' },
      gold: { threshold: 500, medal: 'gold', label: 'Solution Expert' },
      platinum: { threshold: 1000, medal: 'platinum', label: 'Support Legend' },
    },
  },

  // CODE REVIEW
  codeReview: {
    id: 'codeReview',
    name: 'Code Review Expert',
    description: 'Awarded for reviewing code and maintaining quality standards',
    category: 'quality',
    icon: 'review',
    tiers: {
      bronze: { threshold: 50, medal: 'bronze', label: 'Code Reviewer' },
      silver: { threshold: 200, medal: 'silver', label: 'Quality Guardian' },
      gold: { threshold: 1000, medal: 'gold', label: 'Code Quality Master' },
      platinum: { threshold: 5000, medal: 'platinum', label: 'Review Legend' },
    },
  },

  // DOCUMENTATION
  documentation: {
    id: 'documentation',
    name: 'Documentation Master',
    description: 'Awarded for creating comprehensive project documentation',
    category: 'knowledge',
    icon: 'book',
    tiers: {
      bronze: { threshold: 5, medal: 'bronze', label: 'Doc Writer' },
      silver: { threshold: 15, medal: 'silver', label: 'Documentation Expert' },
      gold: { threshold: 50, medal: 'gold', label: 'Knowledge Guardian' },
      platinum: { threshold: 100, medal: 'platinum', label: 'Doc Legend' },
    },
  },

  // LANGUAGE DIVERSITY  
  polyglot: {
    id: 'polyglot',
    name: 'Polyglot Developer',
    description: 'Awarded for using multiple programming languages',
    category: 'skill',
    icon: 'code',
    tiers: {
      bronze: { threshold: 3, medal: 'bronze', label: 'Multi-Language Developer' },
      silver: { threshold: 7, medal: 'silver', label: 'Language Polymath' },
      gold: { threshold: 12, medal: 'gold', label: 'Programming Linguist' },
      platinum: { threshold: 20, medal: 'platinum', label: 'Polyglot Master' },
    },
  },

  // INNOVATION (Custom projects/unique repos)
  innovation: {
    id: 'innovation',
    name: 'Innovation Pioneer',
    description: 'Awarded for creating unique and innovative projects',
    category: 'creativity',
    icon: 'lightbulb',
    tiers: {
      bronze: { threshold: 2, medal: 'bronze', label: 'Creative Developer' },
      silver: { threshold: 5, medal: 'silver', label: 'Innovation Thinker' },
      gold: { threshold: 15, medal: 'gold', label: 'Innovation Leader' },
      platinum: { threshold: 30, medal: 'platinum', label: 'Pioneer Visionary' },
    },
  },
};

/**
 * Get all available trophy types
 * @returns {Array} Array of trophy objects
 */
function getAllTrophies() {
  return Object.values(TROPHY_TYPES);
}

/**
 * Get specific trophy by ID
 * @param {string} id - Trophy ID
 * @returns {object} Trophy object or null
 */
function getTrophy(id) {
  return TROPHY_TYPES[id] || null;
}

/**
 * Get trophies filtered by medal level
 * @param {string|Array} medals - Medal level(s): 'gold', 'silver', 'bronze', 'platinum'
 * @returns {Array} Filtered trophy objects
 */
function getTrophiesByMedal(medals) {
  const medalArray = Array.isArray(medals) ? medals : [medals];
  const results = [];

  Object.values(TROPHY_TYPES).forEach(trophy => {
    const hasMedal = Object.values(trophy.tiers).some(tier =>
      medalArray.includes(tier.medal)
    );
    if (hasMedal) {
      results.push(trophy);
    }
  });

  return results;
}

/**
 * Get trophies filtered by category
 * @param {string|Array} categories - Category or array of categories
 * @returns {Array} Filtered trophy objects
 */
function getTrophiesByCategory(categories) {
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  return Object.values(TROPHY_TYPES).filter(trophy =>
    categoryArray.includes(trophy.category)
  );
}

/**
 * Get trophies filtered by tier
 * @param {string|Array} tiers - Tier level(s): 'bronze', 'silver', 'gold', 'platinum'
 * @returns {Array} Filtered trophy objects
 */
function getTrophiesByTier(tiers) {
  const tierArray = Array.isArray(tiers) ? tiers : [tiers];
  const results = [];

  Object.values(TROPHY_TYPES).forEach(trophy => {
    const hasTier = tierArray.some(tier => trophy.tiers[tier]);
    if (hasTier) {
      results.push(trophy);
    }
  });

  return results;
}

/**
 * Get trophy tier for a given value
 * @param {string} trophyId - Trophy ID
 * @param {number} value - Achievement value
 * @returns {object} Tier object with medal, label, threshold
 */
function getTrophyTier(trophyId, value) {
  const trophy = TROPHY_TYPES[trophyId];
  if (!trophy) return null;

  // Find the highest tier that matches the threshold
  let matchedTier = null;
  let highestThreshold = -1;

  Object.entries(trophy.tiers).forEach(([tierName, tierData]) => {
    if (value >= tierData.threshold && tierData.threshold > highestThreshold) {
      matchedTier = { ...tierData, tier: tierName };
      highestThreshold = tierData.threshold;
    }
  });

  return matchedTier;
}

/**
 * Determine medal color based on medal type
 * @param {string} medal - Medal type
 * @returns {object} Color palette object
 */
function getMedalColor(medal) {
  const colors = {
    gold: { primary: '#fbbf24', dark: '#d97706', light: '#fcd34d' },
    silver: { primary: '#e2e8f0', dark: '#cbd5e1', light: '#f1f5f9' },
    bronze: { primary: '#f97316', dark: '#ea580c', light: '#fed7aa' },
    platinum: { primary: '#a78bfa', dark: '#8b5cf6', light: '#c4b5fd' },
  };
  return colors[medal] || colors.bronze;
}

module.exports = {
  TROPHY_TYPES,
  getAllTrophies,
  getTrophy,
  getTrophiesByMedal,
  getTrophiesByCategory,
  getTrophiesByTier,
  getTrophyTier,
  getMedalColor,
};
