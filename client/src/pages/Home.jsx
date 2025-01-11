import ImagesSlider from "../components/Homepage/ImagesSlider.jsx";
//import TeamCard from "../components/Homepage/TeamCard";
import  AnimatedTestimonials from "../components/Homepage/AnimatedTestimonials.jsx";

import img1 from "../images/portfolio-1.jpg";
import img2 from "../images/portfolio-2.jpg";
import img3 from "../images/portfolio-3.jpg";

const images = [img1, img2, img3];

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

const Home = () => (
  <div >
    <ImagesSlider images={images} autoplay={true} direction="up" className="h-[500px] w-full " >
      <h1
        className="absolute z-50 text-white px-6 py-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300"
        onClick={() => (window.location.href = "/about")}
      >
        Join Us
      </h1>
    </ImagesSlider>

    <div className="mt-16 mb-20 px-2 py-2">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  </div>
);

export default Home;
