import React from 'react';
import Footer from './components/footer';
import Carousel from './components/carouselbootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './pages/About';
import Selection from './components/teams2/Selection';
import Marketing from './components/teams2/portfolio/Marketing';
import Web from './components/teams2/portfolio/Web';
import Field from './components/teams2/portfolio/Field';
import Design from './components/teams2/portfolio/Design';
import Content from './components/teams2/portfolio/Content';
import Reserch from './components/teams2/portfolio/Reserch';
import Project from './pages/Project';
import ECart from './components/Ecart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className='bg-background' style={{ paddingTop: '95px' }}> {/* Adjust the value according to your navbar height */}
        {location.pathname === '/' && <Home />}
        <Routes>
          <Route path='/blog' Component={Carousel} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/project' Component={Project} />
          <Route path='/team' Component={Selection} />
          <Route path='/marketingAndSponcership' element={<Marketing />} />
          <Route path='/webTeam' element={<Web />} />
          <Route path='/reserchAndDevelopment' element={<Reserch />} />
          <Route path='/fieldOfficer' element={<Field />} />
          <Route path='/contentDepartment' element={<Content />} />
          <Route path='/designDepartment' element={<Design />} />
          <Route path='/ecart' element={<ECart />} />
          {/* <Route path='/contact' Component={Teams} /> */}
          {/* <Route path='/gallery' Component={Gallery} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
