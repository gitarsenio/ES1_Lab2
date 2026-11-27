# Caderneta do Coordenador de Turno — Login

Tela de login desenvolvida com React, TypeScript, JavaScript, Tailwind CSS, Node.js e Express.

## Requisitos
- Node.js 18 ou superior
- npm

## Instalação
Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

A aplicação ficará disponível em:
- Frontend: http://localhost:5173
- API: http://localhost:4000

## O que está incluído
- Tela de login responsiva.
- Campos de e-mail e palavra-passe.
- Opção para mostrar/ocultar a palavra-passe.
- Opção para manter sessão iniciada.
- Mensagens de resposta ligadas ao endpoint Express.
- Endpoint `POST /api/auth/login` de demonstração.
- Endpoint `GET /api/health` para verificar o servidor.

## Nota sobre autenticação
O endpoint de login é apenas uma estrutura inicial: não valida utilizadores reais nem guarda sessões. Para uso real, implemente uma base de dados, hash de palavras-passe (por exemplo, bcrypt), validação, sessões ou JWT, proteção contra tentativas repetidas e configuração HTTPS. Não utilize credenciais reais até essa etapa estar concluída.

## Build
```bash
npm run build
```
