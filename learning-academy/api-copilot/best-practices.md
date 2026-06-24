# Best Practices — API Copilot Usage

This page lists concise best practices when using API Copilot to produce artifacts.

Prompting
- Provide context (target API, audience, constraints) in the prompt.
- Break complex requests into smaller tasks (one artifact per prompt when possible).
- Ask for tests and examples in the same prompt.

Security & Safety
- Never accept code that uses `eval` for runtime expression evaluation.
- Validate inputs and sanitize example data (no real PII in generated samples).
- Include security checks and threat modeling prompts after spec generation.

Code Quality
- Prefer small, pure functions that are easy to test.
- Request idiomatic patterns for the chosen stack (naming, error handling, async patterns).
- Ask Claude to generate unit tests alongside code.

Documentation
- Use the copilot to generate concise README and changelog entries.
- Capture prompt templates and successful examples in `claude-prompts.md`.

Testing & CI
- Add a lightweight test harness for sanity checks (unit tests or node scripts).
- Run generated tests in CI and fail builds on critical security findings.

Review & Governance
- Use `PR_TEMPLATE.md` and checklists for reviewers.
- Add policy validations (Spectral rules, security lints) before merging.

Iteration
- Record which prompts worked best and iterate on prompts for reproducibility.
- Keep artifacts small and modular to make automated checks easier.
