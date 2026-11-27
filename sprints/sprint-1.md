# Sprint 1 (24 a 27 de Novembro de 2026)

## Planeamento da Sprint
**Objectivo da Sprint 1:** Configurar o repositório, o quadro Kanban e o acordo de processo (`processo.md`), iniciar o levantamento de requisitos e construir a estrutura base e autenticação da Caderneta Digital.

**Issues seleccionadas:**
- #1 — Elaborar ficheiro processo.md (Parte I)
- #2 — Levantar requisitos e diagrama de casos de uso
- #3 — Criar estrutura inicial do projecto
- #4 — Implementar autenticação e perfis de utilizador

---

## Reuniões Diárias

### 25/11/2026 (Semana 1)

- **[Elidio Arsénio]:**
  - **O que fiz:** Criei o repositório, configurei o quadro Kanban no GitHub Projects (vistas, iterações e acesso do professor) e registei as issues iniciais da Sprint 1.
  - **O que vou fazer:** Avançar na redacção do ficheiro `processo.md` (#1) e acompanhar o quadro.
  - **Impedimentos:** Nenhum.

- **[Feidao Décimo]:**
  - **O que fiz:** Alinhei o planeamento da Sprint 1 e analisei o enunciado para identificar os perfis e necessidades do coordenador de turno.
  - **O que vou fazer:** Levantar os requisitos funcionais/não funcionais e elaborar o diagrama de casos de uso (#2).
  - **Impedimentos:** Nenhum.

- **[Azael Emidio]:**
  - **O que fiz:** Defini com a equipa a tecnologia base e a organização inicial de pastas do projecto.
  - **O que vou fazer:** Criar a estrutura inicial do código, configurar o armazenamento de dados e documentar a execução no `README.md` (#3).
  - **Impedimentos:** Nenhum.

- **[Margareth De Carvalho]:**
- - **O que fiz:** Revistei as histórias de utilizador da Sprint 1 e os critérios de aceitação da autenticação.
  - **O que vou fazer:** Preparar a implementação do ecrã de login e do controlo de acesso por perfil de utilizador (#4).
  - **Impedimentos:** Nenhum.



### 26/11/2026 (Semana 2)

- **Elidio Arsénio:**
  - **O que fiz:** Concluí o registo da Semana 1 (PR #5) e fiz a leitura e análise detalhada do enunciado do Lab #02 e das secções necessárias para o `processo.md` (#1).
  - **O que vou fazer:** Redigir o ficheiro `processo.md` num ramo próprio, confirmar as permissões do quadro Kanban e abrir o Pull Request para revisão amanhã.
  - **Impedimentos:** Tempo curto até ao fecho da Sprint 1 (amanhã, 27/11), exigindo foco na execução.

- **Feidao Décimo:**
  - **O que fiz:** Li e analisei o enunciado, os pedidos do coordenador de turno e os cenários de utilização para preparar o levantamento de requisitos (#2).
  - **O que vou fazer:** Documentar actores, perfis e requisitos, elaborar o diagrama de casos de uso e as histórias de utilizador (#2), e abrir PR para revisão.
  - **Impedimentos:** Nenhum.

- **Azael Emídio:**
  - **O que fiz:** Analisei as tecnologias exigidas, as opções de armazenamento de dados e a estrutura necessária para o projecto e o `README.md` (#3).
  - **O que vou fazer:** Criar a estrutura inicial da aplicação web num ramo próprio, actualizar o `README.md` com a turma e links, e abrir PR para revisão.
  - **Impedimentos:** Nenhum.

- **Margareth De Carvalho:**
  - **O que fiz:** Li e analisei os requisitos de segurança mínima, autenticação por palavra-passe e controlo de acesso por perfil (#4).
  - **O que vou fazer:** Implementar a base do ecrã de login e o acesso por perfil num ramo próprio e abrir PR para revisão antes da demonstração de amanhã.
  - **Impedimentos:** Nenhum.




### 27/11/2026 (Semana 2 — Fecho da Sprint 1)

- **Elidio Arsénio:**
  - **O que fiz:** Concluí o ficheiro `processo.md` (#1) com todas as 9 secções da Parte I (incluindo o teste à IA) e acompanhei o fecho do quadro Kanban.
  - **O que vou fazer:** Registar o fecho da Sprint 1, actualizar a secção «Desafio a vigiar», gerar a etiqueta `sprint-1` e preparar o planeamento da Sprint 2.
  - **Impedimentos:** Nenhum.

- **Feidao Décimo:**
  - **O que fiz:** Concluí o levantamento de requisitos (`docs/requisitos.md`) e o diagrama de casos de uso (`docs/CASO_USOCADERNETA.drawio.png`) (#2).
  - **O que vou fazer:** Finalizar a ordenação das histórias de utilizador da Sprint 2 no quadro `caderneta`.
  - **Impedimentos:** Nenhum.

- **Azael Emídio:**
  - **O que fiz:** Subi a estrutura base do projecto (Vite, React, TypeScript, Tailwind CSS, Node.js/Express) e as instruções de execução no `README.md`.
  - **O que vou fazer:** Consolidar a estrutura de pastas do código-fonte e ligar a base de dados PostgreSQL na Sprint 2.
  - **Impedimentos:** Adaptação inicial ao envio de ficheiros/pastas pelo GitHub.

- **Margareth De Carvalho:**
  - **O que fiz:** Contribuí para a interface inicial de login e validação dos requisitos de autenticação por perfil.
  - **O que vou fazer:** Concluir a autenticação com controlo de acesso por perfil e utilizadores fictícios integrados na API na Sprint 2.
  - **Impedimentos:** Adaptação inicial ao fluxo de Pull Requests.

---

## Revisão da Sprint 1 (27/11/2026)

* **O que foi demonstrado:** Repositório configurado, acordo de processo (`processo.md`), documento de requisitos e diagrama de casos de uso (`docs/`), estrutura inicial da aplicação (React/TypeScript/Tailwind + Node/Express) e base da tela de login.
* **Demonstração ao coordenador de turno:** Enviada demonstração curta (capturas de ecrã) no grupo de WhatsApp.
* **Retorno recebido:** *(Se o coordenador ainda não respondeu até às 23h59, mantém a frase seguinte:)* Sem retorno do coordenador até ao fecho da sprint; o *Product Owner* (Feidao Décimo) validou o incremento em representação do coordenador de turno, confirmando o alinhamento com os pedidos iniciais e priorizando a integração completa da autenticação e a gestão de turmas/alunos para a Sprint 2.

---

## Retrospectiva da Sprint 1 (27/11/2026)

* **O que correu bem:** Todos os 4 membros participaram activamente no repositório, concluímos o acordo de processo (`processo.md`), o diagrama de casos de uso e o arranque técnico do projecto dentro da primeira sprint.
* **O que correu menos bem:** Concentrámos várias integrações no último dia da sprint, houve um envio via upload directo que sobrescreveu o cabeçalho do `README.md` e parte da estrutura de pastas do código ainda precisa de ser consolidada.
* **Acções de melhoria para a Sprint 2:**
  1. Trabalhar sempre via Git local (`git checkout -b`, `git commit`, `git push`) em vez de *Add files via upload* pelo navegador, garantindo que todas as subpastas entram correctamente.
  2. Abrir Pull Requests até ao 2.º dia da sprint para evitar acumulação de revisões no último dia.
  3. Mover os cartões no quadro `caderneta` imediatamente após cada reunião diária.
* **Actualização de «Desafio a vigiar»:** Secção actualizada no ficheiro `processo.md` com o registo da Sprint 1.

---

## Contribuições e Revisões da Equipa (Sprint 1)

| Membro | Contribuição Principal | Revisão Efectuada a Colega |
| :--- | :--- | :--- |
| **Elidio Arsénio** | Configuração do repositório/quadro, `processo.md` (#1) e registos de `sprints/sprint-1.md` | Revisão de PR de colega na Sprint 1 |
| **Feidao Décimo** | Documento de requisitos e diagrama de casos de uso (`docs/`) (#2) | Revisão de PR de colega na Sprint 1 |
| **Azael Emídio** | Configuração inicial do projecto web (Vite/React/TS/Express) e documentação técnica no `README.md` | Revisão de PR de colega na Sprint 1 |
| **Margareth De Carvalho** | Contribuição no módulo inicial de login e validação de autenticação | Revisão de PR de colega na Sprint 1 |

---

## Medidas de Fluxo — Sprint 1 (Actividade 13)

| Medida de Fluxo | Valor na Sprint 1 | Observação |
| :--- | :--- | :--- |
| **Trabalho em curso máximo (WIP)** | 3 itens em `In progress` | Limite WIP = 3 respeitado no quadro `caderneta`. |
| **Débito (*Throughput*)** | 3 *issues* concluídas | 3 das 4 *issues* planeadas concluídas; 1 *issue* transitou para a Sprint 2. |
| **Idade do item mais antigo em curso** | 3 dias | *Issue* iniciada a 25/11/2026 e transferida para a Sprint 2. |
| **Tempo de ciclo (*Cycle Time*)** | #1: 2 dias · #2: 2 dias · #3/#4: 2 dias | Média aproximada de 2 dias reais entre início em `In progress` e `Done`. |

**Interpretação:** Os números mostram que a equipa conseguiu respeitar o limite WIP = 3 e entregar 3 das 4 *issues* planeadas com um tempo de ciclo médio de cerca de 2 dias. Contudo, a concentração de aprovações no último dia impediu fechar o 4.º item a tempo. Na Sprint 2 vamos quebrar as entregas em PRs menores e começar as revisões logo no 2.º dia para aumentar o débito e reduzir o tempo de ciclo.
