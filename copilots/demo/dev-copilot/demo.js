import { evaluateExpression } from './calc.js';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // normalize symbols that users see (×, ÷) to operator tokens
    const val = button.dataset.value;
    display.value += val;
  });
});

equalsButton.addEventListener('click', () => {
  try {
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    const result = evaluateExpression(expression);
    display.value = String(result);
  } catch (error) {
    display.value = 'Error';
  }
});

clearButton.addEventListener('click', () => {
  display.value = '';
});
