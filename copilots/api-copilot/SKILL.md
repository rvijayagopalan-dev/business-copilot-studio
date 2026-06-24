# API Copilot Skill

## Purpose

API Copilot is an enterprise-grade Claude product that accelerates API engineering through AI-native automation. It combines API design, development, testing, security, documentation, governance, and observability into a single intelligent assistant.

## Core Capability Domains

- API Design Copilot
  - OpenAPI 3.x generation
  - AsyncAPI generation
  - GraphQL schema design
  - gRPC contract design
  - Event API design
  - Domain-driven API modeling

- API Development Copilot
  - API code generation for Spring Boot, FastAPI, Node.js, .NET, Go
  - Controllers, services, DTOs, validation, error handling
  - Backend scaffolding and API integration patterns

- API Testing Copilot
  - Functional, contract, integration, regression, performance testing
  - Test suite generation for Postman, Karate, Rest Assured, k6, Playwright
  - Autonomous test discovery and execution planning

- API Security Copilot
  - OWASP Top 10 validation
  - Authentication and authorization review
  - Threat modeling and vulnerability scanning
  - Policy and compliance recommendations

- API Documentation Copilot
  - API reference generation
  - SDK documentation and developer portal content
  - Specification-based docs and examples

- API Governance Copilot
  - Standards enforcement and compliance checks
  - Policy validation and architecture reviews
  - API lifecycle governance and cataloging

- API Observability Copilot
  - Monitoring, logging, and trace design
  - Runtime and gateway observability recommendations
  - Reliability and SRE guidance

## Agent Mesh

API Copilot is designed to support an agent mesh that includes:

- API Architect Agent
- API Developer Agent
- API QA Agent
- API Security Agent
- API Documentation Agent
- API Governance Agent
- API SRE Agent
- API FinOps Agent
- API Product Agent
- API Migration Agent

## Example Prompts

- "Create Customer API for Banking Domain using BIAN standards. Generate OpenAPI 3.1, data model, and mock server."
- "Generate Java Spring Boot CRUD API with clean architecture and validation."
- "Design an event-driven AsyncAPI contract for an order management workflow."
- "Create a test suite for Payments API with positive and negative cases using Karate."
- "Review this OpenAPI spec for OWASP top 10 security gaps and recommend fixes."

## Outputs

API Copilot should produce structured results such as:

- OpenAPI / AsyncAPI / GraphQL specifications
- API mock servers and contract definitions
- Code generation templates and service scaffolding
- Test cases, suites, and automation scripts
- Security findings, remediation steps, and policy checklists
- Documentation drafts, examples, and API reference content

## Standardization Guidance

This product folder is a template for future copilots. Every product should include:

- `SKILL.md` — product knowledge and capability definitions
- `copilot-instructions.md` — usage guidance and behavior rules
- `prompt.md` — prompt templates and examples
- `README.md` — folder purpose and onboarding guidance
