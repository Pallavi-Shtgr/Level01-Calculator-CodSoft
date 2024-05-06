document.addEventListener('DOMContentLoaded', function () {
    const calcOperation = document.getElementById('calc-operation');
    const calcTyped = document.getElementById('calc-typed');
    let currentOperation = '';
    let currentNumber = '';

    // Clear the screen
    function clearScreen() {
        currentOperation = '';
        currentNumber = '';
        updateScreen();
    }

    // Update the screen with current values
    function updateScreen() {
        calcOperation.textContent = currentOperation;
        calcTyped.textContent = currentNumber || '0';
    }

    // Handle number button click
    function handleNumberClick(number) {
        currentNumber += number;
        updateScreen();
    }

    // Handle operator button click
    function handleOperatorClick(operator) {
        if (currentNumber !== '') {
            currentOperation += currentNumber + ' ' + operator + ' ';
            currentNumber = '';
            updateScreen();
        }
    }

    // Handle equal button click
    function handleEqualClick() {
        if (currentNumber !== '') {
            currentOperation += currentNumber;
            const result = eval(currentOperation);
            currentOperation = '';
            currentNumber = result.toString();
            updateScreen();
        }
    }

    // Attach click event listeners to number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            handleNumberClick(value);
        });
    });

    // Attach click event listeners to operator buttons
    document.querySelectorAll('.opt').forEach(button => {
        button.addEventListener('click', () => {
            const operator = button.getAttribute('data-operator');
            handleOperatorClick(operator);
        });
    });

    // Attach click event listener to AC button
    document.querySelector('.ac').addEventListener('click', clearScreen);

    // Attach click event listener to equal button
    document.querySelector('.equal').addEventListener('click', handleEqualClick);
});
