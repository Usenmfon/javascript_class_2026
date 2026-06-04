const form = document.forms[0]


form.addEventListener('submit', function(event) {
    event.preventDefault()

    let titleValue = document.getElementById('title').value
    let descriptionValue = document.getElementById('description').value
    let completedValue = document.getElementById('completed').value

    console.log(title, description, completed)

    createTodo({
        title: titleValue,
        description: descriptionValue,
        completed: Boolean(completedValue)
    })

    form.reset()
})


async function createTodo(payload)
{
    const response = await fetch("https://js-todo-api-express.vercel.app/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    // const data = await response.json()
    
    window.location.reload()
}


async function getTodos()
{
    const response = await fetch("https://js-todo-api-express.vercel.app/api/todos")

    const todos = await response.json()

    displayTodos(todos.data)
}

getTodos()

let body = document.body
let section = document.createElement('section')

function displayTodos(todos)
{
    todos.forEach((todo) => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        let desc = document.createElement('p')
        let createdAt = document.createElement('p')

        p.textContent = `Title: ${todo.title}`
        desc.textContent = `Desc: ${todo.description}`
        createdAt.textContent = `Created At: ${todo.createdAt}`

        div.append(p, desc, createdAt)
        section.appendChild(div)
    })
}

body.appendChild(section)