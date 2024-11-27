import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(tasks);
  }, []);

  const addTask = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };

  const updateTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setNewTodo(todoToEdit.text);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <TodoForm
          newTodo={newTodo}
          onTodoAdd={addTask}
          onTodoChange={setNewTodo}
          onTodoDeleteAll={deleteAllTasks}
        />
        <TodoList
        todos={todos}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onEdit={editTodo}
        />
      </div>
    </>
  );
}

export default App;
