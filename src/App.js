import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Portfolio />
      <a
      href="#hero"
      className="back-to-top d-flex align-items-center justify-content-center"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
    </>
  );
}

export default App;
