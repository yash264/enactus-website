import ImagesSlider from "../components/Homepage/ImagesSlider";
import TeamCard from "../components/Homepage/TeamCard";

import img1 from "../images/portfolio-1.jpg";
import img2 from "../images/portfolio-2.jpg";
import img3 from "../images/portfolio-3.jpg";

const images = [img1, img2, img3];

const HomePage = () => (
  <div className="h-[500px] w-full bg-[#1D1D20]">
    <ImagesSlider images={images} autoplay={true} direction="up">
      <h1
        className="absolute z-50 text-white px-6 py-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300"
        onClick={() => (window.location.href = "/about")}
      >
        Join Us
      </h1>
    </ImagesSlider>

    <div className="flex justify-center items-center mt-10 gap-5 px-4">
      <div>O</div>
      <div>U</div>
      <div>R</div>
      <br />
      <div>T</div>
      <div>E</div>
      <div>A</div>
      <div>M</div>
    </div>

    <div className="flex justify-center items-center mt-10 gap-5 px-4">
      <TeamCard title="Web Team" description="Building and maintaining our online presence." />
      <TeamCard title="Media" description="Creating captivating visuals and storytelling." />
      <TeamCard title="R&D" description="Driving innovation and solving tough problems." />
      <TeamCard title="Marketing" description="Spreading the word about our amazing work." />
    </div>
  </div>
);

export default HomePage;
