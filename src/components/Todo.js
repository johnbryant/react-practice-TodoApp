import React from "react";
import cn from "classnames";

const Todo = ({ onClick, completed, text }) => (
  <li className="todo-item" onClick={onClick}>
    {completed ? "👌" : "👋"}
    <span
      className={cn(
        "todo-item__text",
        completed && "todo-item__text--completed"
      )}
    >
      {text}
    </span>
  </li>
);

export default Todo;
