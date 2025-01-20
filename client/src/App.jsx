import React from 'react';
import Footer from './components/General/Footer';
// import Carousel from './components/carouselbootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './pages/About';
import Selection from './pages/Selection';
import Marketing from './pages/Teams/Marketing';
import Web from './pages/Teams/Web';
import Field from './pages/Teams/Field';
import Design from './pages/Teams/Design';
import Content from './pages/Teams/Content';
import Reserch from './pages/Teams/Reserch';
import Project from './pages/Project';
import ECart from './pages/Ecart';
import Navbar from './components/General/Navbar';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className='bg-background' style={{ paddingTop: '60px' }}> {/* Adjust the value according to your navbar height */}
        {location.pathname === '/' && <Home />}
        <Routes>
          {/* <Route path='/blog' Component={Carousel} /> */}
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
