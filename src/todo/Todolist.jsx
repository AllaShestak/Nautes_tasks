import ToDoForm from './ToDoForm'
import React, {useState} from "react";
import todoStyle from "./todoStyle.css"
import ToDo from "./ToDo";

function Todolist() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
            )
        ])
    }

    return (
        <>
        <div className="Todolist">
                <h2>List todo</h2>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                if(!todo.complete) {
                    return (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                        />
                    )
                } else {
                    return null
                }
            })}
        </div>
    <div className="Todolist">
        <h2>List completed</h2>
        {todos.map((todo) => {
            if(todo.complete) {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            } else {
                return null
            }
        })}
    </div>
        </>
    );
}

export default Todolist;