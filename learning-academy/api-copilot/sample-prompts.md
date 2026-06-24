# Sample Prompts — API Copilot

A curated list of prompts grouped by common tasks. Use these as starting points and adapt context values.

Design & Specs

- "Create an OpenAPI 3.1 specification for a Customer API with CRUD endpoints. Include request/response schemas and 2 example payloads per endpoint."
- "Design an AsyncAPI spec for an order event-streaming API with Kafka topics and example messages."

Code Generation

- "Generate a Node.js (Express) route stub for POST /customers that validates request body and returns 201 with created resource." 
- "Create a Java Spring Boot controller for Customer CRUD with DTOs and validation annotations."

Testing

- "Produce a Postman collection that tests create/get/update/delete for Customer API and includes test scripts for response schema validation."
- "Generate unit tests for evaluator function covering precedence, parentheses, unary minus, and divide-by-zero."

Security & Governance

- "Review this OpenAPI spec for common OWASP API vulnerabilities and provide prioritized fixes."
- "Generate Spectral rules to enforce naming and response standardization for APIs in this organization." 

Observability

- "Recommend a minimal set of Prometheus metrics and tracing spans for the Customer API to support SLOs for 95th percentile latency." 

PR & Review

- "Write a concise PR description for this change: files changed, acceptance criteria, test summary, and suggested reviewers." 

Use these prompts as templates; always include constraints like auth model, data sensitivity, and target language/framework.
