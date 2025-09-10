/// Model
const model = {
  todos: [],
  addTodo(todo) {
    this.todos.push(todo);
  },
};

// View

function render(todos) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

/// Controller
document.addEventListener("click", (e) => {
  if (e.target.id === "add") {
    model.addTodo("New Todo " + (model.todos.length + 1));
    render();
  }
});
