
// To do lost
let todos = [];

// Get list of todos from the database
const getTodos = async () => {
    try {
        let response = await axios({
            method: 'GET', 
            url: 'http://localhost:3030/api/todos'
        })
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}

// Save todo to database and update frontend list
const saveTodo = async () => {
    try {
        let name = document.getElementById('todoName').value
        let category = document.getElementById('todoCategory').value
        let response = await axios({
            method: 'POST', 
            url: 'http://localhost:3030/api/todo', 
            data: {
                name: name, 
                category: category
            }
        })
        todos.push(response.data.data); 
        console.log(todos)
        buildTodoList('todoList', todos);
    } catch (error) {
        console.error(error);
    }
}

// build list on frontend
const buildTodoList = (id, list) => {
    todos = [];
    let ul = document.getElementById(id);
    for (let item of list) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.name));
        ul.appendChild(li);
    }
}

// Init on page load
(async () => {
    todos = await getTodos();
    buildTodoList('todoList', todos);

    // Init save todo button
    let saveTodoBtn = document.getElementById('saveTodo');
    saveTodoBtn.addEventListener('click', saveTodo);
})()