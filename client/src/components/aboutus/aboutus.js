import React from 'react';
import TextWrapper from './textWrapper';

const AboutUsPage = () => {

  // style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("https://clipground.com/images/enactus-logo-png-12.png")' }}

  return (
    <div className="relative">
      <div className="text-center my-16 px-4">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-6">
          Know About Us !!
        </h2>
        <p className="text-lg md:text-2xl text-zinc-700 font-medium">
          A little more about Enactus Allahabad
        </p>
      </div>

      <div className=' bg-center bg-contain bg-no-repeat'  >
        <div className="flex flex-col md:flex-row items-center justify-center ">

          <div className="pl-8 p-4 md:w-1/2 flex justify-center "> {/* Remove mb-8 */}
            <p className="text-sm leading-relaxed mt-8"> {/* Add mt-8 class */}
              <TextWrapper />
            </p>
          </div>

          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center" >
            <iframe className="elementor-video" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Enactus Impact" width="480" height="260" src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fenactus.org&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true"></iframe>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
