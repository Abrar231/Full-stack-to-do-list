'use client'
import AddTaskForm from '@/components/AddTaskForm'
import TaskList from '@/components/TaskList';
import { useEffect, useState } from 'react';
import type {TaskType} from '../lib/utils'

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`);
      const tasks = await data.json();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);


  return (
    <div>
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
