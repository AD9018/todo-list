import React from "react";

const Form = ({ input, setInput, todos, setTodos, setStateTodo }) => {
  const inputTextHandler = (e) => {
    console.log("inputTextHandler", e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const statusHandler = (e) => {
    setStateTodo(e.target.value);
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        Submit
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
