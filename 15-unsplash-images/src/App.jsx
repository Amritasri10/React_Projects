import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <>
      <main>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
      <footer className='dev-footer'>
        <p>Developed by <span>Amrita Srivastava</span></p>
      </footer>
    </>
  );
};
export default App;
