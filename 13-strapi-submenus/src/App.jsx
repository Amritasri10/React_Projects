import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default App;
