# Agile SDLC for Calculator Demo

## Overview

This file captures the Agile lifecycle for the `dev-copilot` calculator demo, from requirements through deployment.

## Requirements

### User Story
- As a user, I want a simple calculator so I can perform basic arithmetic operations quickly.

### Acceptance Criteria
- The calculator supports addition, subtraction, multiplication, and division.
- The calculator displays a result after pressing equals.
- The user can clear the current input.
- Invalid expressions display `Error`.
- The calculator UI is simple and responsive.

## Sprint Backlog

### Sprint Goal
Deliver a working HTML calculator demo with a clear Agile development flow and validation.

### User Stories
1. **Calculator UI**
   - Build the HTML layout with a display and calculator buttons.
   - Acceptance criteria: buttons are visible and arranged in a grid.
2. **Calculator Logic**
   - Implement JavaScript to capture button input and evaluate expressions.
   - Acceptance criteria: operations calculate correctly, and equals updates the display.
3. **Styling**
   - Apply CSS to make the demo visually presentable and responsive.
   - Acceptance criteria: the demo is clean and usable on desktop and mobile.
4. **Testing and Validation**
   - Create a list of manual test cases and run them.
   - Acceptance criteria: all core calculations succeed and errors are handled gracefully.
5. **Deployment**
   - Publish the demo as a static page.
   - Acceptance criteria: the demo can be opened in a browser and shared.

## Tasks
- [ ] Write `demo.html` structure
- [ ] Add `demo.css` styling
- [ ] Add `demo.js` calculation logic
- [ ] Validate arithmetic operations
- [ ] Verify responsiveness and UI usability
- [ ] Document requirements, acceptance criteria, and testing
- [ ] Open demo locally and confirm deployment readiness

## Testing Plan

### Manual Test Cases
- Input `3 + 5` and verify result is `8`
- Input `10 - 4` and verify result is `6`
- Input `6 * 7` and verify result is `42`
- Input `12 / 3` and verify result is `4`
- Input `5 / 0` and verify the display shows `Error`
- Use clear button and verify display resets

### Validation Notes
- Check that button clicks update the display exactly as expected.
- Confirm the equals button evaluates expressions reliably.
- Confirm invalid operations do not crash the application.

## Deployment Plan

### Deployment Options
- Open `demo.html` in a browser locally for immediate validation.
- Host the folder on GitHub Pages, Netlify, or another static website service.

### Deployment Steps
1. Confirm the demo works locally.
2. Commit `demo.html`, `demo.css`, `demo.js`, and documentation files.
3. Push the branch to the repository.
4. Deploy the static site from the repository.
5. Share the demo URL.

## Retrospective

- The demo should show a complete lifecycle from planning to delivery.
- Keep the implementation minimal but polished enough to serve as a proof of concept.
- Use this artifact as a template for future developer copilot demos.
