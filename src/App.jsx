import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import { BrandIdentity } from './pages/BrandIdentity';
// import { Business } from './pages/Business';
// import { Poster } from './pages/Poster';
import Project from './pages/Project';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/brandIdentity" element={<BrandIdentity />} /> */}
          {/* <Route path="/business" element={<Business />} />
          <Route path="/poster" element={<Poster />} /> */}
          {/* <Route path="/project" element={<Project />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/content" element={<Content className="flex-row" />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
