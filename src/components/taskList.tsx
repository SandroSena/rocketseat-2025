import Button from './button';
import PlusIcon from '../assets/icons/plus.svg?react';
import TaskItem from './taskItem';
import useTasks from '../hooks/useTasks';
import useTask from '../hooks/useTask';
import { TaskState } from '../models/task';

const TaskList = () => {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  const handleNewTask = () => {
    prepareTask();
  };

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className='w-full'
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
          Nova tarefa
        </Button>
      </section>

      <section className='space-y-2'>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
};

export default TaskList;
