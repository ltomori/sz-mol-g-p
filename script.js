let currentInput = "";
let hasCalculated = false;

function appendCharacter(character) {
  if (hasCalculated && !isOperator(character)) {
    currentInput = "";
    hasCalculated = false;
  }
  if (hasCalculated && isOperator(character)) {
    currentInput = currentInput.split('=')[1] || currentInput;
    hasCalculated = false;
  }
  currentInput += character;
  updateDisplay();
}

function calculate() {
  if (currentInput !== "") {
    try {
      const result = eval(currentInput);
      currentInput = `=${result}`;
      hasCalculated = true;
      updateDisplay();
    } catch (error) {
      currentInput = "Error";
      hasCalculated = true;
      updateDisplay();
    }
  }
}

function clearDisplay() {
  currentInput = "";
  hasCalculated = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("output").value = hasCalculated ? currentInput : formatInput(currentInput);
}

function formatInput(input) {
  return input.replace(/(\d+)\s*([+\-*/])\s*(?=\d)/g, "$1 $2 ");
}

function isOperator(character) {
  const operators = ["+", "-", "*", "/"];
  return operators.includes(character);
}
