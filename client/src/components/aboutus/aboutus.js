import React from 'react';
import TextWrapper from './textWrapper';

const AboutUsPage = () => {
  return (
    <div className="relative">
      <div className='h-fit'>
        <h1 className="text-5xl p-8 bg-enactusYellow font-extrabold text-center text-white absolute top-0 left-0 right-0"
          style={{ boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.3)' }}>ABOUT US</h1>
      </div>

      <div className='h-screen bg-center bg-contain bg-no-repeat' style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://clipground.com/images/enactus-logo-png-12.png")' }} >
        <div className="flex flex-col md:flex-row items-center justify-center h-screen">
          <div className="pl-8 p-4 md:w-1/2 flex justify-center"> {/* Remove mb-8 */}
            <p className="text-sm leading-relaxed mt-8"> {/* Add mt-8 class */}  
              <TextWrapper />
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <iframe className="elementor-video" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Enactus Impact" width="640" height="360" src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fenactus.org&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
