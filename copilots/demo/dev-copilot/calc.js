export function evaluateExpression(expr) {
  const s = String(expr).replace(/\s+/g, '');
  if (s.length === 0) return '';
  if (!/^[0-9+\-*/().]+$/.test(s)) throw new Error('Invalid characters');

  const output = [];
  const ops = [];
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2 };

  let i = 0;
  let prevToken = null;

  while (i < s.length) {
    const ch = s[i];
    if (/\d|\./.test(ch)) {
      let num = ch;
      i++;
      while (i < s.length && /[\d.]/.test(s[i])) {
        num += s[i];
        i++;
      }
      if (num.split('.').length > 2) throw new Error('Invalid number');
      output.push(num);
      prevToken = 'number';
      continue;
    }

    if (ch === '(') {
      ops.push(ch);
      prevToken = '(';
      i++;
      continue;
    }

    if (ch === ')') {
      while (ops.length && ops[ops.length - 1] !== '(') output.push(ops.pop());
      if (!ops.length) throw new Error('Mismatched parentheses');
      ops.pop();
      prevToken = ')';
      i++;
      continue;
    }

    if (['+', '-', '*', '/'].includes(ch)) {
      // handle unary minus by inserting a 0 when '-' appears as unary
      if (ch === '-' && (prevToken === null || prevToken === '(' || prevToken === 'operator')) {
        output.push('0');
      }
      while (
        ops.length &&
        ops[ops.length - 1] !== '(' &&
        prec[ops[ops.length - 1]] >= prec[ch]
      ) {
        output.push(ops.pop());
      }
      ops.push(ch);
      prevToken = 'operator';
      i++;
      continue;
    }

    throw new Error('Invalid character');
  }

  while (ops.length) {
    const op = ops.pop();
    if (op === '(' || op === ')') throw new Error('Mismatched parentheses');
    output.push(op);
  }

  const stack = [];
  for (const token of output) {
    if (/^[\d.]+$/.test(token)) stack.push(parseFloat(token));
    else {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) throw new Error('Invalid expression');
      let res;
      if (token === '+') res = a + b;
      else if (token === '-') res = a - b;
      else if (token === '*') res = a * b;
      else if (token === '/') {
        if (b === 0) throw new Error('Divide by zero');
        res = a / b;
      }
      stack.push(res);
    }
  }

  if (stack.length !== 1) throw new Error('Invalid expression');
  return stack[0];
}
