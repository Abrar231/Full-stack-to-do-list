import Task from "./Task";
import type {TaskState} from '../lib/utils'

export default function TaskList({tasks, setTasks}: TaskState) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-10 p-5 place-items-center">
            {tasks.map(task => <Task key={task.id} task={task} setTasks={setTasks}/>)}
        </section>
    );
}