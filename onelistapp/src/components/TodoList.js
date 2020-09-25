import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <DragDropContext
      onDragEnd={(...props) => {
        console.log(props);
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
                    index={i}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
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
              </div>
            )}
          </Droppable>
        </ul>
      </div>
    </DragDropContext>
  );
};

export default TodoList;
