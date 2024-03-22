import React from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
    </div>
  );
};

export default TodoItem;
