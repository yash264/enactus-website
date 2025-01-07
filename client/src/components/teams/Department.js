import React from 'react';
import TeamMember from './TeamMember';

import web1 from './images/Shruti Mayank.JPG';
import web2 from './images/Himanshu Tripathi.jpeg';
//import web3 from './images/Shaurya Raj Srivastava.jpg';
import web4 from './images/Aniket Shah.jpg';
import content1 from './images/Shruti Mokhashi.jpeg';
import content2 from './images/Shruti Tripathi.jpeg';
import field1 from './images/Shaksham Shukla.jpeg';
import rd1 from './images/Prachi Kesarwani.jpeg';
import ms1 from './images/Ayush Gupta.jpeg';



const Department = (props) => {

  const departments = {
    web: {
      deptname: 'Web Team',
      members: [
        { name: 'Shruti Mayank', position: 'Final Year', image: web1 },
        { name: 'Himanshu Tripathi', position: 'Final Year', image: web2 },
        { name: 'Shaurya Raj Srivastava', position: 'Final Year', image: web2 },
        { name: 'Aniket Shah', position: 'Final Year', image: web4 },
        { name: 'Ayush Agrawal', position: 'Final Year', image: web4 }
      ]
    },
    content: {
      deptname: 'Content Team',
      members: [
        { name: 'Shruti Mokhashi', position: 'Final Year', image: content1 },
        { name: 'Shruti Tripathi', position: 'Final Year', image: content2 }
      ]
    },
    field: {
      deptname: 'Field Officer Team',
      members: [
        { name: 'Shaksham Shukla', position: 'Final Year', image: field1 },
        { name: 'Shaksham Shukla', position: 'Final Year', image: field1 }
      ]
    },
    rd: {
      deptname: 'Research & Development Team',
      members: [
        { name: 'Prachi Kesarwani', position: 'Final Year', image: rd1 },
        { name: 'Prachi Kesarwani', position: 'Final Year', image: rd1 }
      ]
    },
    market: {
      deptname: 'Marketing and Sponsorship Team',
      members: [
        { name: 'Ayush Gupta', position: 'Final Year', image: ms1 },
        { name: 'Ayush Gupta', position: 'Final Year', image: ms1 }
      ]
    },
  };

  const department = departments[props.dept];

  return (
    <div className='px-4 mx-8 sm:px-2 md:px-4 lg:px-8 xl:px-12'>
      <p className="font-dark text-darkgray text-lg md:text-xl">{department.deptname}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 content-around">
         {department.members.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
