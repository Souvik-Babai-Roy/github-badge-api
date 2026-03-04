const config = require('../config');

/**
 * Rank thresholds – can be moved to config if needed
 */
const RANKS = [
  { threshold: 500, label: 'S', medal: 'gold' },
  { threshold: 200, label: 'A', medal: 'silver' },
  { threshold: 0,   label: 'B', medal: 'bronze' },
];

function getRank(value) {
  const rank = RANKS.find(r => value >= r.threshold) || RANKS[RANKS.length - 1];
  return { label: rank.label, medal: rank.medal };
}

module.exports = { getRank };