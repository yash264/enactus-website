import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from './Page';

const PrevArrow = (props) => (
  <div className="slick-arrow slick-prev" onClick={props.onClick}>
    Previous
  </div>
);

const NextArrow = (props) => (
  <div className="slick-arrow slick-next" onClick={props.onClick}>
    Next
  </div>
);

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true, 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <Gallery title="Project-Sahyog" id="1"/>
      </div>
      <div>
        <Gallery title="Project-Sahyog" id="2"/>
      </div>
      <div>
        <Gallery title="Project-Samvesh" id="3"/>
      </div>
      <div>
        <Gallery title="Project-Samvesh" id="4"/>
      </div>
      <div>
        <Gallery title="Project-Samvesh" id="5"/>
      </div>
      <div>
        <Gallery title="Project-Moonj" id="6"/>
      </div>
      <div>
        <Gallery title="Project-Neer" id="7"/>
      </div>
      <div>
        <Gallery title="Project-Neer" id="8"/>
      </div>
      <div>
        <Gallery title="Alumni-Meet" id="9"/>
      </div>
    </Slider>
  );
};

export default SliderComponent;
