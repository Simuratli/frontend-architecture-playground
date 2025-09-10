import { useState } from "react";

function TodoApp() {
    // model
  const [todos, setTodos] = useState([]);

  // controller
  const addTodo = () => setTodos([...todos, `New Todo ${todos.length + 1}`]);

    // view
  return (
    <div>
      <ul>{todos.map((t, i) => <li key={i}>{t}</li>)}</ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}