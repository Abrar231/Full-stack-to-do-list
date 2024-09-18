import { useState } from "react";
import { Button } from "./ui/button";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import type {TaskProps} from '../lib/utils'

export default function Task({task, setTasks}: TaskProps) {
    function formatDate(date: Date) {
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
    }
    
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = async () => {
        setShowDelete(true);
    }

    const handleEdit = async () => {
        setShowEdit(true);
    }

    return (
        <div className="border rounded-xl border-black p-5 flex flex-col justify-around min-h-[200px] min-w-[400px]">
            <p className="text-3xl font-bold">{task.task}</p>
            <div className="flex justify-between items-center">
                <span className={`${task.status === 'Completed'? 'text-green-500': 'text-red-500'}`}>Status: {task.status}</span>
                <span className="px-3 py-2 rounded-full bg-gray-300 text-gray-500 font-semibold">{formatDate(new Date(task.created_at))}</span>
            </div>
            <div className="flex justify-around">
                <Button onClick={() => handleEdit()}>Edit Task</Button>
                <Button variant="destructive" onClick={() => handleDelete()}>Delete Task</Button>
            </div>
            {showDelete && <DeleteModal setShowDelete={setShowDelete} id={task.id} setTasks={setTasks} />}
            {showEdit && <EditModal setShowEdit={setShowEdit} task={task} setTasks={setTasks} />}
        </div>
    );
}