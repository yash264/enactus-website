import React from 'react';
import { Linkedin } from 'lucide-react';
import Member1 from "./photos/TeamMembers/Shruti Mayank.JPG";
import Member2 from "./photos/TeamMembers/AdyaSharma.jpg";
import Member3 from "./photos/TeamMembers/Ayush Aman.jpeg";
import Member4 from "./photos/TeamMembers/Himanshu Tripathi.jpeg";
import Member5 from "./photos/TeamMembers/GawthamVellore.jpg";
import Member6 from "./photos/TeamMembers/Shaurya Raj Srivastava.jpg";
import Member7 from "./photos/TeamMembers/Aniket Shah.jpg";
import logo from "./photos/TeamMembers/question_mark.jpg"
const Imagecard = ({ name, yr, url }) => {
  let imageSource;

  switch (name) {
    case 'Shruti Mayank':
      imageSource = Member1;
      break;
    case 'Adya Sharma':
      imageSource = Member2;
      break;
    case 'Ayush Aman':
      imageSource = Member3;
      break;
    case 'Himanshu Tripathi':
      imageSource = Member4;
      break;
    case 'Gawtham Vellore':
      imageSource = Member5;
      break;
      case 'Shaurya Raj Srivastava':
      imageSource = Member6;
      break;
    case 'Aniket Shah':
      imageSource = Member7;
      break;
    default:
      imageSource = logo;
  }
  return (
    <div className=" max-w-sm h-auto group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSource}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="px-6 py-2 space-y-4">
        <h3 className="font-bold text-2xl text-zinc-800 tracking-tight">
          {name}
        </h3>
        
        <div className="space-y-2">
          <p className="text-zinc-600">
            <span className="font-semibold">Batch of </span>
            <span className="text-yellow-600 font-bold">{yr}</span>
          </p>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-yellow-600 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;