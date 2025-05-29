import Text from './components/text';
import Icon from './components/icon';
import TrashIcon from './assets/icons/trash.svg?react';
import CheckIcon from './assets/icons/check.svg?react';
import PencilIcon from './assets/icons/pecil.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import XIcon from './assets/icons/x.svg?react';


function App() {
  return (
    <div className='flex flex-col gap-3'>
      <Text variant='body-sm-bold' className='text-pink-base'>
        Olá Mundo!
      </Text>
      <Text variant='body-md' className='text-green-dark'>
        Olá Mundo 2 !
      </Text>
      <Text variant='body-md-bold' className='text-gray-400'>
        Olá Mundo 3!
      </Text>

      <div className='flex gap-1'>
        <Icon svg={TrashIcon} className='fill-pink-base' />
        <Icon svg={CheckIcon} className='fill-pink-base' />
        <Icon svg={PencilIcon} className='fill-pink-base' />
        <Icon svg={SpinnerIcon} className='fill-pink-base' animate />
        <Icon svg={XIcon} className='fill-pink-base' />
      </div>
    </div>
  );
}

export default App;
