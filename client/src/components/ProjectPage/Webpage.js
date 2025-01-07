import React from 'react';
import Description from './Descriptions/Description';
import ImageSlider from './ImageSlider';
import Title from './Title';

const Webpage = ({ Project }) => {
  return (
    <div className=''>
      <div className='flex'>
        <div className='max-h-content border-8' style={{ flexGrow: 1 }}>
          <div className="p-4">
            <Title title={Project} />
          </div>
          <div className='p-4 bg-gradient-to-b from-white to-gray-300'>
            <Description Project={Project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage;
