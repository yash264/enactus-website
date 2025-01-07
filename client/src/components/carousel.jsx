import React, { useState, useEffect } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Carousal2() {
  const [carouselimagedata, setCarouselImageData] = useState([]);

  useEffect(() => {
    let PROJECT_ID = "la7e5sle";
    let DATASET = "production";
    let QUERY = encodeURIComponent('*[_type == "blog"]');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data received from the API:', data);
        // Check if data.result is an array before using map
        if (Array.isArray(data.result)) {
          setCarouselImageData(data.result);
        } else {
          console.error('Data received from the API does not contain an array of carousel images.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log('Carousel image data:', carouselimagedata);

  return (
    <MDBCarousel showIndicators showControls fade>
      {carouselimagedata.map((item, index) => (
        <MDBCarouselItem key={index} itemId={index + 1}>
          <img src={item.imageUrl} className='d-block w-100' style={{ height: '700px', objectFit: 'cover' }} alt={`Carousel Image ${index + 1}`} />
          <MDBCarouselCaption>
            <h2 style={{ fontSize: '2rem', color: '#fff' }}>{item.title}</h2>
            <h5 style={{ fontSize: '1.5rem', color: '#fff' }}>{item.caption}</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      ))}
    </MDBCarousel>
  );
}