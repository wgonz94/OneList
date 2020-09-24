import React, { useState, useEffect } from 'react';
import './App.css';

//imported components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //State Management
  const [todos, setTodos] = useState([]);
  const [input, setInputs] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  // Run useEffect to save and updates todos 
  useEffect(() => {
    getLocalTodos();
  }, [])

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  // filter handler
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Save todos to local storage, setter event
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return(
    <div className="App">

    <header>
      <h1>One List</h1>
      </header>

      {/* place form here with states for todos, setTodos, inputs, setInputs, setStatus */}
      <Form 
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInputs={setInputs}
        setStatus={setStatus}
        />

    {/* place list of todos here to filter based on status of todos */}
    <TodoList 
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
    />
    </div>

  );
}

export default App;