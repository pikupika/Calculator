# Calculator

A basic calculator built using **HTML, CSS, and JavaScript**. It performs standard arithmetic operations with a clean user interface and validation logic.

---

## 🚀 Features

- Basic operations: `+`, `-`, `×` (multiply), `÷` (divide)
- Exponentiation using `**`
- Modulus operator using `%`
- Decimal support (e.g., `2.5 + 3.1`)
- Clear button to reset the input (`C`)
- Delete (backspace) button to remove last character (`⨉`)
- Prevents:
  - Multiple decimal points in a single number
  - Empty screen (displays 0 by default)
  - Invalid expressions on evaluation

---

## 🧠 Logic Explanation

- The calculator stores input in a string called `expression`.
- Each button click appends a value to `expression`.
- The equal (`=`) button evaluates the full expression using:
       **
        new Function('return ' + expression)();
      **
  This is safer and more controlled than eval()
- For decimal validation:
      **
        const segments = expression.split(/[\+\-\*\/\%\**]/);
        const lastSegment = segments[segments.length - 1];
        if (lastSegment.includes('.')) return;
      **
  This ensures only one dot per number.
- Deleting the last character:
      **
        expression = expression.slice(0, -1);
      **
- If the screen is empty, it displays "0" using:
      **
        display.innerText = expression || '0';
      **

## 📸 Sample Usage
Try these in the calculator:
2.5 + 3.5 → 6
10 % 3 → 1
2 ** 3 → 8
7 * 4 + 2 → 30
Press ⨉ to backspace
Press C to clear all
