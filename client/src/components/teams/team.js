import React, { useState } from 'react';
import Department from './Department';
import './team.css';
import Alumini from './Alumini';

const Teams = () => {
  const [showDepartment, setShowDepartment] = useState(true);
  const [showAlumni, setShowAlumni] = useState(false);

  const showPresentMembers = () => {
    setShowDepartment(true);
    setShowAlumni(false);
  };

  const showAlumniMembers = () => {
    setShowDepartment(false);
    setShowAlumni(true);
  };

  return (
    <div className="bg-gradient-to-b from-white to-yellow-200 py-8  ">
      <div className='py-6'>
        <div className="flex flex-col items-center bg-slate-900">
          <div className='min-h-40 flex items-center justify-center'>
            <h1 className="text-4xl font-extrabold text-yellow-400">Our Enactus Crew!</h1></div>
        </div>
        <h3 className='font-dark text-gray-500 text-center my-2 px-4 md:mx-8 lg:mx-16 xl:mx-24 text-sm sm:text-xs md:text-base lg:text-base' >Get to Know the Faces Behind Social Change. Explore their Stories, Motivations, and Contributions to Progress.</h3>
        <div className="text-center bottom-5">
          <span className="mr-4 cursor-pointer underline decoration-yellow-400 decoration-2 hover:decoration-4" onClick={showPresentMembers}>Present Members</span>
          <span className="border-l border-yellow-400 pl-4 pr-2 cursor-pointer underline decoration-yellow-400 decoration-2 hover:decoration-4" onClick={showAlumniMembers}>Alumni Members</span>
        </div>
      </div>

      {showDepartment && !showAlumni && (
        <>
          <Department dept="web" />
          <Department dept="content" />
          <Department dept="field" />
          <Department dept="rd" />
          <Department dept="market" />
        </>
      )}

      {showAlumni && !showDepartment && (
        <Alumini />
      )}
    </div>
  );
};

export default Teams;
