import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </Wrapper>
  );
};
export default SharedLayout;
