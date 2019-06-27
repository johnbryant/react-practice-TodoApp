let nextTodoId = 0;

const addTodo = input => ({
  type: "ADD_TODO",
  text: input.value,
  id: nextTodoId++
});

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(t => {
        return !t.completed;
      });
    case "SHOW_COMPLETED":
      return todos.filter(t => {
        return t.completed;
      });
    default:
      return todos;
  }
};

const setVisibilityFilter = props => ({
  type: "SET_VISIBILITY_FILTER",
  filter: props.filter
});

export { addTodo, getVisibleTodos, setVisibilityFilter };
