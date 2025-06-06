import Container from './container';
import Logo from '../assets/images/logo.svg?react';

const Header = () => {
  return (
    <Container as='header' className='mt-3 md:mt-20'>
      <Logo className='h-9 md:h-12' />
    </Container>
  );
};

export default Header;
