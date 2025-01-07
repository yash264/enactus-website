// src/Gallery.js
import React from 'react';
import './tailwind.css';
import './index.css';

const Gallery = ({ title,id}) => {
    
    const importAllImages = (context) => context.keys().map(context);
    var imagesContext;
    if(id==1){
        imagesContext= require.context(`./Images/Sahyog1/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==2){
        imagesContext= require.context(`./Images/Sahyog2/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==3){
        imagesContext= require.context(`./Images/Samvesh1/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==4){
        imagesContext= require.context(`./Images/Samvesh2/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==5){
        imagesContext= require.context(`./Images/Samvesh3/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==6){
        imagesContext= require.context(`./Images/Moonj/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==7){
        imagesContext= require.context(`./Images/Neer1/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==8){
        imagesContext= require.context(`./Images/Neer2/`, false, /\.(png|jpe?g|svg)$/);
    }
    if(id==9){
        imagesContext= require.context(`./Images/Alumni_meet/`, false, /\.(png|jpe?g|svg)$/);
    }
    const images = importAllImages(imagesContext);
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex flex-col items-center max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-10 ml-13 underline">{title}</h1>
      <div className="-m-4 flex flex-wrap md:-m-5">
        {images.map((image, index) => (
          <div key={index} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt={`Image ${index + 1}`}
                className="block h-60 w-full rounded-lg object-cover object-center "
                src={image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
