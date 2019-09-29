// init list in memeory
const $todos = [{ title: "aaaa", complete: false }]

const onSubmit = (todos, todo) => {
    if (!todo) return
    $todos.push({
        title: todo,
        complete: false
    })
    document.getElementById('todoList')
        .innerHTML = ("");
        document.getElementById('todoList')
        .append(generateTodoHtml($todos))

}

const generateTodoHtml = todos => {
    return todos.map(todo => {
        return document.createElement('div')
            .innerHTML = `${todo.title} - ${todo.complete}`
    })
}

$todoList = generateTodoHtml($todos)

// get root element
const $root = document.getElementById('root');

// add input
const $input = document.createElement('input');
$input.setAttribute('id', 'addTodo');
$input.setAttribute('placeholder', 'Add Item');

// add submit
const $submitBtn = document.createElement('button');
$submitBtn.setAttribute('type', 'submit');
$submitBtn.setAttribute('id', 'submit');
$submitBtn.setAttribute('value', 'aaaaa');
$submitBtn.innerText = "Add Todo";
$submitBtn.addEventListener('click', e => {
    e.preventDefault(e);
    console.log('click')
    onSubmit($todos, document.getElementById('addTodo').value)
    console.log(document.getElementById('addTodo').value)
})

// add list wrapper
const $items = document.createElement('div');
$items.setAttribute('id', 'todoList');

$root.appendChild($input);
$root.appendChild($submitBtn);
$root.appendChild($items);


// add todo items to list
$todoListElement = document.getElementById('todoList');
console.log($todoList)
$todoListElement.append($todoList[0])