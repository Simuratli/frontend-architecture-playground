// MVVM (Model-View-ViewModel) Pattern Example in React
//ViewModel In react js is custom hook
 

import { useState } from "react";
function useTodos() {
  const [todos, setTodos] = useState([]);
  const addTodo = () => setTodos([...todos, `New Todo ${todos.length + 1}`]);

  return { todos, addTodo };
}

// View
function TodoView() {
  const { todos, addTodo } = useTodos();

  return (
    <div>
      <ul>{todos.map((t, i) => <li key={i}>{t}</li>)}</ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}