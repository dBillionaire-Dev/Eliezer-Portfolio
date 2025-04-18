import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css'

function App() {
  return (
    <Router>
      <Header />
      <BackToTop />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} /> */}
      </Routes>
      <Hero />
      <Content className="flex-row" />
      <Services />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
