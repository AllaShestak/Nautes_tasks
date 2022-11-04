import './App.css';
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import Todolist from "./todo/Todolist";

function App() {
    return (
        <div className="App">
            <Task1/>
            <Task2 url={"https://jsonplaceholder.typicode.com/posts"}/>
            <Todolist/>
        </div>
    );
}

export default App;
