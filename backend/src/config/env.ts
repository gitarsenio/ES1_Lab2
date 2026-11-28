import 'dotenv/config';

function readPort(value: string | undefined, fallback: number, variableName: string): number {
  const port = Number(value ?? fallback);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`A variável ${variableName} deve conter uma porta válida.`);
  }

  return port;
}

export const env = {
  port: readPort(process.env.PORT, 3000, 'PORT'),
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: readPort(process.env.DB_PORT, 5432, 'DB_PORT'),
    name: process.env.DB_NAME ?? 'caderneta_digital',
    user: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? '',
  },
};
