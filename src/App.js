import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//false value returns array, postiive value returning what we have in local storage
const getLocalTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  //GLOBAL STATE
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getLocalTodos());
  const [stateTodo, setStateTodo] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  console.log(stateTodo);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, stateTodo]);
  //todos in the dependency array ensures that saveLocalTodos runs so that data in the local storage stays up to date with the data in the local state/App State

  //*filter function (run through todos if completed or not based on state)

  const filterHandler = () => {
    switch (stateTodo) {
      case "completed":
        console.log("case complete");
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        console.log("case incomplete");
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // We want to seperate filtered "todos" and original "todos" not looping over filtered "todos" in Todo.js but original "todos"
  //SAVE -  only creates and updates local storage with the latest data from Todos hook
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setStateTodo={setStateTodo}
      />
      <TodoList
        todos={stateTodo === "all" ? todos : filteredTodos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
//!IMPLEMENT WAY TO NOT HAVE IDENTICAL TODOS
