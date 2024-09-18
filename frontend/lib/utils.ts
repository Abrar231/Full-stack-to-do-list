import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TaskType{
  id: number,
  task: string,
  status: 'Completed' | 'Incomplete',
  created_at: string
}

export interface TaskState{
  tasks: TaskType[],
  setTasks: (tasks: TaskType[]) => void
}

export interface TaskProps{
  task: TaskType,
  setTasks: (tasks: TaskType[]) => void
}

export interface DeleteModalProps{
  setTasks: (tasks: TaskType[]) => void,
  id: number,
  setShowDelete: (bool: boolean) => void,
}

export interface EditModalProps{
  setTasks: (tasks: TaskType[]) => void,
  task: TaskType,
  setShowEdit: (bool: boolean) => void,
}

export const fetchTasks = async ()=> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`);
  return await data.json();
}
