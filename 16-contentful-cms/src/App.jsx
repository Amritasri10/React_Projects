import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <Projects />
      </main>
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default App;
