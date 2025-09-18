let results = []; // store valid results

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break; // Cancel clicked
    let y = prompt("Enter the second number:");
    if (y === null) break; // Cancel clicked
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break; // Cancel clicked

    let result;

    // convert inputs to numbers
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);

    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Non-numeric input";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error: Divide by zero";
                break;
            case "%":
                result = num2 !== 0 ? num1 % num2 : "Error: Modulus by zero";
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // store only valid numeric results
    if (typeof result === "number" && !isNaN(result)) {
        results.push(result);
    }

    // print row
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

// Summary Table
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    document.write("<h2 style='text-align:center;'>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
