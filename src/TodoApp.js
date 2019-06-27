import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
export default function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
