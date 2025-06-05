import ButtonIcon from './buttonIcon';
import Card from './card';
import InputCheckbox from './inputCheckbox';
import Text from './text';
import TrashIcon from '../assets/icons/trash.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import { useState } from 'react';
import InputText from './inputText';
import { Task, TaskState } from '../models/task';
import { cx } from 'class-variance-authority';
import useTask from '../hooks/useTask';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating
  );
  const [taskTitle, setTaskTitle] = useState(task.title || '');
  
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleExitEditTask = () => {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }
    setIsEditing(false);
  };

  const handleChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value || '');
  };

  const handleSaveTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ id: task.id, title: taskTitle });

    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <Card size='md'>
      {!isEditing ? (
        <div className='flex items-center gap-4'>
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx('flex-1', {
              'line-through': task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className='flex gap-1'>
            <ButtonIcon
              icon={TrashIcon}
              variant='tertiary'
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant='tertiary'
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className='flex items-center gap-4'>
          <InputText
            value={taskTitle}
            className='flex-1'
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className='flex gap-1'>
            <ButtonIcon
              type='button'
              icon={XIcon}
              variant='secondary'
              onClick={handleExitEditTask}
            />
            <ButtonIcon type='submit' icon={CheckIcon} variant='primary' />
          </div>
        </form>
      )}
    </Card>
  );
};

export default TaskItem;
