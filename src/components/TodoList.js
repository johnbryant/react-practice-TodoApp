import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getVisibleTodos } from "../redux/actions";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos && todos.length
      ? todos.map(todo => (
          <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} />
        ))
      : "No todos, Yay!"}
  </ul>
);

const mapStateToTodoListProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToTodoListProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: "TOGGLE_TODO",
        id
      });
    }
  };
};

export default connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);
