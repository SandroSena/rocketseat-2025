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

const TaskItem = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const exitEditTask = () => {
    setIsEditing(false);
  };

  return (
    <Card size='md' className='flex items-center gap-4'>
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className='flex-1'>🛒 Fazer compras da semana</Text>
          <div className='flex gap-1'>
            <ButtonIcon icon={TrashIcon} variant='tertiary' />
            <ButtonIcon
              icon={PencilIcon}
              variant='tertiary'
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className='flex-1' />
          <div className='flex gap-1'>
            <ButtonIcon
              icon={XIcon}
              variant='secondary'
              onClick={exitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant='primary' />
          </div>
        </>
      )}
    </Card>
  );
};

export default TaskItem;
