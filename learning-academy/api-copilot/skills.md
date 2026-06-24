# API Copilot Skills & Agent Roles

This document lists skills and responsibilities mapped to agents in the API Copilot ecosystem.

- Architect / Architect Agent
  - System design choices, API contract patterns, tradeoffs, and constraints.
  - Define security, compliance, and scalability constraints.

- Developer / Developer Agent
  - Implement endpoints, generate SDK snippets, scaffolding and sample apps.
  - Produce unit/integration tests and code samples.

- QA / QA Agent
  - Define test plans, generate test collections, and validate acceptance criteria.
  - Automate regression and contract tests.

- Security / Security Agent
  - Run OWASP-style checks, threat models, and provide prioritized fixes.

- Documentation / Documentation Agent
  - Produce API reference docs, sample usage, and developer portal content.

- Governance / Governance Agent
  - Enforce organizational policies, versioning, and approvals.

- SRE / Observability Agent
  - Recommend tracing, metrics, logging, and SLO definitions.

- Product / Product Agent
  - Translate business intent into prioritized user stories and success criteria.

Each agent should be invoked as part of an end-to-end flow depending on the requested task (design → implement → test → secure → document → observe).
