# Processo de Trabalho — Caderneta Digital do Coordenador de Turno

**Disciplina:** Engenharia de Software I (Lab #02)  
**Instituição:** ISPTEC — Licenciatura em Engenharia Informática (2026/2027)  
**Turma:** M3  
**Repositório:** `gitarsenio/ES1_Lab2`  
**Quadro Kanban:** `caderneta` (GitHub Projects)

---

## Valores do grupo

Com base nos quatro valores e nos doze princípios do Manifesto Ágil (BECK et al., 2001), o grupo estabeleceu decisões concretas para orientar o desenvolvimento da Caderneta Digital do Coordenador de Turno:

| Valor do Manifesto Ágil | Decisão concreta do grupo na Caderneta Digital | O que continua a ter valor no lado direito |
| :--- | :--- | :--- |
| **Indivíduos e interações** mais do que processos e ferramentas | Comunicar directamente no WhatsApp e no Google Meet para resolver bloqueios no próprio dia, apoiando qualquer membro com dificuldades técnicas no GitHub antes de esperar pelo fim da sprint. | O quadro Kanban (`caderneta`), os Pull Requests e o fluxo do Git continuam essenciais para manter transparência, rastreabilidade e qualidade do código. |
| **Software em funcionamento** mais do que documentação abrangente | Entregar no fim de cada sprint de 4 dias um incremento funcional testável localmente (começando pela estrutura base e autenticação), em vez de passar metade do projecto apenas a redigir especificações. | O documento de requisitos, o diagrama de casos de uso, o `processo.md` e o `README.md` continuam indispensáveis para orientar a arquitectura, a instalação e a manutenção. |
| **Colaboração com o cliente** mais do que negociação de contratos | Validar protótipos, interfaces e demonstrações curtas directamente com o coordenador de turno via WhatsApp (ou na aula) ao longo das sprints para confirmar se a solução resolve os cenários reais. | Os pedidos iniciais do coordenador e os critérios de aceitação registados nas *issues* continuam a servir de referência clara para o produto mínimo. |
| **Responder a mudanças** mais do que seguir um plano | Reordenar a *Lista do produto* no fim de cada sprint com base no retorno recebido na Revisão da Sprint e no progresso real da equipa, transferindo itens incompletos para a sprint seguinte. | O calendário fixo de 5 sprints e o planeamento registado em `sprints/sprint-N.md` continuam fundamentais para garantir foco e cumprir o prazo de 13 de Dezembro de 2026. |

No Manifesto Ágil, a expressão **«mais do que»** não significa **«em vez de»**, pois ambos os lados têm utilidade no desenvolvimento de software; a diferença está na prioridade quando existe conflito. Por exemplo, ao decidirmos validar protótipos e entregas parciais com o coordenador de turno via WhatsApp antes de finalizar todos os módulos, priorizamos o software a funcionar e a colaboração com o cliente, mas **não abandonamos** a documentação nem o planeamento — mantemos o diagrama de casos de uso, as histórias de utilizador com critérios de aceitação, os registos das sprints e o `README.md` de forma enxuta e útil.

*Fonte consultada: BECK, K. et al. Manifesto for Agile Software Development e Principles behind the Agile Manifesto (2001), disponível em `agilemanifesto.org`.*

---

## Equipa

A nossa *Scrum Team* é composta por 4 elementos da Turma M3, organizados segundo as três responsabilidades (*accountabilities*) definidas no *Scrum Guide 2020*. Dado que o projecto exige contribuição técnica e revisões de código de todos os elementos em todas as sprints, o *Product Owner* e o *Scrum Master* acumulam igualmente tarefas de desenvolvimento:

| Membro | Responsabilidade no Scrum | Tarefas concretas no projecto |
| :--- | :--- | :--- |
| **Elidio Arsénio** | **Scrum Master** (+ Developer) | Facilita os eventos do Scrum, acompanha o cumprimento das regras do quadro Kanban (`caderneta`), apoia na remoção de impedimentos (ex.: dúvidas no Git/GitHub), coordena a elaboração do `processo.md`, contribui no código e realiza revisões de Pull Requests. |
| **Feidao Décimo** | **Product Owner** (+ Developer) | Analisa os pedidos do coordenador de turno, gere e ordena a *Lista do produto* (*Product Backlog*), define critérios de aceitação e requisitos/casos de uso, representa o coordenador caso não haja retorno na revisão e participa no desenvolvimento e revisões de código. |
| **Azael Emídio** | **Developer** | Estrutura o projecto web e o ambiente técnico (React, TypeScript, Node.js, Express, PostgreSQL), implementa funcionalidades do produto mínimo, actualiza a documentação técnica (`README.md`), executa testes e revê Pull Requests dos colegas. |
| **Margareth De Carvalho** | **Developer** | Implementa o módulo de autenticação por palavra-passe e controlo de acesso por perfil, desenvolve componentes de interface responsivos e acessíveis (Tailwind CSS), realiza testes com dados fictícios e efectua revisões de código. |

No *The Scrum Guide (2020)*, a substituição do termo **«papéis»** (*roles*) por **«responsabilidades»** (*accountabilities*) elimina a ideia de cargos rígidos, hierarquias internas ou divisões fechadas de trabalho. Passa a existir uma única equipa coesa — sem subequipas — em que todos colaboram para atingir o Objectivo do Produto, mas cada pessoa responde claramente por um foco específico: maximizar o valor do produto (*Product Owner*), assegurar a eficácia da prática do Scrum (*Scrum Master*) e criar um Incremento utilizável a cada sprint (*Developers*).

*Fonte consultada: SCHWABER, K.; SUTHERLAND, J. The Scrum Guide (2020), secção «Scrum Team», disponível em `scrumguides.org`.*

---

## Eventos

Como o projecto decorre em 5 sprints de **4 dias reais** (cada uma simulando 2 semanas de trabalho), o grupo adaptou as durações e o formato dos cinco eventos do Scrum mantendo integralmente o seu propósito de inspecção e adaptação:

| Evento | Propósito | Participantes | Duração máxima no Guia (Sprint de 1 mês) | Duração / formato escolhido pelo grupo (Sprint de 4 dias) | O que sai do evento |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sprint** | Evento contentor de duração fixa onde o trabalho é executado para transformar ideias em valor e criar um Incremento. | Toda a *Scrum Team* | Até 1 mês | **4 dias reais** (equivalente a 2 semanas simuladas) | Incremento funcional integrado na `main` e marcado com a etiqueta `sprint-N`. |
| **Sprint Planning** (Planeamento da Sprint) | Definir por que a sprint é valiosa, que itens da Lista do Produto serão feitos e como o trabalho será realizado. | Toda a *Scrum Team* | 8 horas | **20 a 30 minutos** no 1.º dia da sprint (via Google Meet / presencial) | Objectivo da Sprint e *issues* seleccionadas, registados em `sprints/sprint-N.md` e atribuídos à iteração no quadro. |
| **Daily Scrum** (Reunião Diária) | Inspeccionar o progresso em direcção ao Objectivo da Sprint, identificar impedimentos e ajustar o plano de curto prazo. | *Developers* (com participação de toda a equipa) | 15 minutos por dia | **Reunião diária escrita** (3 linhas por membro: *o que fiz, o que vou fazer, impedimentos*), 5 a 10 minutos via WhatsApp | Actualização diária registada no próprio dia em `sprints/sprint-N.md` via Pull Request e movimentação dos cartões no quadro. |
| **Sprint Review** (Revisão da Sprint) | Inspeccionar o Incremento produzido na sprint, demonstrá-lo ao cliente e adaptar a Lista do Produto conforme o retorno. | *Scrum Team* e coordenador de turno (cliente) | 4 horas | **15 a 20 minutos** no 4.º dia da sprint + envio de demonstração curta (imagens ou vídeo de 1–2 min) via WhatsApp | Retorno do coordenador (ou validação pelo PO na ausência de resposta) registado em `sprints/sprint-N.md` e lista do produto actualizada. |
| **Sprint Retrospective** (Retrospectiva da Sprint) | Inspeccionar como correu a sprint em termos de pessoas, interacções, processos, ferramentas e Definição de Pronto, definindo melhorias. | Toda a *Scrum Team* | 3 horas | **15 a 20 minutos** no 4.º dia da sprint, na mesma sessão logo após a Revisão | Acções de melhoria concretas para a sprint seguinte em `sprints/sprint-N.md` e actualização da secção «Desafio a vigiar» do `processo.md`. |

**Justificação das durações e adaptações:** Em sprints académicas de 4 dias, durações proporcionais curtas evitam consumir tempo de desenvolvimento em reuniões longas, preservando o foco na entrega. A adopção da **reunião diária escrita** em `sprints/sprint-N.md` (submetida por Pull Request no próprio dia) adapta-se aos horários distintos dos estudantes, mantém a transparência diária e cria prova verificável nos servidores do GitHub. A realização da Revisão e da Retrospectiva na mesma sessão do 4.º dia facilita a coordenação do grupo, mantendo separada a análise do **produto** (Revisão) da reflexão sobre o **processo** (Retrospectiva).

*Fonte consultada: SCHWABER, K.; SUTHERLAND, J. The Scrum Guide (2020), secção «Scrum Events», disponível em `scrumguides.org`.*

---

## Objectivo do Produto e Definição de Pronto

### Objectivo do Produto (*Product Goal*)
Conceber, desenvolver e testar a **Caderneta Digital do Coordenador de Turno**, uma aplicação web responsiva, acessível e segura que centralize o acompanhamento escolar numa instituição de ensino médio técnico-profissional, assegurando como produto mínimo obrigatório: autenticação por palavra-passe com acesso por perfil, gestão de turmas e alunos, registo de ocorrências com múltiplos alunos associados, registo de medidas aplicadas e consulta do histórico individual do aluno.

### Objectivo da Sprint 1 (*Sprint Goal*)
Configurar o repositório, o quadro Kanban e o acordo de processo (`processo.md`), iniciar o levantamento de requisitos e casos de uso e construir a estrutura base e a autenticação da Caderneta Digital.

### Definição de Pronto (*Definition of Done*)
Um item da *Lista do produto* só é considerado **Pronto** (*Done*) quando cumpre todos os critérios seguintes:
1. O trabalho foi desenvolvido num **ramo próprio** criado para a respectiva *issue*.
2. Foi aberto um **Pull Request** ligado à *issue* com `Closes #n` e **revisto e aprovado por um ou mais membros** da equipa antes da integração na `main`.
3. A funcionalidade ou documentação foi testada localmente, executa sem erros (no computador e no telemóvel, no caso de interfaces) e cumpre os requisitos mínimos de usabilidade, acessibilidade (WCAG 2.2) e segurança por perfil.
4. Todos os dados utilizados nos testes e demonstrações são estritamente **fictícios**, em conformidade com a Lei n.º 22/11 (Lei da Protecção de Dados Pessoais).
5. O Pull Request foi integrado (*merged*) na branch `main` e o cartão foi movido para a coluna `Done` no quadro `caderneta`.

### Compromissos dos artefactos e itens não concluídos
Segundo *The Scrum Guide (2020)*, cada artefacto do Scrum contém um **compromisso** associado para garantir transparência e foco perante o qual o progresso pode ser medido: a *Lista do produto* compromete-se com o **Objectivo do Produto**, a *Lista da sprint* com o **Objectivo da Sprint**, e o *Incremento* com a **Definição de Pronto**.

Quando um item da *Lista da sprint* **não cumpre a Definição de Pronto** no final da sprint, ele **não é considerado pronto**, não pode ser integrado como entrega concluída nem demonstrado como Incremento finalizado na Revisão da Sprint. Em vez disso, **regressa à Lista do produto** para ser reavaliado pelo *Product Owner* e planeado numa sprint seguinte (por exemplo, a Sprint 2).

*Fonte consultada: SCHWABER, K.; SUTHERLAND, J. The Scrum Guide (2020), secção «Scrum Artifacts», disponível em `scrumguides.org`.*

---

## Regras do quadro

O grupo aplica as **três práticas do Kanban** (*The Kanban Guide*, 2020) no quadro público **`caderneta`** no GitHub Projects:

1. **Definir e visualizar o fluxo de trabalho:** Todas as tarefas do projecto estão registadas como *issues* visíveis no quadro `caderneta`, organizadas por colunas que representam cada etapa do trabalho, um campo de iteração com as 5 sprints (`Sprint 1` a `Sprint 5`) e duas vistas obrigatórias: **«Lista do produto»** (todas as *issues* ordenadas por prioridade) e **«Sprint actual»** (apenas as *issues* da sprint em curso).
2. **Gerir activamente os itens no fluxo de trabalho:** A equipa limita o trabalho em curso (WIP) na coluna `In progress`, acompanha a idade dos itens abertos durante a reunião diária, desbloqueia impedimentos com prioridade e garante que os cartões avançam apenas quando cumprem as condições da etapa seguinte.
3. **Melhorar o fluxo de trabalho:** No final de cada sprint, o grupo calcula as quatro medidas de fluxo (WIP máximo, débito, idade do item mais antigo em curso e tempo de ciclo de três *issues* concluídas) e usa esses dados na Retrospectiva para ajustar a forma de trabalhar.

### Colunas do quadro `caderneta`

| Coluna | Limite WIP | O que significa um item estar nesta coluna |
| :--- | :---: | :--- |
| **Backlog** | — | *Issue* identificada e registada na Lista do Produto, mas ainda não priorizada ou detalhada para execução imediata. |
| **Ready** | — | *Issue* seleccionada para a sprint actual, com história de utilizador e critérios de aceitação claros, pronta a ser puxada por um membro. |
| **In progress** | **3** | *Issue* em desenvolvimento activo num ramo próprio por um membro da equipa. |
| **In review** | 5 | Trabalho concluído pelo autor com Pull Request aberto (`Closes #n`), a aguardar revisão e aprovação de um ou mais colegas. |
| **Done** | — | Pull Request aprovado e integrado (*merged*) na branch `main`, cumprindo todos os pontos da Definição de Pronto. |

### Justificação do limite WIP = 3 em `In progress`
Como a equipa tem **4 membros**, definir um limite máximo de **3 itens simultâneos em `In progress`** impede que todos trabalhem isoladamente em tarefas paralelas sem fechar entregas. Este limite reduz a sobrecarga de contexto, incentiva a colaboração e garante que existe sempre capacidade disponível na equipa para **rever Pull Requests em `In review`** ou apoiar colegas com impedimentos — acelerando o fecho das *issues* e diminuindo o tempo de ciclo dentro de sprints curtas de 4 dias.

*Fontes consultadas: VACANTI, D.; COLEMAN, J. The Kanban Guide (2020), disponível em `kanbanguides.org`; GitHub Docs: «Customizing the board layout», disponível em `docs.github.com`.*

---

## Desafio a vigiar

Com base na revisão sistemática da literatura de **Ahmad, Markkula e Oivo (2013)** sobre o uso do Kanban no desenvolvimento de software, destacam-se os seguintes resultados empíricos:

* **Dois benefícios relatados:**
  1. **Maior visibilidade e transparência do fluxo de trabalho**, facilitando a identificação rápida de gargalos e do estado real das tarefas.
  2. **Melhoria da comunicação, da colaboração da equipa e do ritmo de entrega**, promovendo foco na conclusão de itens e redução de tempos de espera.
* **Dois desafios relatados:**
  1. **Falta de experiência e de compreensão aprofundada do método**, dificultando a aplicação consistente das suas práticas no dia-a-dia.
  2. **Dificuldade de disciplina e adaptação da equipa** na manutenção do quadro actualizado, na definição correcta de limites WIP e na mudança de hábitos de trabalho.

### Desafio escolhido pelo grupo e plano de mitigação
O desafio que o grupo espera enfrentar com maior impacto neste projecto é a **falta de experiência com o método** (combinando pela primeira vez Scrum, quadro Kanban no GitHub Projects, ramos, Pull Requests e revisões de código em sprints curtas de 4 dias).

Para reduzir este risco, o grupo compromete-se a:
* Consultar directamente os guias oficiais (*The Scrum Guide 2020*, *The Kanban Guide* e *GitHub Docs*) sempre que surgir dúvida sobre regras do processo;
* Seguir este ficheiro `processo.md` como checklist prático de trabalho em todas as sprints;
* Apoiar internamente os membros com menor prática no Git/GitHub (através do *Scrum Master* e sessões rápidas no WhatsApp/Google Meet) para evitar bloqueios;
* Avaliar explicitamente a evolução deste desafio em todas as Retrospectivas.

### Registo de acompanhamento nas retrospectivas
* **Sprint 1:** *(A actualizar na Retrospectiva de 27/11/2026).*

*Fonte consultada: AHMAD, M. O.; MARKKULA, J.; OIVO, M. «Kanban in software development: A systematic literature review». In: 39th Euromicro Conference on Software Engineering and Advanced Applications (SEAA). IEEE, 2013.*

---

## Como combinamos o Scrum e o Kanban

### Comparação entre Scrum e Kanban

| Dimensão | Scrum | Kanban |
| :--- | :--- | :--- |
| **Ritmo das entregas** | Iterativo e incremental em ciclos de duração fixa (*sprints*), com entrega de um Incremento no fim de cada sprint. | Fluxo contínuo: os itens são entregues assim que ficam concluídos, sem obrigatoriedade de iterações fixas. |
| **Responsabilidades** | Define três responsabilidades obrigatórias: *Product Owner*, *Scrum Master* e *Developers*. | Não prescreve responsabilidades ou papéis fixos; adapta-se à estrutura existente da equipa. |
| **Mudanças a meio do ciclo** | O Objectivo da Sprint não muda; o âmbito da sprint pode ser clarificado/renegociado sem comprometer esse objectivo nem a qualidade. | Permite introduzir ou reordenar itens a qualquer momento, desde que o limite de trabalho em curso (WIP) seja respeitado. |
| **Medidas usadas** | Foca-se na entrega de valor, cumprimento do Objectivo da Sprint e do Objectivo do Produto (empirismo nos eventos). | Usa quatro medidas obrigatórias de fluxo: Trabalho em Curso (WIP), Débito (*Throughput*), Idade do Item em Curso (*Work Item Age*) e Tempo de Ciclo (*Cycle Time*). |

### Combinação adoptada pelo grupo
Seguindo *The Kanban Guide for Scrum Teams*, o grupo utiliza o **Scrum como estrutura base** (as 5 sprints de 4 dias, as responsabilidades de PO, SM e Developers, os artefactos com os seus compromissos e os cinco eventos) e integra o **Kanban para optimizar o fluxo dentro de cada sprint** (quadro visual `caderneta`, políticas explícitas por coluna, limite WIP = 3 em `In progress` e medição contínua do fluxo).

As **medidas de fluxo do Kanban apoiam directamente os eventos do Scrum**:
* **Na Reunião Diária:** o controlo do **WIP** e da **idade dos itens em curso** mostra imediatamente que tarefas estão paradas há demasiado tempo e precisam de desbloqueio ou revisão.
* **No Planeamento da Sprint:** o **débito** (*Throughput*) observado nas sprints anteriores ajuda a escolher uma quantidade realista de *issues* para a sprint seguinte.
* **Na Retrospectiva da Sprint:** o **tempo de ciclo** (*Cycle Time*) e eventuais violações do limite WIP fornecem dados concretos para melhorar a colaboração e a agilidade nas revisões de Pull Requests.

*Fontes consultadas: SCRUM.ORG. The Kanban Guide for Scrum Teams (2021); SCHWABER, K.; SUTHERLAND, J. The Scrum Guide (2020); VACANTI, D.; COLEMAN, J. The Kanban Guide (2020).*

---

## Ferramentas

### Ferramentas obrigatórias do laboratório
* **Git e GitHub:** controlo de versões, trabalho em ramos por *issue*, Pull Requests e revisão de código.
* **GitHub Projects:** gestão visual do quadro Kanban (`caderneta`), campo de iteração e vistas obrigatórias.
* **Scrum:** framework de organização das 5 sprints, eventos e artefactos.
* **Inteligência Artificial (ChatGPT e Gemini):** apoio à compreensão de conceitos, revisão textual e sugestão de código (sujeita às regras da secção seguinte).

### Ferramentas adicionais de trabalho (usadas por todos os membros)
* **Visual Studio Code (VS Code):** editor de código unificado para desenvolvimento, formatação e integração local com Git.
* **Draw.io:** criação colaborativa do diagrama de casos de uso (UML) e modelos visuais do projecto.
* **WhatsApp:** comunicação rápida diária da equipa, recolha dos pontos da Reunião Diária e envio de demonstrações/dúvidas ao coordenador de turno.
* **Google Meet:** realização de sessões síncronas curtas de Planeamento, Revisão e Retrospectiva da sprint e apoio técnico em tempo real.

### Stack tecnológica da aplicação
* **Frontend:** React, TypeScript, JavaScript e Tailwind CSS (interface web responsiva e acessível para computador e telemóvel).
* **Backend e gestão de pacotes:** Node.js, Express, `cors` e `npm`.
* **Persistência de dados:** PostgreSQL (base de dados relacional para armazenar com integridade os dados fictícios de utilizadores, turmas, alunos, ocorrências e medidas).

---

## Regras de uso da IA

### Actividade 8 — Verificação da Inteligência Artificial contra o Scrum Guide 2020

* **Ferramentas utilizadas pelo grupo:** ChatGPT e Gemini
* **Ferramenta testada nesta verificação:** ChatGPT (com pesquisa web activa)
* **Data do teste:** 27/11/2026
* **Pergunta feita:** *«Quais são os papéis do Scrum e os seus eventos?»*
* **Resposta obtida (resumo literal da saída):**
  > **1. Papéis (responsabilidades) do Scrum**
  > 1. **Product Owner (Dono do Produto):** É responsável por maximizar o valor do produto desenvolvido pela equipa (definir e comunicar o Product Goal, gerir o Product Backlog e garantir a sua transparência).
  > 2. **Scrum Master:** É responsável por garantir que o Scrum seja compreendido e aplicado corretamente, promovendo a eficácia da equipa (orientar a equipa, facilitar a compreensão dos eventos Scrum, ajudar a remover impedimentos, promover a melhoria contínua e apoiar a organização).
  > 3. **Developers (Desenvolvedores):** São os profissionais responsáveis por criar um incremento utilizável do produto em cada Sprint (elaborar o plano de trabalho da Sprint, garantir a qualidade, adaptar diariamente o plano, desenvolver o incremento e responsabilizar-se mutuamente).
  >
  > **2. Eventos do Scrum**
  > O Scrum possui cinco eventos formais. O Sprint é o evento que engloba os outros quatro:
  > 1. **Sprint (Evento principal):** Período de tempo fixo de um mês ou menos para desenvolver um incremento utilizável e transformar trabalho planeado em valor.
  > 2. **Sprint Planning (Planeamento da Sprint):** Define por que a Sprint é valiosa, o que pode ser concluído e como será realizado. Participantes: toda a Scrum Team. Duração máxima: 8 horas (Sprint de 1 mês).
  > 3. **Daily Scrum (Reunião Diária):** Evento de 15 minutos realizado diariamente pelos Developers para analisar o progresso em direção ao Sprint Goal e adaptar o plano.
  > 4. **Sprint Review (Revisão da Sprint):** Apresentação e inspeção dos resultados da Sprint com os stakeholders para recolher feedback e adaptar o Product Backlog. Duração máxima: 4 horas (Sprint de 1 mês).
  > 5. **Sprint Retrospective (Retrospectiva da Sprint):** Análise da forma como a equipa trabalhou para planear melhorias para a próxima Sprint. Duração máxima: 3 horas (Sprint de 1 mês).
  > *(Nota da resposta: «os tempos máximos apresentados são para uma Sprint de um mês. Para Sprints menores, os eventos normalmente são mais curtos» — apoiada em fontes como o Scrum Guide 2020 e páginas externas como DailyBot Insights, Kotacom e Motion).*

* **Análise crítica à luz do Scrum Guide 2020:**
  1. **Persistência do termo desactualizado «Papéis» (*Roles*) e mistura de fontes não oficiais:** Embora coloque «(responsabilidades)» entre parênteses, a resposta mantém **«Papéis»** no título principal e cita artigos externos (*Product Owner Explained: Role...*). Na secção **«Scrum Team»** do *The Scrum Guide (2020)*, o termo *«papéis»* (*roles*) foi eliminado e substituído por **responsabilidades** (*accountabilities*), precisamente para remover a ideia de cargos rígidos ou hierarquias internas.
  2. **Introdução do termo «Cerimónias» (*Ceremonies*) nas referências:** Ao listar os eventos, a resposta incorpora uma fonte externa intitulada *«Agile Ceremonies»*. Na secção **«Scrum Events»** do *The Scrum Guide (2020)*, Scrum não utiliza o termo *«cerimónias»* — define estritamente cinco **eventos** formais concebidos para criar regularidade e permitir a inspecção e adaptação empírica.
  3. **Omissão da regra de participação do PO e SM na *Daily Scrum*:** A resposta afirma apenas que a *Daily Scrum* é realizada *«pelos Developers»*, omitindo uma regra explícita da secção **«Daily Scrum»** do *The Scrum Guide (2020)*: se o *Product Owner* ou o *Scrum Master* estiverem a trabalhar activamente em itens do *Sprint Backlog*, participam no evento como *Developers* (situação que se aplica directamente à nossa equipa).
  4. **Imprecisão sobre a duração da *Daily Scrum* em sprints curtas:** A nota final generaliza que *«para Sprints menores, os eventos normalmente são mais curtos»*. De acordo com as secções **«Sprint Planning»**, **«Daily Scrum»**, **«Sprint Review»** e **«Sprint Retrospective»** do *The Scrum Guide (2020)*, essa proporcionalidade aplica-se apenas ao *Sprint Planning*, à *Sprint Review* e à *Sprint Retrospective*; a **Daily Scrum mantém sempre a duração fixa de 15 minutos**, independentemente da duração da Sprint.

### Regras do grupo para uso e verificação da IA
1. **Verificação nas fontes oficiais:** Toda a explicação conceptual gerada pelo ChatGPT ou pelo Gemini sobre Scrum, Kanban, usabilidade ou acessibilidade é confrontada com os guias oficiais (*Scrum Guide 2020*, *Kanban Guide*, *GitHub Docs*, *WCAG 2.2* e documentação técnica) antes de ser integrada no `processo.md` ou no relatório.
2. **Revisão técnica obrigatória:** Nenhum código sugerido por IA entra directamente na `main`; o autor testa-o localmente, adapta-o à arquitectura do projecto (React, TypeScript, Node.js, Express e PostgreSQL) e abre um Pull Request revisto e aprovado por pelo menos um colega.
3. **Domínio individual garantido:** Cada membro compromete-se a compreender e saber explicar sozinho qualquer linha de código ou texto que submeter ou aprovar, garantindo preparação para a defesa individual.
4. **Transparência e registo:** Todas as utilizações da IA (ferramenta, finalidade e parte do trabalho apoiada) são documentadas para constarem na declaração obrigatória do relatório final.

*Fonte consultada: SCHWABER, K.; SUTHERLAND, J. The Scrum Guide (2020), secções «Scrum Team» e «Scrum Events», disponível em `scrumguides.org`.*
