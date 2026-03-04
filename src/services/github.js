const axios = require('axios');
const config = require('../config');
const logger = require('../utils/logger');

// Simple in‑memory cache with TTL
const cache = new Map();

async function fetchWithCache(key, url, ttl = config.cache.ttl) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl * 1000) {
    logger.debug(`Cache hit for ${key}`);
    return cached.data;
  }

  logger.debug(`Cache miss for ${key}, fetching from GitHub`);
  try {
    const headers = config.github.token
      ? { Authorization: `token ${config.github.token}` }
      : {};
    const response = await axios.get(url, {
      headers,
      timeout: config.github.timeout,
    });
    cache.set(key, { data: response.data, timestamp: Date.now() });
    return response.data;
  } catch (error) {
    logger.error(`GitHub API error for ${url}: ${error.message}`);
    throw error;
  }
}

async function getUser(username) {
  const url = `${config.github.apiBase}/users/${username}`;
  return fetchWithCache(`user:${username}`, url);
}

async function getRepos(username) {
  const url = `${config.github.apiBase}/users/${username}/repos?per_page=100&sort=updated`;
  return fetchWithCache(`repos:${username}`, url);
}

async function getTotalStars(username) {
  const repos = await getRepos(username);
  return repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
}

module.exports = { getUser, getRepos, getTotalStars };