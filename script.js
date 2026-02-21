let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = Function('"use strict"; return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}