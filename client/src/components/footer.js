import React from "react";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import enactusLogo from '../assets/enactusNavbarLogo.png';
import { BsArrowUpCircleFill } from "react-icons/bs";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <footer className="relative bg-blueGray-200 pt-8 bg-black opacity-75 text-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">

            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Don't limit your challenges, challenge your limit.
            </h5>

            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter className="fab fa-twitter hover:text-4xl" />
              </button>
              <button
                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebookF className="fab fa-facebook-square hover:text-4xl" />
              </button>
              <button
                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram className="fab fa-dribbble hover:text-4xl" />
              </button>
              <button
                className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <AiFillYoutube className="fab fa-github hover:text-4xl" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 ">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-6/12 px-4 ml-auto">

                <h3 className="text-2xl mb-6 font-bold text-black-500">CONTACT US</h3>

                <ul className="list-styled text-xs">
                  <li>
                    <p class="flex items-center gap-2 justify-left m-2" >
                      <SlLocationPin className="mt-1 text-sm" />
                      Motilal Nehru National Institute of Technology
                      <br />
                      Teliarganj, Allahabad
                      <br />
                      Uttar Pradesh (211004), India
                    </p>
                  </li>
                  <li>
                    <a href="mailto:enactusmnnitallahabad@gmail.com" class="flex items-center gap-2 justify-left m-2 " >
                      <FaRegEnvelope className="mt-1" />
                      enactusmnnitallahabad@gmail.com
                    </a>
                  </li>
                  <li>
                    <p class="flex items-center gap-2 justify-left m-2 " >
                      <CiPhone className="mt-1" />
                      +91 8340556926</p>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-6/12 ">
                <img
                  src={enactusLogo}
                  alt="Enactus Logo"
                  className="w-36 md:w-44 justify-left mx-auto"
                />
                <ul className="list-styled text-xs p-2">
                  <li>
                    <p className="m-2" > <span style={{ color: "yellow" }} >En</span>trepreneurial - igniting business innovation with integrity and passion.</p>
                  </li>
                  <li>
                    <p className="m-2"> <span style={{ color: "yellow" }} >Act</span>ion - the experience of social impact that sparks social enterprise.</p>
                  </li>
                  <li>
                    <p className="m-2"> <span style={{ color: "yellow" }} >Us</span> - student, academic and business leaders collaborating to create a better world.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <button className="scroll-to-top text-4xl text-red-600 hover:text-blue-400 bg-black-400 fixed"
          style={{
            bottom: "20px", /* Distance from the bottom of the viewport */
            left: "20px", /* Distance from the right of the viewport */
          }} 
          onClick={scrollToTop} >
          <BsArrowUpCircleFill />
        </button>

      <div className="flex flex-wrap items-center bg-black md:justify-between justify-center">
        <div className="w-full md:w-4/12 mx-auto text-center">

          <div className="text-sm text-blueGray-500 font-semibold py-1">
            <span > © Enactus MNNIT-Allahabad 2k25 </span>
          </div>

        </div>
      </div>

    </div>
    </footer >
  );
}

export default Footer;
