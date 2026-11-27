# Revisão da estrutura inicial — Azael Emídio

Esta pasta contém uma proposta independente para revisão dos colegas. Não foi integrada no repositório oficial.

## O que está incluído

- Estrutura separada de frontend, backend e base de dados.
- Quatro páginas HTML ligadas entre si: painel, turmas, alunos e ocorrências.
- Folha CSS partilhada com modo claro/escuro e JavaScript para alternar/guardar o tema, pesquisa/filtros demonstrativos e verificação do estado da API.
- Servidor Express com TypeScript.
- Configuração do PostgreSQL através do driver `pg` e de variáveis de ambiente.
- Endpoint `GET /api/health` para testar a API e a ligação ao PostgreSQL.
- Script SQL para criar a base de dados vazia.
- README com tecnologias, árvore de pastas e instruções preliminares.

## O que não está incluído

- Login, autenticação ou autorização por perfil.
- Gestão de utilizadores, alunos, encarregados, turmas ou ocorrências.
- Tabelas SQL ou dados de exemplo.
- Diagrama de classes ou modelo relacional.
- Integração com o GitHub e publicação online.

## Pontos para os colegas confirmarem

1. A organização `frontend/`, `backend/` e `database/` é adequada?
2. A equipa concorda com Express 5 e o driver `pg`?
3. A equipa prefere manter o frontend servido pelo Express nesta fase?
4. Qual é a identificação correcta da turma/grupo?
5. As quatro páginas, a navegação e a opção de modo claro/escuro correspondem à proposta visual pretendida?
6. Qual é o link do quadro GitHub Projects?
7. Quando o modelo de dados estiver aprovado, quem prepara e revê os scripts de criação das tabelas?

## Nota de integração

Depois da revisão, os ficheiros devem ser comparados com a árvore actual do repositório antes de qualquer cópia. A integração oficial deverá ser feita num branch próprio e através de Pull Request, conforme o processo da equipa.


## Limitação importante do frontend demonstrativo

Os exemplos de turmas, alunos e ocorrências são dados fictícios escritos nas páginas HTML. A pesquisa e os filtros funcionam no navegador, mas não existe ainda CRUD nem leitura/escrita no PostgreSQL.
