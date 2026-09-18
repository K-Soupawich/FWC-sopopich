const colors = ["red", "green", "blue"];
let index = 0;
let size = 200;
const min_size = 200;
const max_size = 420;

const $balloon = $("#balloon");

$balloon.on("click", function() {
    size += 10;
    if (size > max_size) {
        size = 200;
    }

    index = (index + 1) % colors.length;

    $(this).css({
        width: size + "px",
        height: size + "px",
        backgroundColor: colors[index]
    });
});

$balloon.on("mouseleave", function() {
    if (size > min_size) {
        size -= 5;
        if (size < min_size) {
            size = min_size;
        }

        index = (index - 1 + colors.length) % colors.length;

        $(this).css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[index]
        });
    }
});