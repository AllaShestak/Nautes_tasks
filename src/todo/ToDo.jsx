import React from "react";


function ToDo({todo, toggleTask, removeTask}) {
    return (
        <div key={todo.id} className="item-todo">
            <div
                className={todo.complete ? "item-text strike" : "item-text"} >
                {todo.task}
            </div>
            <div className="buttons">
               <span className="item-delete" onClick={() => removeTask(todo.id)}>
                   X
                </span>
                <span className="item-complete" onClick={() => toggleTask(todo.id)}>
                   {!todo.complete ? "complete" : "todo"}
               </span>
            </div>
        </div>
    )
}

export default ToDo