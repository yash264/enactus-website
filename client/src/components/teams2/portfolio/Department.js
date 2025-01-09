import React from 'react';

const Department = ( props) => {
  return (
    <div className="bg-zinc-900 py-5 relative overflow-hidden">
    <div className="absolute inset-0 bg-yellow-600/10" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_#18181B)]" />
    
    <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          {props.tag}
          </h1>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mt-8 rounded-full" />
      </div>
    </div>
  );
};

export default Department;