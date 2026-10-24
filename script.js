function calculate(operator) {
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    const result = document.getElementById("result");

    if (a === "" || b === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const x = Number(a);
    const y = Number(b);
    let answer;

    if (operator === "+") answer = x + y;
    else if (operator === "-") answer = x - y;
    else if (operator === "*") answer = x * y;
    else if (operator === "/") {
        if (y === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = x / y;
    }

    result.textContent = "Result: " + answer;
}
