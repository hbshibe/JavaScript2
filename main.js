let lastButtonIsOperator = false;
let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === "0" && value === "0") {
    display.value = "0";
  } else if (display.value === "0" && value === ".") {
    display.value = "0.";
  } else if (display.value === "0") {
    display.value = value;
  } else {
    if (lastButtonIsOperator && ["+", "-", "*", "/"].includes(value)) {
      display.value = display.value.slice(0, -1) + value;
    } else {
      display.value += value;
    }
  }
  lastButtonIsOperator = ["+", "-", "*", "/"].includes(value);
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    display.value = new Function('return ' + display.value.replaceAll('×', '*').replaceAll('÷', '/'))();
  } catch (error) {
    display.value = 'error';
  }
}
