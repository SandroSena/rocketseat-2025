import { Outlet } from 'react-router';
import Header from '../components/header';
import MainContent from '../components/mainContent';
import Footer from '../components/footer';

const LayoutMain = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer /> 
    </>
  );
};

export default LayoutMain;
