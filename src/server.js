const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');

app.listen(config.port, () => {
  logger.info(`Server listening on port ${config.port} in ${config.env} mode`);
});