import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function TodoList({ todos, onDelete, onUpdate, onEdit }) {
  return (
    <>
      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onEdit={onEdit}
              onUpdate={onUpdate}
            />
          ))
        ) : (
          <p>List waste</p>
        )}
      </div>
    </>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default TodoList;
