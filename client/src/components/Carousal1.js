import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import img1 from "../images/portfolio-1.jpg"
import img2 from "../images/portfolio-2.jpg"
import img3 from "../images/portfolio-3.jpg"

export default function Carousal1() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={img1} className='d-block w-100 'style={{ height: '700px', objectFit: 'cover'}} alt='...' />
        <MDBCarouselCaption>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>First slide label</h2>
          <h5 style={{ fontSize: '1.5rem', color: '#fff' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={img2} className='d-block w-100'style={{ height: '700px', objectFit: 'cover' }} alt='...' />
        <MDBCarouselCaption>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>Second slide label</h2>
          <h5 style={{ fontSize: '1.5rem', color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={img3} className='d-block w-100' style={{ height: '700px', objectFit: 'cover' }} alt='...' />
        <MDBCarouselCaption>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>Third slide label</h2>
          <h5 style={{ fontSize: '1.5rem', color: '#fff' }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}