import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error('Erro não tratado na aplicação:', error);

  response.status(500).json({
    message: 'Ocorreu um erro interno no servidor.',
  });
};
