import React from 'react';
import Member1 from "./photos/TeamMembers/Shruti Mayank.JPG";
import Member2 from "./photos/TeamMembers/AdyaSharma.jpg";
import Member3 from "./photos/TeamMembers/Ayush Aman.jpeg";
import Member4 from "./photos/TeamMembers/Himanshu Tripathi.jpeg";
import Member5 from "./photos/TeamMembers/GawthamVellore.jpg";
import Member6 from "./photos/TeamMembers/Shaurya Raj Srivastava.jpg";
import Member7 from "./photos/TeamMembers/Aniket Shah.jpg";
import logo from "./photos/TeamMembers/question_mark.jpg"

const Imagecard = (data) => {
  let imageSource;

  switch (data.name) {
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center hover:cursor-pointer hover:shadow-2xl hover:bg-slate-200">
      <img src={imageSource} alt={data.name} className="w-full sm:h-96" />
      <div className="font-bold text-red-900 text-3xl">{data.name}</div>
      <ul>
        <li>
          <strong>Batch Of:</strong> {data.yr}
        </li>
        <li>
  {/* <strong>LinkedIn:</strong>{""} */}
  <a
  href={data.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    fontWeight: 'bold',
    color: 'blue', // Change color as needed
    textDecoration: 'none', // Remove underline
    transition: 'color 0.3s ease', // Smooth transition effect for color change
  }}
  onMouseEnter={(e) => { e.target.style.color = 'red'; }} // Change color on hover
  onMouseLeave={(e) => { e.target.style.color = 'blue'; }} // Revert color on mouse leave
>
  LinkedIn
</a>
</li>
      </ul>
    </div>
  );
};

export default Imagecard;
