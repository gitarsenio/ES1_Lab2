import { Pool } from 'pg';
import { env } from './env.js';

/** Pool de ligações partilhado pela aplicação para comunicar com PostgreSQL. */
export const databasePool = new Pool({
  host: env.database.host,
  port: env.database.port,
  database: env.database.name,
  user: env.database.user,
  password: env.database.password,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

databasePool.on('error', (error: Error) => {
  console.error('Erro inesperado numa ligação inactiva ao PostgreSQL:', error.message);
});
