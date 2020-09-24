import React from "react";

const Form = ({todos, setTodos, input, setInputs, setStatus}) => {

    // js functions here
    // Input handler
    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputs(e.target.value);
    }
    // submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        //assign values of todos in a string
        setTodos([ ...todos, {text: input, completed: false, id: Math.random() * 1000 }
        ]);
        //clear input value after submitted for new entry
        setInputs("");
    }
    // status handler for filtering...
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} type="submit" className="todo-button">
               <i className= "fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;