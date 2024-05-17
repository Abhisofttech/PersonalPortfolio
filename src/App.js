
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Hero from './pages/hero/Hero';
import Project from './pages/projects/Project';
import Services from './pages/services/Services';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/skill' element={<About/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
