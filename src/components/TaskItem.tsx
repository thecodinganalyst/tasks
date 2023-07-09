import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Task } from "../types/task";

type taskItemProp = {
    task: Task;
    taskCheckHandler: (id: number, done: boolean) => void;
    taskEditHandler: (id: number, title: string) => void;
}

const TaskItem = ({task, taskCheckHandler, taskEditHandler}: taskItemProp) => {
    const [isEdit, setIsEdit] = useState(false);
    const endEditOnEnter = (e: KeyboardEvent) => {
        if(e.code === "Enter"){
            setIsEdit(false);
        }
    }
    return (
        <li className="border p-4 cursor-pointer hover:bg-blue-100" onDoubleClick={() => setIsEdit(!isEdit)} onKeyDown={endEditOnEnter}>
            <input type="checkbox" checked={task.done} className="mr-5" onChange={e => taskCheckHandler(task.id, e.target.checked) } />
            {
                isEdit ?
                <input value={task.title} onChange={(e) => taskEditHandler(task.id, e.target.value)} className="border p-4 flex-1"/> :
                <label>{task.title}</label>
            }
        </li>
    );
}

export default TaskItem;