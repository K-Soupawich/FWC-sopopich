colors = ["red", "green", "blue"];
let index = 0;
let size = 200;
const min_size = 200;
const max_size = 420;

const balloon = document.getElementById("balloon");
balloon.onclick = function() {
    size += 10;
    if (size > max_size) {
        size = 200;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";

    index = (index + 1) % colors.length;
    balloon.style.backgroundColor = colors[index];
}

balloon.onmouseleave = function() {
    if (size > min_size) {
        size -= 5;
        if (size < min_size) {
            size = min_size;
        }
        balloon.style.width = size + "px";
        balloon.style.height = size + "px";
        index = (index - 1 + colors.length) % colors.length;
        balloon.style.backgroundColor = colors[index];
    }   
}