import React from 'react';
import Imagecard from "../Imagecard";

const Template = ({ name, yr, url }) => {
 
    const safeUrl = Array.isArray(url) ? url : new Array(name.length).fill('/'); // Default to `/` if url is not provided

  return (
    <div className="py-5">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {name.map((memberName, index) => (
          <div 
            key={index}
            className="transform transition-all duration-300"
          >
            <Imagecard
              name={memberName}
              yr={yr[index]}
              url={safeUrl[index]}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Template;


