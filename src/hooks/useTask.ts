import useLocalStorage from 'use-local-storage';
import { Task, TASKS_KEY, TaskState } from '../models/task';

const useTask = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  const prepareTask = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: '',
        state: TaskState.Creating,
      },
    ]);
  };

  const updateTask = (id: string, payload: { title: Task['title'] }) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
  };

  const updateTaskStatus = (id: string, concluded: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
  };
};

export default useTask;
