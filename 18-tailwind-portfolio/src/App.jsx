import { Navbar, Hero, Skills, About, Projects } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
}

export default App;
