# dev-copilot Demo

This demo copilot showcases a small HTML calculator example with an Agile SDLC flow.

## Purpose

The `dev-copilot` demo is a simple implementation example to illustrate how a developer copilot can:

- generate a working calculator UI
- provide code artifacts for HTML, CSS, and JavaScript
- produce Agile SDLC artifacts like user stories, acceptance criteria, and test cases
- explain the development workflow from planning to delivery

## Files

- `SKILL.md` — defines the dev copilot demo capabilities.
- `copilot-instructions.md` — interaction behavior and output guidance.
- `prompt.md` — prompt examples for the calculator demo and Agile SDLC flow.
- `AGILE.md` — Agile lifecycle documentation from requirements to deployment.
- `demo.html` — a sample HTML calculator demo page.
- `demo.css` — styles for the calculator demo.
- `demo.js` — frontend logic for the calculator demo.

## Agile SDLC for the Demo

### 1. Requirements

- User story: "As a user, I want a simple calculator so I can perform basic arithmetic operations quickly."
- Acceptance criteria:
  - The calculator must support addition, subtraction, multiplication, and division.
  - The UI must be responsive and easy to use.
  - The result display must update correctly for valid expressions.
  - Invalid operations must show an error state.
- Scope:
  - A single-page HTML demo with basic styling and JavaScript logic.

### 2. Design

- UI layout: display at top, button grid below.
- Interaction flow: button click updates the expression, equals calculates result, clear resets input.
- Technology choices: plain HTML, CSS, and JavaScript for maximum simplicity.
- Non-functional goals: clean design, maintainable code, easy to extend.

### 3. Development

- Implement the page structure in `demo.html`.
- Add visual styling in `demo.css`.
- Add event handling and calculation logic in `demo.js`.
- Keep the code modular and easy to read.
- Follow best practices for naming, spacing, and element selection.

### 4. Testing

- Manual test cases:
  - `3 + 5 = 8`
  - `10 - 4 = 6`
  - `6 * 7 = 42`
  - `12 / 3 = 4`
  - `5 / 0` or invalid input should show `Error`.
- Acceptance checks:
  - Buttons update the display correctly.
  - The equals button evaluates expressions as expected.
  - Clear resets the display.
  - The UI remains usable on different screen sizes.

### 5. Deployment

- Hosting options:
  - Serve statically from any web host (GitHub Pages, Netlify, Vercel, local file system).
  - Open `demo.html` directly in a browser for a quick demo.
- Deployment steps:
  1. Verify the demo works locally by opening `demo.html` in a browser.
  2. Commit the demo files to source control.
  3. Push to a repository or static host.
  4. Share the demo URL with stakeholders.

### 6. Demo Delivery

- Provide the working calculator page.
- Attach the user story, acceptance criteria, and test cases.
- Highlight the simple Agile flow from requirements through deployment.
