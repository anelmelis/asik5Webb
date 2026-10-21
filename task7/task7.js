const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operator) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);
    let answer;

    switch (operator) {
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break;
        case "*":
            answer = a * b;
            break;
        case "/":
            if (b === 0) {
                result.textContent = "Cannot divide by zero";
                return;
            }
            answer = a / b;
            break;
    }

    result.textContent = answer;
}

document.getElementById("add").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divide").addEventListener("click", function() {
    calculate("/");
});
