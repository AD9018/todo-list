import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  // Because of the fact that we want to filter through the todo list we need to update the value of the "completed" property
  //Keeping the "todos" List in App.js updated with the currently modified data
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <button onClick={completeHandler} className="complete">
        Completed
      </button>

      <button onClick={deleteHandler} className="delete">
        Delete
      </button>
    </div>
  );
};
export default Todo;
