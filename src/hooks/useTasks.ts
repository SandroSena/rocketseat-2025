import useLocalStorage from 'use-local-storage';
import { Task, TASKS_KEY, TaskState } from '../models/task';

const useTasks = () => {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdtasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
};

export default useTasks;
