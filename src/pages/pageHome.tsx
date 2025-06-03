import Container from '../components/container';
import TaskList from '../components/taskList';
import TaskSummary from '../components/tasksSummary';

const pageHome = () => {
  return (
    <Container as='article' className='space-y-3'>
      <header className='flex items-center justify-between'>
        <TaskSummary />
      </header>

      <TaskList />
    </Container>
  );
};

export default pageHome;
