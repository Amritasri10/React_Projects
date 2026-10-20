import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default App;
