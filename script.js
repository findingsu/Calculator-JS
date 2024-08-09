const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

const display = document.getElementById("display");

const appendToDisplay = (value) => {
  display.textContent += value;
};

const calculate = () => {
  let sum = eval(display.textContent);
  display.textContent = sum;
};

const clearDisplay = (value) => (value = display.textContent = "");
