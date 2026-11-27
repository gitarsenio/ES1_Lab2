import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import healthRoutes from './routes/health.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const frontendDirectory = resolve(currentDirectory, '../../frontend');

export const app = express();

app.disable('x-powered-by');
app.use(express.json());

// Rotas da API ficam sob o prefixo /api.
app.use('/api', healthRoutes);

// O Express também disponibiliza os ficheiros estáticos do frontend.
app.use(express.static(frontendDirectory));

app.use((_request, response) => {
  response.status(404).json({ message: 'Recurso não encontrado.' });
});

app.use(errorHandler);
