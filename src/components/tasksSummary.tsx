import useTasks from '../hooks/useTasks';
import Badge from './badge';
import Text from './text';

const TaskSummary = () => {
  const { createdtasksCount, concludedTasksCount } = useTasks();
  return (
    <>
      <div className='flex items-center gap-2'>
        <Text variant='body-sm-bold' className='!text-gray-300'>
          Tarefas criadas
        </Text>
        <Badge variant='secondary'>{createdtasksCount}</Badge>
      </div>

      <div className='flex items-center gap-2'>
        <Text variant='body-sm-bold' className='!text-gray-300'>
          Concluídas
        </Text>
        <Badge variant='primary'>
          {concludedTasksCount} de {createdtasksCount}
        </Badge>
      </div>
    </>
  );
};

export default TaskSummary;
