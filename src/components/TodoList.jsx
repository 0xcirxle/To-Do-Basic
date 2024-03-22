import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
