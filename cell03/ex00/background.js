btn = document.getElementById("changeBtn");
btn.onclick = function () {
    document.body.style.backgroundColor = randomColor();
    console.log("Background color changed to: " + document.body.style.backgroundColor);
}