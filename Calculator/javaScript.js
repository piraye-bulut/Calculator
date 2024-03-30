

let currentInput = '';

function AppendToDisplay(value) {
    if (value === ',') {
        value = '.';
    }

    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        const expression = currentInput.replace(/,/g, '.');

        // Çarpma işlemi için 'x' yerine '*' kullanıldı
        const result = eval(expression.replace(/x/g, '*'));
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}