const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  github: {
    token: process.env.GITHUB_TOKEN,
    apiBase: 'https://api.github.com',
    timeout: 10000,
  },
  cache: {
    ttl: parseInt(process.env.CACHE_TTL, 10) || 300, // seconds
  },
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW, 10) || 60000,
    max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
  },
  logLevel: process.env.LOG_LEVEL || 'info',
};