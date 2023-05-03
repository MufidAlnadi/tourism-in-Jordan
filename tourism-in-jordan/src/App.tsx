
import './input.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
