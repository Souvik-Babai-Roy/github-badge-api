/**
 * Trophy Filtering System
 * Provides flexible trophy filtering and selection
 */

const trophyTypes = require('../types/trophy');

/**
 * Filter trophies based on multiple criteria
 * @param {object} options - Filter options
 * @param {Array<string>} options.ids - Specific trophy IDs to include
 * @param {Array<string>} options.categories - Filter by category
 * @param {Array<string>} options.medals - Filter by medal level
 * @param {Array<string>} options.tiers - Filter by tier level
 * @param {boolean} options.excludeUnobtainable - Exclude if value is below minimum threshold
 * @returns {Array} Filtered trophy array
 */
function filterTrophies(options = {}) {
  let trophies = trophyTypes.getAllTrophies();

  // Filter by specific IDs
  if (options.ids && options.ids.length > 0) {
    trophies = trophies.filter(t =>
      options.ids.includes(t.id)
    );
  }

  // Filter by categories
  if (options.categories && options.categories.length > 0) {
    trophies = trophyTypes.getTrophiesByCategory(options.categories);
  }

  // Filter by medals
  if (options.medals && options.medals.length > 0) {
    trophies = trophyTypes.getTrophiesByMedal(options.medals);
  }

  // Filter by tiers
  if (options.tiers && options.tiers.length > 0) {
    trophies = trophyTypes.getTrophiesByTier(options.tiers);
  }

  return trophies;
}

/**
 * Earn trophies based on GitHub stats
 * @param {object} userStats - GitHub user statistics
 * @param {number} userStats.repos - Public repositories count
 * @param {number} userStats.followers - Followers count
 * @param {number} userStats.stars - Total stars count
 * @param {number} userStats.contributions - Contribution count (from GitHub API)
 * @param {Array<object>} userStats.languages - Languages used
 * @returns {Array} Earned trophy array with tier info
 */
function earnTrophies(userStats) {
  const earned = [];

  // Repository trophy
  if (userStats.repos >= 0) {
    const tier = trophyTypes.getTrophyTier('repositories', userStats.repos);
    if (tier) {
      earned.push({
        id: 'repositories',
        value: userStats.repos,
        tier: tier.tier,
        medal: tier.medal,
        label: tier.label,
        threshold: tier.threshold,
      });
    }
  }

  // Followers trophy
  if (userStats.followers >= 0) {
    const tier = trophyTypes.getTrophyTier('followers', userStats.followers);
    if (tier) {
      earned.push({
        id: 'followers',
        value: userStats.followers,
        tier: tier.tier,
        medal: tier.medal,
        label: tier.label,
        threshold: tier.threshold,
      });
    }
  }

  // Stars trophy
  if (userStats.stars >= 0) {
    const tier = trophyTypes.getTrophyTier('stars', userStats.stars);
    if (tier) {
      earned.push({
        id: 'stars',
        value: userStats.stars,
        tier: tier.tier,
        medal: tier.medal,
        label: tier.label,
        threshold: tier.threshold,
      });
    }
  }

  // Contributions trophy
  if (userStats.contributions && userStats.contributions > 0) {
    const tier = trophyTypes.getTrophyTier('contributions', userStats.contributions);
    if (tier) {
      earned.push({
        id: 'contributions',
        value: userStats.contributions,
        tier: tier.tier,
        medal: tier.medal,
        label: tier.label,
        threshold: tier.threshold,
      });
    }
  }

  // Polyglot trophy (language diversity)
  if (userStats.languages && Array.isArray(userStats.languages)) {
    const uniqueLangs = new Set(userStats.languages.map(l => l.name)).size;
    const tier = trophyTypes.getTrophyTier('polyglot', uniqueLangs);
    if (tier) {
      earned.push({
        id: 'polyglot',
        value: uniqueLangs,
        tier: tier.tier,
        medal: tier.medal,
        label: tier.label,
        threshold: tier.threshold,
      });
    }
  }

  return earned;
}

/**
 * Filter earned trophies by medal
 * @param {Array} earnedTrophies - Earned trophy array
 * @param {string|Array} medals - Medal level(s)
 * @returns {Array} Filtered earned trophies
 */
function filterEarnedByMedal(earnedTrophies, medals) {
  const medalArray = Array.isArray(medals) ? medals : [medals];
  return earnedTrophies.filter(t => medalArray.includes(t.medal));
}

/**
 * Get all available filter categories
 * @returns {object} All available filter options
 */
function getFilterOptions() {
  const trophies = trophyTypes.getAllTrophies();
  const categories = new Set();
  const medals = new Set();
  const tiers = new Set();

  trophies.forEach(trophy => {
    categories.add(trophy.category);
    Object.values(trophy.tiers).forEach(tier => {
      medals.add(tier.medal);
      tiers.add(tier.tier || Object.keys(trophy.tiers).find(k => trophy.tiers[k] === tier));
    });
  });

  return {
    ids: trophies.map(t => t.id),
    categories: Array.from(categories),
    medals: Array.from(medals),
    tiers: Array.from(tiers),
    availableTrophies: trophies.length,
  };
}

/**
 * Get trophies by category names
 * @param {string|Array} categories - Category name(s)
 * @returns {Array} Trophies in those categories
 */
function getTrophiesByCategory(categories) {
  return trophyTypes.getTrophiesByCategory(categories);
}

/**
 * Sort trophies by criteria
 * @param {Array} trophies - Trophy array to sort
 * @param {string} sortBy - Sort criteria: 'name', 'category', 'threshold'
 * @param {boolean} descending - Sort in descending order
 * @returns {Array} Sorted array
 */
function sortTrophies(trophies, sortBy = 'name', descending = false) {
  const sorted = [...trophies];

  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'category':
      sorted.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'threshold':
      sorted.sort((a, b) => {
        const threshA = Math.min(...Object.values(a.tiers).map(t => t.threshold));
        const threshB = Math.min(...Object.values(b.tiers).map(t => t.threshold));
        return threshA - threshB;
      });
      break;
    default:
      return sorted;
  }

  return descending ? sorted.reverse() : sorted;
}

module.exports = {
  filterTrophies,
  earnTrophies,
  filterEarnedByMedal,
  getFilterOptions,
  getTrophiesByCategory,
  sortTrophies,
};
