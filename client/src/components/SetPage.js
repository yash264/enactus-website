import React, { useState } from 'react';
import Webpage from './ProjectPage/Webpage';

const SetPage = () => {
  const [activeProject, setActiveProject] = useState('');
  const [visible, setInvisible] = useState(true);
  const style = 'border-2 rounded-md border-black text-white bg-yellow-300 p-2 md:p-4 xl:p-10 transition ease-in-out delay-150 bg-yellow-300 hover:-translate-y-1 hover:scale-125 hover:bg-black hover:border-yellow-300 duration-300';
  const handleClick = (project) => {
    setActiveProject(project);
    setInvisible(!visible)
  };
  const goBack = () => {
    setInvisible(!visible);
  }

  const buttonStyle = {
    backgroundColor: '#FFFDE8', // Match the background color with the navbar buttons
    color: '#2C3E50', // Match the text color with the navbar buttons
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#F1C40F', // Match the hover background color with the navbar buttons
    color: '#FFFFFF', // Match the hover text color with the navbar buttons
  };

  return (
    <div className='relative' style={{ overflow: 'hidden' }}>
      {visible && <div className='flex p-32 justify-center items-center bg-gradient-to-b from-yellow-200 to-white from-20%'>
        <div className='grid gap-4 md:gap-8 xl:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-center items-center text-lg md:text-xl xl:text-2xl font-semibold'>
          <button className={style} onClick={() => handleClick('samvesh')}>Samvesh</button>
          <button className={style} onClick={() => handleClick('neer')}>Neer</button>
          <button className={style} onClick={() => handleClick('moonj')}>Moonj</button>
          <button className={style} onClick={() => handleClick('sahyog')}>Sahyog</button>
        </div>
      </div>}
      <div className='absolute rounded-tl-none rounded-lg pt-0 pb-0 p-2 m-2 z-10 text-lg bg-black opacity-50 text-white'>
      <button className='opacity-100'onClick={goBack}>Back</button>
      </div>
      {!visible && <Webpage Project={activeProject} color={'yellow'} />}
    </div>
  );
};

export default SetPage;
