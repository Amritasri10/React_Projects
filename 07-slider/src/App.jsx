import Carousel from './components/Carousel';
import SlickCarousel from './components/SlickCarousel';

const App = () => {
  return (
    <>
      <main>
        {/* <Carousel /> */}
        <SlickCarousel />
      </main>
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default App;
