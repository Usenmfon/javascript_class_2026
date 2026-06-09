const form = document.forms[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let titleValue = document.getElementById("title").value;
  let descriptionValue = document.getElementById("description").value;
  let completedValue = document.getElementById("completed").value;

  console.log(title, description, completed);

  createTodo({
    title: titleValue,
    description: descriptionValue,
    completed: Boolean(completedValue),
  });

  form.reset();
});

async function createTodo(payload) {
  const response = await fetch(
    "https://js-todo-api-express.vercel.app/api/todos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  // const data = await response.json()

  window.location.reload();
}

async function getTodos() {
  const response = await fetch(
    "https://js-todo-api-express.vercel.app/api/todos",
  );

  const todos = await response.json();

  displayTodos(todos.data);
}

getTodos();

let body = document.body;
let section = document.createElement("section");

async function displayTodos(todos) {
  todos.forEach((todo) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let desc = document.createElement("p");
    let createdAt = document.createElement("p");
    let updatedAt = document.createElement("p");
    let btnDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    div.classList.add("card");

    btnDiv.classList.add("btnCard");

    deleteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";

    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    btnDiv.append(editBtn, deleteBtn);

    deleteBtn.id = todo._id;
    editBtn.id = todo._id;

    p.textContent = `Title: ${todo.title}`;
    desc.textContent = `Desc: ${todo.description}`;
    let createDate = new Date(todo.createdAt);
    createdAt.textContent = `Created At: ${createDate.toLocaleString()}`;
    let updateDate = new Date(todo.updatedAt);
    updatedAt.textContent = `Created At: ${updateDate.toLocaleString()}`;

    div.append(btnDiv, p, desc, createdAt, updatedAt);
    section.appendChild(div);
  });

  let allDeleteBtns = document.getElementsByClassName("delete");

  Array.from(allDeleteBtns).forEach((item) => {
    item.addEventListener("click", function () {
      let response = confirm("Are you sure you want to delete?");
      if (response) {
        deleteTodo(item.id);
      }
    });
  });

  let allEditBtns = document.getElementsByClassName("edit");

  Array.from(allEditBtns).forEach((item) => {
    item.addEventListener("click", function () {
      getSingleTodo(item.id);
    });
  });
}

async function deleteTodo(todoId) {
  const response = await fetch(
    `https://js-todo-api-express.vercel.app/api/todos/${todoId}`,
    {
      method: "DELETE",
    },
  );

  const todos = await response.json();

  window.location.reload();

  alert(todos.message);
}

async function getSingleTodo(todoId) {
  const response = await fetch(
    `https://js-todo-api-express.vercel.app/api/todos/${todoId}`,
  );

  const todo = await response.json();
  displayUpdateForm(todo.data);
}

function displayUpdateForm(todo) {
  const updateForm = document.createElement("form");

  console.log(todo);

  updateForm.id = todo._id;

  updateForm.innerHTML = `
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value=${todo.title}>

        <label for="description">Description</label>
        <input type="text" name="description" id="description" value="${todo.description}">

        <label for="completed">Completed?</label>
        <input type="radio" id="completed" name="completed" ${todo.completed ? "checked" : ""}  value="true">True
        <input type="radio" id="completed" name="completed" ${!todo.completed ? "checked" : ""} value="false">False

        <button type="submit">Update</button>
    `;

  body.replaceChild(updateForm, form);

  updateForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let titleValue = document.getElementById("title").value;
    let descriptionValue = document.getElementById("description").value;
    let completedValue = document.getElementById("completed").value;

    console.log(completedValue);

    updateTodo(
      {
        title: titleValue,
        description: descriptionValue,
        completed: Boolean(completedValue),
      },
      updateForm.id,
    );

    form.reset();
  });
}

async function updateTodo(payload, todoId) {
  const response = await fetch(
    `https://js-todo-api-express.vercel.app/api/todos/${todoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  // const data = await response.json()

  window.location.reload();
}

body.appendChild(section);
