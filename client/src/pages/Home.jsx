import ImagesSlider from "../components/Home/ImagesSlider.jsx";
//import TeamCard from "../components/Homepage/TeamCard";
import  AnimatedTestimonials from "../components/Home/AnimatedTestimonials.jsx";
import React from "react";
import HeroParallax, { Header } from "../components/Home/AnimateSlider.jsx";

import img1 from "../assets/Home/portfolio-1.jpg";
import img2 from "../assets/Home/portfolio-2.jpg";
import img3 from "../assets/Home/portfolio-3.jpg";
import News from "../components/Home/News.jsx";

const images = [img1, img2, img3];

const products = [
  { title: "Product 1", thumbnail: img1, link: "/product1" },
  { title: "Product 2", thumbnail: img2, link: "/product2" },
  { title: "Product 3", thumbnail: img3, link: "/product3" },
  { title: "Product 4", thumbnail: img1, link: "/product4" },
  { title: "Product 5", thumbnail: img2, link: "/product5" },
];

const testimonials = [
  {
    src: img1,
    name: "John Doe",
    
    quote: "This service is amazing. Highly recommend to everyone."
  },
  {
    src: img2,
    name: "Jane Smith",
    
    quote: "A groundbreaking solution that transformed our business."
  },
  {
    src: img3,
    name: "Alex Johnson",
    
    quote: "Incredible results with a seamless experience."
  }
];

const HomePage = () => (
  <div >
    <ImagesSlider images={images} autoplay={true} direction="up" className="h-[500px] w-full " >
      <h1
        className="absolute z-50 text-white px-6 py-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300"
        onClick={() => (window.location.href = "/about")}
      >
        Join Us
      </h1>
    </ImagesSlider>

    {/* Hero Section */}
    <HeroParallax products={products} />

    <div className="mt-16 mb-20 px-2 py-2">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>

    <div>
      <News/>
    </div>
  </div>
);

export default HomePage;
