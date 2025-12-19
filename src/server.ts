import app from './app';
import { AppDataSource } from './config/data-source';
import { Config } from './config/index';
import logger from './config/logger';

const startServer = async () => {
  const PORT = Config.PORT;
  try {
    await AppDataSource.initialize();
    logger.info('Database connected successfully.');
    app.listen(PORT, () => logger.info('Listening on port', { port: PORT }));
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

void startServer();
