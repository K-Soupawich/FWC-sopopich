const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, ...valueParts] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(valueParts.join('='));
        }
    }
    return null;
}

function saveTodos() {
    const items = [];
    for (const child of ftList.children) {
        items.push(child.textContent);
    }
    document.cookie = `todos=${encodeURIComponent(JSON.stringify(items))};`
}

function createTodoElement(text) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.onclick = function () {
        if (confirm('Do you want to remove this TO DO?')) {
            todoDiv.remove();
            saveTodos();
        }
    };

    return todoDiv;
}

function addTodo(text) {
    const todoDiv = createTodoElement(text);
    todoDiv.id = 'todo_item';
    ftList.prepend(todoDiv);
    saveTodos();
}

newBtn.onclick = function () {
    const text = prompt('Enter a new TO DO:');
    if (text !== null && text.trim() !== '') {
        addTodo(text.trim());
    }
};

const savedData = getCookie('todos');
if (savedData) {
    try {
        const items = JSON.parse(savedData);
        if (Array.isArray(items)) {
            for (let i = items.length - 1; i >= 0; i--) {
                const todoDiv = createTodoElement(items[i]);
                ftList.prepend(todoDiv);
            }
        }
    } catch (e) { }
}