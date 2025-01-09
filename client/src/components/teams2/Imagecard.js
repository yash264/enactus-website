import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Calendar } from 'lucide-react';
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
    <motion.div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSource}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-2xl text-zinc-800 tracking-tight mb-4">
          {name}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-zinc-600">
            <Calendar className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Batch of</span>
            <span className="font-semibold text-yellow-600">{yr}</span>
          </div>
          
          <div className="flex gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
              href={`mailto:${name.toLowerCase().replace(' ', '.')}@example.com`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-yellow-600 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Imagecard;