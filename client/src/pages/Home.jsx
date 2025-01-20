import ImagesSlider from "../components/Home/ImagesSlider.jsx";
//import TeamCard from "../components/Homepage/TeamCard";
import  AnimatedTestimonials from "../components/Home/AnimatedTestimonials.jsx";
import React from "react";
import HeroParallax, { Header } from "../components/Home/AnimateSlider.jsx";
import { FlipWords } from "../components/Home/UI/Flip-words.jsx";

import img1 from "../assets/Home/portfolio-1.jpg";
import img2 from "../assets/Home/portfolio-2.jpg";
import img3 from "../assets/Home/portfolio-3.jpg";
import News from "../components/Home/News.jsx";
import { ProjectCarousel } from "../components/Home/ProjectCarousel.jsx";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3,img1,img2,img3];

// const products = [
//   { title: "Product 1", thumbnail: img1, link: "/product1" },
//   { title: "Product 2", thumbnail: img2, link: "/product2" },
//   { title: "Product 3", thumbnail: img3, link: "/product3" },
//   { title: "Product 4", thumbnail: img1, link: "/product4" },
//   { title: "Product 5", thumbnail: img2, link: "/product5" },
// ];

// const testimonials = [
//   {
//     src: img1,
//     name: "John Doe",
    
//     quote: "This service is amazing. Highly recommend to everyone."
//   },
//   {
//     src: img2,
//     name: "Jane Smith",
    
//     quote: "A groundbreaking solution that transformed our business."
//   },
//   {
//     src: img3,
//     name: "Alex Johnson",
    
//     quote: "Incredible results with a seamless experience."
//   }
// ];
const words = ["innovate", "lead", "impact", "transform"];

const HomePage = () => {
  const navigate = useNavigate();
const handleJoinUs = () => {
  navigate("/about");
};
  return (
  <div >
      <ImagesSlider images={images} autoplay={true} direction="up" className="h-[100vh] w-full">
        <div className="h-full z-50 flex flex-col justify-center items-center px-4">
          <div className="text-4xl md:text-7xl mx-auto font-semibold text-neutral-800 dark:text-neutral-200">
            Empower
            <FlipWords words={words} /> <br />
            with Enactus MNNIT
          </div>
          <button
            onClick={handleJoinUs}
            className="mt-6 px-4 py-2 text-lg md:text-xl text-white bg-enactusYellow hover:bg-enactusYellow/[0.7] transform transition-all duration-300 rounded-lg"
          >
            Explore
          </button>
        </div>
      </ImagesSlider>

    {/* Hero Section */}
    {/* <HeroParallax products={products} /> */}
    <ProjectCarousel/>

    {/* <div className="mt-16 mb-20 px-2 py-2">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div> */}

    <div>
      <News/>
    </div>
  </div>
)
};
export default HomePage;
