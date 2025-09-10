// Layers:

// Entities (Core Business Logic) → Domain models (ex. Todo)

// Use Cases (Application Logic) → Business rules, addTodo, deleteTodo

// Interface Adapters → API calls, DB, Redux, etc.

// Frameworks/UI → React, Express, DB driver

// ➡️ React Clean Architecture:

// UI call useCase only.

// Business rules (domain logic) It is independent of React.




// Entity
class Todo{
    constructor(text){
        this.text = text;
        this.done = false;
    }
}


// Use Case
function addTodoUseCase(todoRepo,text){
    const todo = new Todo(text);
    todoRepo.add(todo);
    return todo.getAll();

}

// Infrastructure (Repository)
class TodoRepo{
    constructor() {
    this.todos = [];
  }
    add(todo) { this.todos.push(todo); }
    getAll() { return this.todos; }
}

const repo = new TodoRepo();

// React UI (Framework Layer)\


function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const updated = addTodoUseCase(repo, `New Todo ${todos.length + 1}`);
    setTodos([...updated]);
  };

  return (
    <div>
      <ul>{todos.map((t, i) => <li key={i}>{t.text}</li>)}</ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
