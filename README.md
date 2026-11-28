# Caderneta Digital do Coordenador de Turno



**Disciplina:** Engenharia de Software I (Lab #02 — ISPTEC)  
**Turma:** M3  

## Membros do Grupo
* Elidio Arsénio (Scrum Master / Developer)
* Feidao Décimo (Product Owner / Developer)
* Azael Emídio (Developer)
* Margareth De Carvalho (Developer)

## Links do Projecto
* **Repositório:** https://github.com/gitarsenio/ES1_Lab2
* **Quadro Kanban (`caderneta`):** https://github.com/users/gitarsenio/projects/
* **Acordo de Processo:** [processo.md](./processo.md)
* **Requisitos e Casos de Uso:** [docs/](./docs/)
* **Registo da Sprint 1:** [sprints/sprint-1.md](./sprints/sprint-1.md)



Aplicação web para apoiar o coordenador de turno na gestão e no acompanhamento de alunos, turmas e ocorrências escolares.

> **Estado desta entrega:** estrutura inicial de desenvolvimento preparada por Azael Emídio para revisão da equipa. Esta versão ainda não implementa os módulos funcionais do produto.

## Identificação do projecto

| Campo | Informação |
|---|---|
| Instituição | Instituto Superior Politécnico de Tecnologias e Ciências (ISPTEC) |
| Curso | Licenciatura em Engenharia Informática |
| Unidade curricular | Engenharia de Software I |
| Ano lectivo | 2026/2027 |
| Turma / grupo | **[Preencher com a identificação confirmada pela equipa]** |
| Docente | Judson Paiva |
| Responsável por esta estrutura inicial | Azael Emídio |

### Membros identificados no registo da Sprint 1

- Elidio Arsénio
- Feidao Décimo
- Azael Emídio
- Margareth De Carvalho

Confirmar com a equipa a grafia final dos nomes antes da integração no repositório oficial.

## Links do projecto

- [Repositório GitHub](https://github.com/gitarsenio/ES1_Lab2/tree/main)
- Quadro GitHub Projects / Kanban: **[Inserir o link do quadro da equipa]**

## Tecnologias

| Camada | Tecnologia | Finalidade |
|---|---|---|
| Frontend | HTML5 | Estrutura das páginas |
| Frontend | CSS3 | Apresentação e adaptação a diferentes ecrãs |
| Frontend | JavaScript | Interactividade e comunicação com a API |
| Backend | Node.js | Ambiente de execução do servidor |
| Backend | TypeScript | Linguagem do código do servidor |
| Backend | Express | Servidor HTTP e organização das rotas |
| Base de dados | PostgreSQL | Armazenamento relacional |
| Ligação à base de dados | `pg` | Driver Node.js para PostgreSQL |

## Estrutura de pastas

```text
caderneta-digital/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   └── env.ts
│   │   ├── controllers/
│   │   │   └── health.controller.ts
│   │   ├── middlewares/
│   │   │   └── error.middleware.ts
│   │   ├── routes/
│   │   │   └── health.routes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
├── database/
│   ├── create_database.sql
│   └── README.md
├── docs/
│   └── REVISAO_DA_EQUIPA.md
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── index.html
│   ├── turmas.html
│   ├── alunos.html
│   └── ocorrencias.html
├── .editorconfig
├── .gitignore
└── README.md
```

## Páginas do frontend

O frontend contém quatro páginas HTML ligadas por uma navegação comum:

- `index.html` — painel inicial e estado dos serviços (API e PostgreSQL).
- `turmas.html` — consulta demonstrativa das turmas, com pesquisa e filtro por turno.
- `alunos.html` — consulta demonstrativa dos alunos, com pesquisa e filtro por turma.
- `ocorrencias.html` — consulta demonstrativa das ocorrências, com pesquisa e filtro por estado.

As listas e os indicadores apresentados nestas páginas são **dados fictícios de demonstração**. Nesta fase não existem operações de criar, editar ou eliminar registos, nem estas listas são carregadas do PostgreSQL. A ligação real à base de dados está preparada para ser verificada pelo endpoint `/api/health`.

O utilizador também pode alternar entre **modo claro e modo escuro** através do botão no cabeçalho. A preferência é guardada no `localStorage` do navegador e mantém-se ao navegar entre as quatro páginas no mesmo navegador.

Para navegar entre as páginas, inicie o backend e abra `http://localhost:3000`. As páginas partilham `css/styles.css` e `js/app.js`.

## Requisitos para executar localmente

- Node.js 22 ou superior (recomenda-se uma versão LTS).
- npm (instalado com o Node.js).
- PostgreSQL instalado e com o serviço em execução.

## Instalação e configuração

### 1. Criar a base de dados

Abra o pgAdmin, ligue-se ao servidor PostgreSQL e abra o Query Tool na base de dados administrativa `postgres`. Execute o conteúdo de `database/create_database.sql` uma única vez.

Em alternativa, a partir de um terminal na pasta `backend`, pode executar:

```bash
psql -U postgres -d postgres -f ../database/create_database.sql
```

Este script cria apenas a base de dados `caderneta_digital`. **Ainda não cria tabelas**, porque o modelo relacional deve ser definido e validado pela equipa após o levantamento dos requisitos.

### 2. Configurar as variáveis de ambiente

Abra um terminal na pasta `backend` e crie uma cópia do ficheiro de exemplo:

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux / macOS:

```bash
cp .env.example .env
```

Edite `backend/.env` e introduza a palavra-passe e os dados locais do seu PostgreSQL. Não partilhe o ficheiro `.env` nem o envie para o GitHub.

### 3. Instalar as dependências do backend

Ainda dentro da pasta `backend`:

```bash
npm install
```

### 4. Executar em modo de desenvolvimento

```bash
npm run dev
```

Abra no navegador: <http://localhost:3000>.

O frontend é servido pelo próprio Express. Não é necessário iniciar um segundo servidor para a página inicial.

### 5. Verificar a API e a ligação à base de dados

Aceda a <http://localhost:3000/api/health>.

- HTTP 200 e `database.status: "connected"`: API e PostgreSQL estão acessíveis.
- HTTP 503 e `database.status: "disconnected"`: a API iniciou, mas a ligação ao PostgreSQL falhou. Verifique se o serviço está em execução, se a base de dados foi criada e se os dados do `.env` estão correctos.

### 6. Compilar para produção local

```bash
npm run build
npm start
```

## Módulos previstos no produto mínimo

De acordo com o enunciado do laboratório, a versão final do grupo deverá contemplar, pelo menos:

1. Autenticação por palavra-passe, com acesso por perfil.
2. Gestão de turmas e alunos.
3. Registo de ocorrências, permitindo associar vários alunos a uma ocorrência.
4. Registo das medidas aplicadas.
5. Consulta do histórico individual do aluno.

Estes módulos **não fazem parte desta entrega de estrutura inicial**. A sua implementação deverá ser distribuída e acompanhada nas issues e sprints da equipa.

## Relatório inicial de testes

| Verificação | Resultado nesta entrega |
|---|---|
| Organização dos ficheiros e pastas | Preparada |
| Validade dos ficheiros JSON (`package.json` e `tsconfig.json`) | Validada |
| Sintaxe do JavaScript do frontend (`node --check`) | Validada |
| Análise sintáctica/transpilação dos ficheiros TypeScript | Validada com o compilador global disponível; a verificação completa de tipos continua pendente |
| Estrutura das quatro páginas HTML e existência dos ficheiros CSS/JS referenciados | Validada; links internos verificados |
| Alternância entre modo claro/escuro e persistência da preferência entre páginas | Validada com teste de interacção JavaScript |
| Instalação das dependências npm | Pendente de execução no ambiente da equipa |
| Compilação completa (`npm run build`) | Pendente de execução após `npm install` |
| Arranque do servidor Express | Pendente de execução no ambiente da equipa |
| Ligação real ao PostgreSQL | Pendente de configuração das credenciais locais |
| Visualização das quatro páginas no navegador | Pendente de execução no ambiente da equipa |

As verificações concluídas nesta preparação são estáticas. Os testes de execução devem ser realizados por um membro da equipa com Node.js e PostgreSQL configurados. Não se declara aqui que o servidor ou a ligação à base de dados já tenham sido executados com sucesso.

## Estado e decisões pendentes

- Confirmar a identificação da turma e do grupo.
- Acrescentar o endereço do quadro GitHub Projects.
- Confirmar os nomes dos membros.
- Validar a estrutura de pastas com os restantes programadores.
- Definir e aprovar o modelo relacional antes de criar as tabelas SQL.
- Integrar esta estrutura no repositório oficial apenas depois da revisão da equipa.


## Integração do módulo de autenticação (Protótipo Unificado)

Este protótipo unifica a estrutura base (`ES1_Lab2`) com o ecrã de login e o endpoint de autenticação (`POST /api/auth/login`) num único servidor Express na porta `3000`.

### Contas de demonstração
- **Coordenador de Turno:** `coordenador@instituicao.ao` / `123456`
- **Administrador:** `admin@instituicao.ao` / `admin123`

Ao abrir `http://localhost:3000` sem sessão activa, o navegador redirecciona automaticamente para `login.html`. Após iniciar sessão, o utilizador acede ao Painel, Turmas, Alunos e Ocorrências, podendo terminar sessão pelo botão **Terminar sessão** no cabeçalho.
