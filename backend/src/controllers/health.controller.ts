import type { Request, Response } from 'express';
import { databasePool } from '../config/database.js';

/** Confirma que a API responde e que consegue consultar a base de dados. */
export async function getHealth(_request: Request, response: Response): Promise<void> {
  try {
    const result = await databasePool.query<{ database_name: string }>(
      'SELECT current_database() AS database_name',
    );

    response.status(200).json({
      api: 'online',
      database: {
        status: 'connected',
        name: result.rows[0]?.database_name ?? 'desconhecida',
      },
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Não foi possível verificar a ligação ao PostgreSQL:', error);

    response.status(503).json({
      api: 'online',
      database: {
        status: 'disconnected',
      },
      message: 'A API está activa, mas não conseguiu ligar-se à base de dados.',
      checkedAt: new Date().toISOString(),
    });
  }
}
