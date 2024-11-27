import React from "react";
import PropTypes from "prop-types";

function Todo({ todo, onDelete, onUpdate, onEdit }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 15px",
        }}
      >
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <div>
          <button onClick={() => onUpdate(todo.id)}>update</button>
          <button onClick={() => onDelete(todo.id)}>delete</button>
          <button onClick={() => onEdit(todo.id)}>edit</button>
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Todo;
