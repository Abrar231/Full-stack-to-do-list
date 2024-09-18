"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import type {TaskType} from '../lib/utils'

const formSchema = z.object({
  task: z.string().min(1),
  status: z.enum(['Incomplete', 'Completed'])
});

interface AddFormProps {
  setTasks: (tasks: TaskType[]) => void
}

export default function AddTaskForm({setTasks}: AddFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        task: "",
        status: 'Incomplete'
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/createTask`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        });
        const task = await response.json();
        if(task.createdTask.id){
          const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`);
            const tasks = await data.json();
          setTasks(tasks);
          form.reset({task: "", status: 'Incomplete'});
        }
    }

    return (
      <div className="flex justify-center ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96 p-5 border border-gray-500 rounded-xl">
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task</FormLabel>
                  <FormControl>
                    <Input placeholder="Type here what tasks you have..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="Incomplete" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Incomplete
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="Completed" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Completed
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <Button disabled={form.formState.isSubmitting} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      )
}