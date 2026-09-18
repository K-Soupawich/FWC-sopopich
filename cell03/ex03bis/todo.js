const $ftList =$("#ft_list");
const $newBtn =$("#newBtn");

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, ...valueParts] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(valueParts.join("="));
        }
    }
    return null;
}

function saveTodos() {
    const items = $ftList.children().map(function () {
        return $(this).text();
    }).get();
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(items))};`;
}

function createTodoElement(text) {
    return $("<div></div>")
        .text(text)
        .on("click", function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });
}

function addTodo(text) {
    const $todoDiv = createTodoElement(text);
    $ftList.prepend($todoDiv);
    saveTodos();
}

$newBtn.on("click", function () {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodo(text.trim());
    }
});

const savedData = getCookie("todos");
if (savedData) {
    try {
        const items = JSON.parse(savedData);
        if (Array.isArray(items)) {
            for (let i = items.length - 1; i >= 0; i--) {
                const $todoDiv = createTodoElement(items[i]);
                $ftList.prepend($todoDiv);
            }
        }
    } catch (e) {}
}