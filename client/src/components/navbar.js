import React, { useState } from 'react';
import enactusNavbarLogo from '../assets/enactusNavbarLogo.png';

const Nav = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Projects', link: '/project' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Team', link: '/team' },
    { name: 'Contact Us', link: '/' },
    { name: 'E Cart', link: '/ecart' },
    { name: 'Enactus Worldwide', link: 'https://enactus.org/' },
  ];
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById('contact-us');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`shadow-md w-full bg-zinc-700 fixed top-0 left-0 z-10 font-montserrat ${
        open ? 'open' : ''
      }`}
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-1xl cursor-pointer flex items-center font-[Poppins] text-white">
          <img src={enactusNavbarLogo} className="w-38 h-12 mt-2 md:mt-0" alt="Enactus Logo" />
        </div>
        <div onClick={handleToggle} className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:flex-col md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 md:space-x-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          } ${open ? 'bg-zinc-500' : ''}`}
        >
          <div className="w-11/12 flex flex-col md:flex-row md:justify-end">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:text-ml md:my-0 my-2 text-black text-[15px] font-mono md:mx-0 mx-3 flex justify-center"
              >
                {link.name === 'Contact Us' ? (
                  <button
                    onClick={handleScrollToFooter}
                    className="py-[10px] relative rounded-full flex h-[40px] md:w-[100px] w-[80px] items-center justify-center overflow-hidden bg-white-100 text-white shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-600 before:duration-500 before:ease-out hover:shadow-yellow-600 hover:before:h-56 hover:before:w-56"
                  >
                    <span className="relative z-10">{link.name}</span>
                  </button>
                ) : (
                  <a
                    href={link.link}
                    target={link.name === 'Enactus Worldwide' ? '_blank' : '_self'}
                    rel={link.name === 'Enactus Worldwide' ? 'noopener noreferrer' : ''}
                  >
                    <button className="py-[10px] relative rounded-full flex h-[40px] md:w-[100px] w-[80px] items-center justify-center overflow-hidden bg-white-100 text-white shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-600 before:duration-500 before:ease-out hover:shadow-yellow-600 hover:before:h-56 hover:before:w-56">
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  </a>
                )}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
