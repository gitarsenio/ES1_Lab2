import type { Request, Response } from 'express';

interface DemoUser {
  email: string;
  password: string;
  name: string;
  role: 'Coordenador de Turno' | 'Director de Turma' | 'Administrador';
}

const DEMO_USERS: DemoUser[] = [
  {
    email: 'coordenador@instituicao.ao',
    password: '123456',
    name: 'Coordenador de Turno',
    role: 'Coordenador de Turno',
  },
  {
    email: 'admin@instituicao.ao',
    password: 'admin123',
    name: 'Administrador do Sistema',
    role: 'Administrador',
  },
];

/** Endpoint demonstrativo de autenticação (a ligar às tabelas PostgreSQL e hash bcrypt). */
export function login(request: Request, response: Response): void {
  const { email, password } = (request.body ?? {}) as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    response.status(400).json({
      message: 'Preencha o e-mail e a palavra-passe.',
    });
    return;
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = DEMO_USERS.find(
    (entry) => entry.email === normalizedEmail && entry.password === password,
  );

  if (!user) {
    response.status(401).json({
      message: 'Credenciais inválidas. Utilize as contas de demonstração indicadas no README.',
    });
    return;
  }

  response.status(200).json({
    message: 'Autenticação efectuada com sucesso.',
    user: {
      email: user.email,
      name: user.name,
      role: user.role,
    },
  });
}
