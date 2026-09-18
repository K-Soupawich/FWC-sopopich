$("#changeBtn").on("click", function () {
    const newColor = randomColor();
    $("body").css("background-color", newColor);
    console.log("Background color changed to: " + $("body").css("background-color"));
});