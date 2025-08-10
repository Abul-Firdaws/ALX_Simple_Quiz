// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero gracefully
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Wait for DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    // Helper to parse inputs safely with default 0
    function getInputs() {
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        return [num1, num2];
    }

    // Add button event listener
    document.getElementById('add').addEventListener('click', function () {
        const [num1, num2] = getInputs();
        const result = add(num1, num2);
        resultSpan.textContent = result;
    });

    // Subtract button event listener
    document.getElementById('subtract').addEventListener('click', function () {
        const [num1, num2] = getInputs();
        const result = subtract(num1, num2);
        resultSpan.textContent = result;
    });

    // Multiply button event listener
    document.getElementById('multiply').addEventListener('click', function () {
        const [num1, num2] = getInputs();
        const result = multiply(num1, num2);
        resultSpan.textContent = result;
    });

    // Divide button event listener
    document.getElementById('divide').addEventListener('click', function () {
        const [num1, num2] = getInputs();
        const result = divide(num1, num2);
        resultSpan.textContent = result;
    });
});
