const a = document.getElementById("a");
const b = document.getElementById("b");
const operator = document.getElementById("operator");
const btn = document.getElementById("calculateBtn");
btn.onclick = function () {
    let num1 = parseInt(a.value);
    let num2 = parseInt(b.value);
    let op = operator.value;
    let result;

    if (num1 < 0 || num2 < 0) {
        alert("Error :C");
        return;
    }
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        if (num2 === 0) {
            alert("It's over 9000!.");
            return;
        }
        result = num1 / num2;
    } else if (op === "%") {
        if (num2 === 0) {
            alert("It's over 9000!.");
            return;
        }
        result = num1 % num2;
    }
    alert(result);
    console.log(result);
}