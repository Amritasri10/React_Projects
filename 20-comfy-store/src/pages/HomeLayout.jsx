import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Loader } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loader />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default HomeLayout;
