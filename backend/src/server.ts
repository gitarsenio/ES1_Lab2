import { app } from './app.js';
import { env } from './config/env.js';
import { databasePool } from './config/database.js';

const server = app.listen(env.port, () => {
  console.log(`Caderneta Digital disponível em http://localhost:${env.port}`);
  console.log(`Verificação da API: http://localhost:${env.port}/api/health`);
});

async function shutdown(): Promise<void> {
  console.log('\nA encerrar o servidor...');

  server.close(async () => {
    await databasePool.end();
    process.exit(0);
  });
}

process.on('SIGINT', () => void shutdown());
process.on('SIGTERM', () => void shutdown());
