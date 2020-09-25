import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    const saveMovedTodos = () => {
        if (localStorage.getItem("todos") === null) {
          localStorage.setItem("todos", JSON.stringify([]));
        } else{
          localStorage.setItem("todos", JSON.stringify(todos))
        }
      }
  return (
    <DragDropContext
      onDragEnd={(param) => {
        //console.log(param);
        const srcIndex = param.source.index;
        const destIndex = param.destination.index;
        filteredTodos.splice(destIndex, 0, filteredTodos.splice(srcIndex, 1)[0]);
        saveMovedTodos(filteredTodos);
      }}
    >
      <div className="todo-container">
        <ul className="todo-list">
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {filteredTodos.map((todo, i) => (
                  <Draggable
                    key={todo.id}
                    draggableId={"draggable- " + todo.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // style={{
                        //   ...provided.draggableProps.style,
                        //   boxShadow: snapshot.isDragging
                        //     ? "0 0 .1rem #253031"
                        //     : "none",
                        // }}
                      >
                        <Todo
                          key={todo.id}
                          text={todo.text}
                          todos={todos}
                          todo={todo}
                          setTodos={setTodos}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
      </div>
    </DragDropContext>
  );
};

export default TodoList;
