import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/inputCheckbox";
import InputText from "../components/inputText";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from '../assets/icons/trash.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';
import PlusIcon from '../assets/icons/plus.svg?react';
import XIcon from '../assets/icons/x.svg?react';

const PageComponents = () => {
  return (
    <Container>
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
          {/* <Icon svg={TrashIcon} className='fill-pink-base' /> */}
          <Icon svg={CheckIcon} className='fill-pink-base' />
          <Icon svg={PencilIcon} className='fill-pink-base' />
          <Icon svg={SpinnerIcon} className='fill-pink-base' animate />
          <Icon svg={XIcon} className='fill-pink-base' />
        </div>

        <div className='flex gap-1'>
          <Badge variant='secondary'>5</Badge>
          <Badge variant='primary'>2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className='flex gap-1'>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant='secondary' />
          <ButtonIcon icon={TrashIcon} variant='tertiary' />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size='md'>Olá Mundo</Card>
        </div>

        <div className='space-y-2'>
          <Skeleton className='h-6' />
          <Skeleton className='h-6' />
          <Skeleton className='h-5 w-96' />
        </div>
      </div>
    </Container>
  );
};

export default PageComponents;

