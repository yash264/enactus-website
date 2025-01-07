import React from 'react';
import TeamMember from './TeamMember';
import pic1 from './images/alumini/prajjwalSomvanshi.jpg';
import pic2 from './images/alumini/rashmiGupta.jpg';
import pic3 from './images/alumini/nabanitaBag.jpg';
import pic4 from './images/alumini/kunal.jpeg';
import pic5 from './images/alumini/PragyanVarshney.jpg';
import pic6 from './images/alumini/RahulParihar.jpg';
import pic7 from './images/alumini/GawthamVellore.jpg';
import pic8 from './images/alumini/JigeshaYadav.jpg';
import pic9 from './images/alumini/PrernaAgrawal.jpeg';
import pic10 from './images/alumini/BhuvanPurohit.jpeg';
import pic11 from './images/alumini/ShriyaSingh.jpg';
import pic12 from './images/alumini/SnigdhaSharma.jpg';
import pic13 from './images/alumini/NeetuAgrawal.jpeg';
import pic14 from './images/alumini/ManavDivyeshShah.jpg';
import pic15 from './images/alumini/PrajwalSingh.jpg';
import pic16 from './images/alumini/MihirLaddha.jpeg';
import pic17 from './images/alumini/AdyaSharma.jpg';
import pic18 from './images/alumini/SonalDev.jpg';
//import pic19 from './images/alumini/ManavDivyeshShah.jpg';

const Alumini = () => {
    const members = [
        { name: 'Prajjwal Somvanshi', position: 'Alumnus', image: pic1 },
        { name: 'Rashmi Gupta', position: 'Alumna', image: pic2 },
        { name: 'Nabanita Bag', position: 'Alumna', image: pic3 },
        { name: 'Kunal Jain', position: 'Alumnus', image: pic4 },
        { name: 'Pragyan Varshney', position: 'Alumnus', image: pic5 },
        { name: 'Rahul Parihar', position: 'Alumnus', image: pic6 },
        { name: 'Gawtham Vellore', position: 'Alumnus ', image: pic7 },
        { name: 'Jigesha Yadav', position: 'Alumna ', image: pic8 },
        { name: 'Prerna Agrawal', position: 'Alumna ', image: pic9 },
        { name: 'Bhuvan Purohit', position: 'Alumnus ', image: pic10 },
        { name: 'Shriya Singh', position: 'Alumna ', image: pic11 },
        { name: 'Snigdha Sharma', position: 'Alumna ', image: pic12 },
        { name: 'Neetu Agrawal', position: 'Alumna ', image: pic13 },
        { name: 'Manav Divyesh Shah', position: 'Alumnus ', image: pic14 },
        { name: 'Prajwal Singh', position: 'Alumnus ', image: pic15 },
        { name: 'Mihir Laddha', position: 'Alumnus ', image: pic16 },
        { name: 'Adya Sharma', position: 'Alumna ', image: pic17 },
        { name: 'Sonal Dev', position: 'Alumna ', image: pic18 }
    ];
    return (
        <div className='px-4 mx-8 sm:px-2 md:px-4 lg:px-8 xl:px-8'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 content-around">
            {members.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                />
            ))}
        </div>
        </div>
    )
}

export default Alumini
