import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { FaRegEnvelope } from 'react-icons/fa';
import enactusLogo from '../assets/enactusNavbarLogo.png';

const Footer = () => {
  return (
    <>
      <footer id="contact-us" className="font-montserrat mt-[80px] bg-blue-400 py-10 md:py-16 rounded-t-[100px]">
        <div className="container mx-auto md:flex md:flex-col md:justify-center">
          <div className="flex justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black-500">CONTACT US</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-5 text-left">
            <div className="flex flex-col w-full md:w-1/2 md:p-0 py-4 gap-8 md:text-center md:ml-0 md:mr-8">
              <img
                src={enactusLogo}
                alt="Enactus Logo"
                className="w-48 md:w-64 mx-auto"
              />
              <p className="text-lg md:text-xl font-semibold text-black mx-auto">
                Follow us on social media{' '}
                <span className="md:hidden">We need your support!</span>
              </p>
              <div className="flex gap-4 md:gap-7 text-base md:text-lg text-[#646464] justify-center md:items-center mx-auto mt-4">
                <a
                  href="https://www.facebook.com/enactusmnnit/"
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:text-3xl hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaFacebookF  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCA4d5xXy13G5iOslOG6AjXA"
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:text-3xl hover:bg-black hover:text-white transition-all duration-300"
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="https://www.instagram.com/enactus_mnnit/"
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:text-3xl hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:relative md:ml-0 md:mt-14 text-center md:text-left w-full md:w-1/2">
              <div className="text-base md:text-lg font-bold">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <SlLocationPin className="mt-1" />
                  <div>
                    Motilal Nehru National Institute of Technology
                    <br />
                    Teliarganj, Allahabad
                    <br />
                    Uttar Pradesh (211004), India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-left">
                <FaRegEnvelope className="mt-1" />
                <a
                  href="mailto:enactusmnnitallahabad@gmail.com"
                  className="text-base md:text-lg font-bold"
                >
                  enactusmnnitallahabad@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 justify-left">
                <CiPhone />
                <div className="text-base md:text-lg font-bold">+91 8340556926</div>
              </div>

            </div>
          </div>    

        </div>
      </footer>

      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-center py-8">
        <p className="text-lg text-white font-semibold ">
          &copy;
          Enactus MNNIT-Allahabad
        </p>
      </div>
    </>
  );
};

export default Footer;