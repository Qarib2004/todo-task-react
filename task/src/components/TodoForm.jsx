import React from "react";
import PropTypes from "prop-types";

function TodoForm({ newTodo, onTodoAdd, onTodoChange, onTodoDeleteAll }) {
  return(
    <>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => {
            onTodoChange(e.target.value);
          }}
          placeholder="Enter todo"
        />

        <button onClick={onTodoAdd}>add</button>
        <button onClick={onTodoDeleteAll}>delete all</button>
      </div>
    </>
  );
  
}

TodoForm.propTypes = {
    newTask: PropTypes.string.isRequired,
    onTaskChange: PropTypes.func.isRequired,
    onTaskAdd: PropTypes.func.isRequired,
    onDeleteAll: PropTypes.func.isRequired,
  };



export default TodoForm;
