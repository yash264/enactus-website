import React from "react";
import Description from "./Descriptions/Description";
import Title from "./Title";
import samveshImage from '../../assets/projects/images/samvesh.jpg';
import neerImage from '../../assets/projects/images/neer.jpg';
import moonjImage from '../../assets/projects/images/moonj.jpg';
import sahyogImage from '../../assets/projects/images/sahyog.jpg';

const Webpage = ({ Project }) => {
  const getImage = (projectName) => {
    switch (projectName) {
      case 'samvesh':
        return samveshImage;
      case 'neer':
        return neerImage;
      case 'moonj':
        return moonjImage;
      case 'sahyog':
        return sahyogImage;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className=" md:mt-6 text-zinc-900 py-1 md:py-2 px-2 md:px-8">
        <div className="max-w-8xl mx-auto">
          <Title title={Project} />
        </div>
      </div>

      <div className="flex flex-col py-1 md:py-20 md:px-16 gap-12 bg-gray-50">
        <div className="flex flex-col items-center justify-center mt-5 md:py-6 bg-white rounded-xl shadow-lg transition-all duration-500">
          <div
            className="w-full md:w-3/4 h-80 md:h-[400px] bg-zinc-800 rounded-lg flex items-center justify-center 
            text-white text-3xl font-semibold"
          >
            <img src={getImage(Project)} alt={Project} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Description Project={Project} />
        </div>
      </div>

      <div className="bg-gradient-to-t from-enactusYellow to-yellow-300 text-white text-center py-8">
        <p className="text-lg text-gray-900 font-semibold">
          Want to learn more about our projects? Stay tuned for updates and exciting stories!
        </p>
      </div>
    </div>
  );
};

export default Webpage;
