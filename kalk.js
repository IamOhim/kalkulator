let display = document.getElementById('display');
let advancedButtons = document.getElementById('advanced-buttons');
let advancedMode = false;

// Function to insert value into the display
function insertValue(value) {
  if (value === '^') {
    display.value += '**';
  } else {
    display.value += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Function to toggle advanced buttons
function toggleAdvanced() {
  advancedMode = !advancedMode;
  advancedButtons.style.display = advancedMode ? 'grid' : 'none';
}
