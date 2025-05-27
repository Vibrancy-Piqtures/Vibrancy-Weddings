import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Videos from './Pages/Videos';
import About from './Pages/AboutUs';
import Contact from './Pages/ContactUs';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;


