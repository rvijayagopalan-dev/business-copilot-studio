# Dev Copilot Demo — SKILL Overview (One-Page Template)

Purpose
-------
This document captures the capabilities, constraints, and canonical prompts for the `dev-copilot` calculator demo. It serves as the ground-truth reference for prompt engineering, reviews, and validation when using Claude Code as a developer copilot.

Scope & Success Signals
-----------------------
- Scope: single-page calculator with basic arithmetic (add, subtract, multiply, divide), decimal support, parentheses, clear, and basic error handling.
- Success: working UI (`demo.html`), safe evaluation (`calc.js`), test coverage for core cases (`tests/test.js`), and documented acceptance criteria in `AGILE.md`.

Core Capabilities
-----------------
- Produce semantic, accessible HTML markup for a calculator UI.
- Produce responsive CSS for a clean, mobile-first layout.
- Provide safe, well-tested JS logic to evaluate arithmetic expressions without using `eval`.
- Generate Agile artifacts: user stories, acceptance criteria, sprint tasks, and test plans.
- Produce lightweight automated tests and run instructions.

Inputs & Outputs
----------------
- Typical input: short natural-language prompt (see `prompt.md`) describing the desired feature or change.
- Canonical outputs:
  - `demo.html` — semantic markup and links to assets
  - `demo.css` — styling
  - `demo.js` — UI wiring (module that imports `calc.js`)
  - `calc.js` — safe evaluator module
  - `tests/test.js` — node-based test harness
  - `AGILE.md`, `README.md`, `claude-prompts.md`

Agent Roles (who uses this)
---------------------------
- Product Owner: confirms acceptance criteria and definition of done.
- Architect: sets constraints (no `eval`, input validation, error handling).
- Team Lead: defines PR checklist and QA scope.
- Developer: implements UI, logic, tests using Claude Code prompts.
- QA: validates manual and automated tests; checks accessibility and edge cases.

Example Prompts (canonical)
---------------------------
- Scaffold HTML/CSS/JS:
  "Generate a single-page HTML scaffold for a calculator demo. Include a readonly display and a 4x5 button grid. Link `demo.css` and `demo.js`. Use semantic markup and include ARIA attributes where appropriate."
- Safe evaluator:
  "Implement `evaluateExpression(expr)` that supports + - * / ( ) and decimals without using `eval`. Throw for invalid input and divide-by-zero. Include edge-case handling and examples."
- Tests:
  "Create a Node test file `tests/test.js` that imports the evaluator and checks core cases, precedence, parentheses, unary minus, and divide-by-zero."

Constraints & Safety
--------------------
- Never use `eval` on raw user input. Reject characters outside [0-9+\-*/().].
- Handle divide-by-zero explicitly and surface `Error` to the UI.
- Keep logic pure and testable; prefer small functions.

Acceptance Criteria (example)
----------------------------
- UI shows a readonly display and buttons for digits, operators, decimal point, equals and clear.
- Core arithmetic cases pass: `3+5=8`, `10-4=6`, `6*7=42`, `12/3=4`.
- Tests run with `node tests/test.js` and exit 0 on success.
- Deployment: demo can be opened locally and deployed to a static host.

Files & Artifacts
-----------------
- `demo.html`, `demo.css`, `demo.js`, `calc.js` — implementation
- `tests/test.js`, `package.json` — test harness
- `AGILE.md`, `README.md`, `walkthrough.html` — docs & process
- `claude-prompts.md`, `prompt.md` — prompt templates and examples

How to use with Claude Code
---------------------------
1. Start with a short, explicit prompt (use examples above).
2. Ask Claude to generate small, focused artifacts (one file or function at a time).
3. Run tests locally after each change and iterate.
4. When producing code, include a request for tests and for a short PR summary.

Maintenance notes
-----------------
- Update this file when adding features (keyboard support, history, memory).
- Keep `claude-prompts.md` and `prompt.md` in sync with realistic prompts that succeeded.
- Record any constraints (security, accessibility) in `SECURITY.md` and `ACCESSIBILITY.md` when the demo grows.

---
Last updated: 2026-06-23
