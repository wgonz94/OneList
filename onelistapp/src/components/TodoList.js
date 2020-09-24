import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                
                {/* filtered todos here (use map to send out individual todo) */}
                {filteredTodos.map(todo => (

                    <Todo key={todo.id}
                          text={todo.text}
                          todos={todos}
                          todo={todo}
                          setTodos={setTodos}
                          />

                ))}
            </ul>
        </div>
    );
};


export default TodoList;