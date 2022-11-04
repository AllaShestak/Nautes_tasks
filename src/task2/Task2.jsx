import React from 'react';
import './TaskList.css';
import useCustomHook from './useCustomHook';


const Task2 = ({url}) => {
    const [data] = useCustomHook(url);
    return (
        <div>
            <h2>Task  useCustomHook </h2>
            <ul className="TaskList">
                {data.map((value) => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul>
            <hr/>
        </div>
    );
};
export default Task2