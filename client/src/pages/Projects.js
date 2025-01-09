import React, { useState } from 'react';
import Webpage from '../components/ProjectPage/Webpage';

import samveshImage from '../assets/projects/images/samvesh.jpg';
import neerImage from '../assets/projects/images/neer.jpg';
import moonjImage from '../assets/projects/images/moonj.jpg';
import sahyogImage from '../assets/projects/images/sahyog.jpg';

const Projects = () => {
  const [activeProject, setActiveProject] = useState('');
  const [visible, setInvisible] = useState(true);

  const handleClick = (project) => {
    setActiveProject(project);
    setInvisible(!visible);
  };

  const goBack = () => {
    setInvisible(!visible);
  };

  const projectImages = {
    samvesh: samveshImage,
    neer: neerImage,
    moonj: moonjImage,
    sahyog: sahyogImage,
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="text-center my-16 px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-6">
          Explore Our Projects
        </h1>
        <p className="text-lg md:text-2xl text-zinc-700 font-medium">
          Dive into some of the impactful projects our team has worked on
        </p>
      </div>

      {visible && (
        <div className="flex justify-center items-center  py-20">
          <div className="grid gap-6 md:gap-10 xl:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-center items-center text-lg md:text-xl xl:text-2xl font-semibold">
            {['samvesh', 'neer', 'moonj', 'sahyog'].map((project) => (
              <div
                key={project}
                onClick={() => handleClick(project)}
                className="relative z- group w-64 h-44 md:w-80 md:h-56 bg-yellow-300 rounded-lg overflow-hidden hover:shadow-2xl shadow-black  cursor-pointer"
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 transform scale-105 group-hover:scale-100"
                  style={{
                    backgroundImage: `url(${projectImages[project]})`,
                  }}
                ></div>

                <div className="relative z-10 flex justify-center text-5xl group-hover:text-6xl text-zinc-200 items-center w-full h-full bg-enactusYellow group-hover:bg-transparent transition-all duration-500 ">
                  <span className="font-extrabold">{project.charAt(0).toUpperCase() + project.slice(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="absolute top-6 left-4 z-10">
        <button
          onClick={goBack}
          className="bg-black text-white px-4 py-2 rounded-md opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          Back
        </button>
      </div>

      {!visible && <Webpage Project={activeProject} color="yellow" />}
    </div>
  );
};

export default Projects;
