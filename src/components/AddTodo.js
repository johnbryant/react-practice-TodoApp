import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={() => {
          dispatch(addTodo(input));
          input.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
