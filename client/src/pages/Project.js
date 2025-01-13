import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5'; // Icon for Back Button
import Webpage from '../components/Projects/Webpage';

import samveshImage from '../assets/projects/images/samvesh.jpg';
import neerImage from '../assets/projects/images/neer.jpg';
import moonjImage from '../assets/projects/images/moonj.jpg';
import sahyogImage from '../assets/projects/images/sahyog.jpg';

const Project = () => {
  const [activeProject, setActiveProject] = useState('');
  const [visible, setInvisible] = useState(true);

  const handleClick = (project) => {
    setActiveProject(project);
    setInvisible(false);
  };

  const goBack = () => {
    setInvisible(true);
  };

  const projectImages = {
    samvesh: samveshImage,
    neer: neerImage,
    moonj: moonjImage,
    sahyog: sahyogImage,
  };

  const projects = ['samvesh', 'neer', 'moonj', 'sahyog'];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Back Icon (Only Visible on Single Project View) */}
      <div className="absolute md:mt-6 -mt-2 top-6 left-4 z-20">
        <button
          onClick={goBack}
          className={`flex items-center justify-center w-12 h-12 text-white rounded-full shadow-md transition-opacity duration-300 ${
            visible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Go Back"
        >
          <IoArrowBack size={24} />
        </button>
      </div>

      {/* Explore Section with Smaller Heading */}
      {visible && (
        <div className="text-center my-8 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-3">
            Explore Our Projects
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-zinc-700 font-medium">
            Dive into some of the impactful projects our team has worked on.
          </p>
        </div>
      )}

      {/* Project Tiles */}
      {visible && (
        <div className="flex justify-center items-center py-12">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                onClick={() => handleClick(project)}
                className="relative group w-56 h-40 md:w-72 md:h-48 bg-yellow-300 rounded-lg overflow-hidden hover:shadow-2xl shadow-black cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform scale-105 group-hover:scale-100"
                  style={{
                    backgroundImage: `url(${projectImages[project]})`,
                  }}
                ></div>
                <div className="relative z-10 flex justify-center text-4xl group-hover:text-5xl text-zinc-200 items-center w-full h-full bg-enactusYellow group-hover:bg-transparent transition-all duration-500">
                  <span className="font-extrabold">
                    {project.charAt(0).toUpperCase() + project.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Single Project View */}
      {!visible && <Webpage Project={activeProject} color="yellow" />}
    </div>
  );
};

export default Project;
