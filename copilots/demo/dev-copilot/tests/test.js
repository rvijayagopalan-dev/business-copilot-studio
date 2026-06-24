import { evaluateExpression } from '../calc.js';

const cases = [
  ['3+5', 8],
  ['10-4', 6],
  ['6*7', 42],
  ['12/3', 4],
  ['-5+2', -3],
  ['2+3*4', 14],
  ['(2+3)*4', 20],
];

let failed = false;
for (const [expr, expected] of cases) {
  try {
    const got = evaluateExpression(expr);
    if (Math.abs(got - expected) > 1e-9) {
      console.error(`FAIL: ${expr} => expected ${expected}, got ${got}`);
      failed = true;
    } else {
      console.log(`OK: ${expr} => ${got}`);
    }
  } catch (e) {
    console.error(`ERROR: ${expr} threw ${e.message}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('All tests passed');
