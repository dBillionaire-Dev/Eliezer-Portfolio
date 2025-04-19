import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandIdentity from './pages/BrandIdentity';
import Business from './pages/Business';
import Poster from './pages/Poster';
import Project from './pages/Project';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css'

function App() {
  return (
    <>
      <Router>
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/project" element={<Project />} />
          <Route path="/brand-identity" element={<BrandIdentity />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
