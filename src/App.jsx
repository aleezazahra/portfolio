import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Notfound from './pages/Notfound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
   
    </BrowserRouter>
  );
}

export default App;