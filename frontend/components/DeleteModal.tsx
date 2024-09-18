import { Button } from "./ui/button";
import type {DeleteModalProps} from '../lib/utils'

export default function DeleteModal({setTasks, id, setShowDelete}: DeleteModalProps) {
    const handleYes = async (id: number) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/task/${id}`,{
            method: 'DELETE',
        });
        const deletedTask = await response.json();
        if(deletedTask.message){
            const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`);
            const tasks = await data.json();
            setTasks(tasks);
            setShowDelete(false);
        }
    }

    const handleNo = () => {
        setShowDelete(false);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col gap-10 bg-white p-10 rounded-xl">
                <p>Do you want to delete the task?</p>
                <div className="flex justify-around">
                    <Button variant={"destructive"} onClick={() => handleYes(id)}>Yes</Button>
                    <Button onClick={handleNo}>No</Button>
                </div>
            </div>
        </div>
    );
}