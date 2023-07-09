import { useState } from "react";
import { Task } from "../types/task";
import NewTask from "./NewTask";
import TaskItem from "./TaskItem";

let initialTasks: Task[] = [
    {id: 0, title: "Buy Milk", done: false},
    {id: 1, title: "Water Plants", done: true},
    {id: 2, title: "Send Letter", done: false},
];

const TaskList = () => {

    const [tasks, setTasks] = useState(initialTasks);

    const newTaskHandler = (taskTitle: string) => {
        setTasks([...tasks, {id: tasks.length, title: taskTitle, done: false}]);
    }

    const taskCheckHandler = (id: number, done: boolean) => {
        setTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, done: done};
            }else{
                return task;
            }
        }));
    }

    const taskEditHandler = (id: number, title: string) => {
        setTasks(
            tasks.map(task => {
                if(task.id === id){
                    return {...task, title};
                }else{
                    return task;
                }
            }).filter(task => task.title.length > 0)
        );
    }

    return (
        <div className="md:w-96 md:ml-auto md:mr-auto md:mt-5 ">
            <h1 className="bg-blue-500 text-white p-4 text-xl font-medium md:rounded-t-xl">Task List</h1>
            <ul className="">
                { tasks.map(task => (
                    <TaskItem key={task.id} task={task} taskCheckHandler={taskCheckHandler} taskEditHandler={taskEditHandler}></TaskItem>
                ))} 
            </ul>
            <NewTask newTaskHandler={newTaskHandler}></NewTask>
        </div>
    );
}

export default TaskList;