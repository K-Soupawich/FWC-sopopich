const $a = $("#a");
const $b = $("#b");
const $operator = $("#operator");

$("#calculateBtn").on("click", function () {
    let num1 = parseInt($a.val());
    let num2 = parseInt($b.val());
    let op = $operator.val();
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
});