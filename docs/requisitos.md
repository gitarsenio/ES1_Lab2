# Documento de Requisitos — Caderneta Digital do Coordenador de Turno

**Projecto:** Caderneta Digital do Coordenador de Turno (Lab #02 — Engenharia de Software I)  
**Turma:** M3  
**Responsável (Product Owner):** Feidao Décimo  
**Issue associada:** #2  
**Data:** 27/11/2026

---

## 1. Actores e Perfis de Utilizador

A partir da análise dos pedidos do coordenador de turno e dos três cenários de utilização do enunciado (registo de discussão envolvendo alunos de turmas distintas com professor/funcionário como testemunhas, acompanhamento semanal de medidas e contactos com encarregados, e pedido de resumo trimestral pela direcção), identificaram-se os seguintes **actores** e **perfis de acesso**:

| Actor / Perfil | Tipo | Descrição e Permissões no Sistema |
| :--- | :--- | :--- |
| **Administrador** | Perfil com conta | Gere utilizadores, cria/desactiva contas, atribui perfis e permissões e configura dados estruturais da escola (turnos, cursos, classes e turmas). |
| **Coordenador de Turno** | Perfil com conta (actor principal) | Gere turmas e alunos do seu turno, regista ocorrências (associando vários alunos, testemunhas e intervenientes), regista e acompanha o cumprimento de medidas, consulta o histórico individual dos alunos, regista contactos com encarregados, agenda reuniões e consulta/exporta relatórios. |
| **Direcção Escolar** | Perfil com conta (leitura) | Acede em modo de consulta aos relatórios, indicadores e resumos de ocorrências por turma/trimestre, bem como ao histórico disciplinar dos alunos, sem permissão para criar ou alterar ocorrências. |
| **Professor / Funcionário** | Interveniente registado *(sem conta no produto mínimo)* | Participa nos cenários como testemunha ou interveniente de uma ocorrência. Os seus dados básicos fictícios são registados pelo Coordenador no formulário da ocorrência, não necessitando de conta própria no produto mínimo. |
| **Encarregado de Educação** | Interveniente registado *(sem conta)* | Associado a um ou mais alunos para registo de contactos e agendamento de reuniões pelo Coordenador de Turno; não possui acesso directo à plataforma. |

---

## 2. Requisitos Funcionais (RF)

Os requisitos funcionais abaixo cobrem os 15 pedidos iniciais do coordenador de turno e distinguem o **Produto Mínimo Obrigatório (MVP)** das funcionalidades evolutivas:

| Código | Módulo | Descrição do Requisito | Prioridade |
| :--- | :--- | :--- | :---: |
| **RF01** | Autenticação e Perfis | O sistema **deve** autenticar utilizadores com identificador e palavra-passe e restringir rotas e acções consoante o perfil (Administrador, Coordenador de Turno ou Direcção Escolar). | **Produto Mínimo** |
| **RF02** | Utilizadores e Permissões | O sistema **deve** permitir ao Administrador criar, editar, activar/desactivar contas de utilizadores e atribuir perfis de acesso. | Alta |
| **RF03** | Estrutura Escolar | O sistema **deve** permitir gerir turnos, cursos, classes e turmas. | **Produto Mínimo** |
| **RF04** | Gestão de Alunos | O sistema **deve** permitir registar, editar, pesquisar e consultar alunos associados às respectivas turmas. | **Produto Mínimo** |
| **RF05** | Ocorrências Escolares | O sistema **deve** permitir registar ocorrências escolares com data, hora, local, tipo/gravidade e descrição detalhada dos acontecimentos. | **Produto Mínimo** |
| **RF06** | Múltiplos Alunos na Ocorrência | O sistema **deve** permitir associar um ou vários alunos (mesmo de turmas diferentes) à mesma ocorrência. | **Produto Mínimo** |
| **RF07** | Testemunhas e Intervenientes | O sistema **deve** permitir registar testemunhas e intervenientes (ex.: professores e funcionários) numa ocorrência. | **Produto Mínimo** |
| **RF08** | Medidas e Decisões | O sistema **deve** permitir registar medidas disciplinares ou pedagógicas aplicadas a cada aluno envolvido numa ocorrência, com prazo e estado inicial. | **Produto Mínimo** |
| **RF09** | Acompanhamento de Medidas | O sistema **deve** permitir actualizar e acompanhar o estado de cumprimento das medidas (ex.: *Pendente*, *Em curso*, *Cumprida*, *Incumprida*) com observações. | **Produto Mínimo** |
| **RF10** | Histórico do Aluno | O sistema **deve** permitir consultar o histórico individual completo de um aluno, exibindo por ordem cronológica todas as ocorrências, medidas aplicadas e estado de cumprimento. | **Produto Mínimo** |
| **RF11** | Encarregados de Educação | O sistema **pode** permitir registar encarregados de educação e associá-los aos respectivos alunos. | Média |
| **RF12** | Contactos com Encarregados | O sistema **pode** permitir registar o histórico de contactos realizados com encarregados de educação (data, meio de contacto, assunto e resultado) ligados a um aluno ou ocorrência. | Média |
| **RF13** | Agendamento de Reuniões | O sistema **pode** permitir agendar reuniões de acompanhamento (data, hora, participantes, motivo e resumo/acta). | Média |
| **RF14** | Relatórios e Indicadores | O sistema **pode** gerar resumos e indicadores de ocorrências por turma, período/trimestre e estado das medidas para apoio à Direcção Escolar. | Média |
| **RF15** | Lembretes Internos | O sistema **pode** exibir alertas e lembretes internos no painel inicial para medidas próximas do prazo e reuniões agendadas. | Baixa |
| **RF16** | Pesquisa e Filtros Rápidos *(Proposto pelo grupo)* | O sistema **deve** permitir filtrar ocorrências e medidas por turma, aluno, data e estado de cumprimento, agilizando o acompanhamento semanal. | Alta |

---

## 3. Requisitos Não Funcionais (RNF)

Classificados segundo Sommerville (capítulo 4) e alinhados com as referências oficiais exigidas no laboratório:

### 3.1 Usabilidade (Referência: 10 Heurísticas de Nielsen, 1994)
* **RNF01 — Etiquetas claras:** Todos os campos de formulários devem apresentar rótulos (`<label>`) explícitos e texto auxiliar quando necessário.
* **RNF02 — Mensagens de erro construtivas:** Em caso de dados inválidos ou falha de submissão, o sistema deve mostrar mensagens em linguagem simples que identifiquem o erro e expliquem como corrigi-lo (Heurística 9).
* **RNF03 — Visibilidade do estado e consistência:** A interface deve dar retorno imediato após acções (guardar, editar, autenticar) e manter navegação consistente em todas as páginas (Heurísticas 1 e 4).

### 3.2 Acessibilidade (Referência: W3C WCAG 2.2, 2023)
* **RNF04 — Contraste de cores:** O texto normal e os elementos interactivos devem manter contraste mínimo de 4,5:1 em relação ao fundo (WCAG 2.2 — Critério 1.4.3).
* **RNF05 — Navegação por teclado:** Todas as funcionalidades da aplicação (menus, formulários, botões e tabelas) devem ser operáveis exclusivamente através do teclado, com indicação visual clara de foco (WCAG 2.2 — Critérios 2.1.1 e 2.4.7).
* **RNF06 — Texto alternativo:** Todas as imagens e ícones que transmitam informação devem possuir atributo `alt` ou `aria-label` descritivo (WCAG 2.2 — Critério 1.1.1).

### 3.3 Responsividade e Portabilidade
* **RNF07 — Interface multiplataforma:** A aplicação web (React + Tailwind CSS) deve adaptar-se sem perda de legibilidade ou funcionalidade a ecrãs de computador (desktop) e de telemóvel (mobile).
* **RNF08 — Execução local:** A aplicação (Frontend React/TypeScript, Backend Node.js/Express e Base de Dados PostgreSQL) deve instalar e executar localmente a partir do repositório seguindo o `README.md`.

### 3.4 Segurança e Protecção de Dados
* **RNF09 — Autenticação segura:** As palavras-passe dos utilizadores devem ser armazenadas exclusivamente sob forma cifrada/hash (ex.: `bcrypt`), nunca em texto simples na base de dados PostgreSQL.
* **RNF10 — Controlo de acesso por perfil (RBAC):** Tanto a interface como os endpoints da API (Express) devem validar a sessão (ex.: JWT) e o perfil do utilizador em cada pedido, impedindo acesso não autorizado.
* **RNF11 — Protecção de dados pessoais (Lei n.º 22/11):** Todos os dados de alunos, encarregados de educação, professores e funcionários utilizados nos testes, demonstrações e eventual versão publicada devem ser estritamente fictícios, em cumprimento da Lei n.º 22/11, de 17 de Junho (Lei da Protecção de Dados Pessoais).

---

## 4. Priorização da Lista do Produto, Propostas e Rejeições

### 4.1 Justificação da ordem no *Product Backlog*
A ordenação das *issues* no quadro `caderneta` segue o critério de **dependência técnica + valor para o produto mínimo obrigatório** em 5 sprints de 4 dias:
1. **Base do processo, requisitos e arquitectura (Sprint 1):** Ficheiro `processo.md`, levantamento de requisitos/casos de uso, estrutura inicial (React/Node/PostgreSQL) e módulo de **autenticação e perfis** (base de segurança para todos os módulos seguintes).
2. **Gestão de turmas e alunos (Sprint 2):** Necessária antes de registar qualquer ocorrência ou histórico.
3. **Registo de ocorrências com vários alunos e testemunhas (Sprint 2/3):** Coração operacional da Caderneta Digital (Cenário 1).
4. **Registo e acompanhamento de medidas aplicadas (Sprint 3):** Depende directamente das ocorrências e responde ao acompanhamento semanal (Cenário 2).
5. **Consulta do histórico individual do aluno (Sprint 3/4):** Consolida ocorrências e medidas, fechando os 5 módulos do **produto mínimo obrigatório**.
6. **Funcionalidades adicionais após o produto mínimo (Sprint 4/5):** Encarregados de educação e registo de contactos, gestão avançada de utilizadores, relatórios/indicadores por turma para a Direcção (Cenário 3), agendamento de reuniões e lembretes internos.

### 4.2 Função proposta para acrescentar
* **Pesquisa e filtros rápidos em ocorrências e medidas (RF16):** Embora não estivesse isolada na lista inicial de pedidos, a filtragem por turma, data e estado da medida é indispensável para tornar prático o Cenário 2 (*«uma semana depois, o coordenador quer saber se a medida foi cumprida»*) à medida que o número de registos cresce.

### 4.3 Pedido proposto para rejeitar / adaptar
* **Envio automático de notificações externas (SMS / e-mail / WhatsApp automático) a encarregados de educação:** **Rejeitado** neste projecto académico. Exigiria integração com serviços externos pagos (gateways de SMS/API oficial do WhatsApp) e envolveria riscos de envio para contactos reais, contrariando o princípio de trabalhar apenas com dados fictícios (Lei n.º 22/11). **Alternativa adoptada:** substituir por **lembretes internos na própria aplicação (RF15)** e pelo **registo manual dos contactos realizados com encarregados (RF12)**.

---

## 5. Referências
* SOMMERVILLE, I. *Engenharia de Software* (capítulos 3, 4 e 5). Pearson.
* NIELSEN, J. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994 (`nngroup.com`).
* W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 2023 (`w3.org/TR/WCAG22`).
* ANGOLA. *Lei n.º 22/11, de 17 de Junho — Lei da Protecção de Dados Pessoais*.
* GITHUB. *GitHub Docs: About issues* (`docs.github.com`).
