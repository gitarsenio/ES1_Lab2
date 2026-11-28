# Registo da Sprint 2

**Período:** 28 de Novembro a 1 de Dezembro de 2026 (Semanas 3 e 4 simuladas)  
**Equipa:** Elidio Arsénio (SM/Dev), Feidao Décimo (PO/Dev), Azael Emídio (Dev), Margareth De Carvalho (Dev)

---

## Planeamento da Sprint 2 (28/11/2026)

### Objectivo da Sprint 2
Consolidar o código unificado na `main`, modelar e criar a base de dados PostgreSQL nas suas três fases (conceptual, lógica e física) com dados fictícios e integrar a base de dados ao sistema unificado (autenticação por perfil e estrutura inicial), entregando uma versão funcional demonstrável no fim da sprint.

### Organização por Semana Simulada
* **Semana 3 (28 e 29 de Novembro):** Fechar a estrutura unificada (`#3`) e concluir as três fases da modelação e criação da base de dados PostgreSQL:
  * **Azael Emídio:** Desenho Conceptual (entidades, atributos e relacionamentos).
  * **Feidao Décimo:** Desenho Lógico (diagrama relacional com chaves primárias e estrangeiras).
  * **Elidio Arsénio:** Desenho Físico (scripts `database/schema.sql` e `database/seed.sql` no PostgreSQL com dados fictícios) e fecho da integração do código unificado (`#3`).
  * **Margareth De Carvalho:** Preparação da interface de autenticação e validação dos endpoints de integração com a API.
* **Semana 4 (30 de Novembro e 1 de Dezembro):** Integrar a base de dados criada ao backend e frontend do sistema unificado, testar localmente (computador e telemóvel) e demonstrar o incremento na Revisão da Sprint.

### Issues Escolhidas para a Sprint 2
* `#3` — Criar estrutura inicial do projecto *(transitada da Sprint 1 — unificação do código e actualização do `README.md`)*
* `#16` — Modelar base de dados (conceptual, lógico e físico) e criar scripts SQL (`schema.sql` e `seed.sql`)
* `#15` — Integrar a base de dados PostgreSQL ao sistema unificado (autenticação por perfil e rotas iniciais)

---

## Reuniões Diárias

### 28/11/2026 (Semana 3 — Dia 1)

- **Elidio Arsénio:**
  - **O que fiz:** Unifiquei localmente a base de código do projecto, preparei a actualização do `README.md` e abri o planeamento da Sprint 2.
  - **O que vou fazer:** Concluir o Pull Request da `#3` e iniciar o desenho físico da base de dados (`database/schema.sql` e `database/seed.sql`) assim que os modelos conceptual e lógico forem validados.
  - **Impedimentos:**Aguardar o rascunho do desenho conceptual e do desenho lógico, para poder fechar o desenho físico.

- **Azael Emídio:**
  - **O que fiz:** Alinhei a arquitectura unificada do repositório com a equipa e revi os requisitos levantados na Sprint 1.
  - **O que vou fazer:** Elaborar o desenho conceptual da base de dados (entidades, atributos e relacionamentos) a partir de `docs/requisitos.md`.
  - **Impedimentos:** Nenhum.

- **Feidao Décimo:**
  - **O que fiz:** Validei os requisitos e prioridades do produto mínimo para o arranque da Sprint 2.
  - **O que vou fazer:** Elaborar o desenho lógico da base de dados com base no modelo conceptual.
  - **Impedimentos:** Aguardar o rascunho do desenho conceptual para fechar o desenho lógico.

- **Margareth De Carvalho:**
  - **O que fiz:** Partilhei os ficheiros da interface de login para a unificação do código.
  - **O que vou fazer:** Preparar a ligação do ecrã de login e dos perfis de utilizador à API do sistema unificado e rever o PR da estrutura.
  - **Impedimentos:** Nenhum.
