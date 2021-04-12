import React from "react";

const Form = ({ input, setInput, todos, setTodos, setStatTodo }) => {
  const inputTextHandler = (e) => {
    console.log("inputTextHandler", e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 1000, text: input, completed: false },
    ]);
    setInput("");
  };

  const statusHandler = (e) => {
    setStatTodo(e.target.value);
  };

  return (
    <form>
      <input
        value={input}
        onChange={inputTextHandler}
        type="text"
        class="todo-input"
      />
      <button
        onClick={submitHandler}
        class="todo-button"
        type="submit"
      ></button>
      <div class="select">
        <select onChange={statusHandler} name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
