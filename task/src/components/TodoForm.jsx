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
    newTodo: PropTypes.string.isRequired,
    onTodoChange: PropTypes.func.isRequired,
    onTodoAdd: PropTypes.func.isRequired,
    onTodoDeleteAll: PropTypes.func.isRequired,
  };



export default TodoForm;
