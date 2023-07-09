import { title } from "process";
import { FormEvent, useState } from "react";

type newTaskProps = {
    newTaskHandler: (taskTitle: string) => void;
}

const NewTask = ({newTaskHandler}: newTaskProps) => {
    const [taskTitle, setTasktitle] = useState('');
    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        newTaskHandler(taskTitle);
        setTasktitle('');
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex">
            <input className="border p-4 flex-1" value={taskTitle} onChange={e => setTasktitle(e.target.value)} />
            <button disabled={taskTitle.length === 0} className="border p-4 flex-none disabled:text-gray-500">Add</button>
        </form>
    );
}

export default NewTask;