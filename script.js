  const buttons = document.querySelectorAll('button');
  const display = document.getElementById('display');
  let expression = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      switch (value) {
        case 'C':
          expression = '';
          display.innerText = '0';
          break;

        case 'DEL':
          expression = expression.slice(0, -1);
          display.innerText = expression || '0';
          break;

        case '=':
          try {
            const result = new Function('return ' + expression)();
            display.innerText = result;
            expression = result.toString();
          } catch {
            display.innerText = 'Error';
            expression = '';
          }
          break;

        case '.':
          // Get last number segment (split by operators)
          const segments = expression.split(/[\+\-\*\/\%\**]/);
          const lastSegment = segments[segments.length - 1];
          if (lastSegment.includes('.')) {
            return; // Don’t add another dot
          }
          expression += '.';
          display.innerText = expression;
          break;

        default:
          expression += value;
          display.innerText = expression;
      }
    });
  });