
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Hero from './pages/hero/Hero';
import Project from './pages/projects/Project';
import Services from './pages/services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
