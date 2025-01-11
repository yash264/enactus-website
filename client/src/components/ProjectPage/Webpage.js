import React from "react";
import Description from "./Descriptions/Description";
import Title from "./Title";

const Webpage = ({ Project }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 md:mt-6 text-white py-1 md:py-2 px-2 md:px-8">
        <div className="max-w-8xl mx-auto">
          <Title title={Project} />
        </div>
      </div>

      <div className="flex flex-col py-1 md:py-20 md:px-16 gap-12 bg-gray-50">
        <div className="flex flex-col items-center justify-center mt-5 md:py-6 bg-white rounded-xl shadow-lg transition-all duration-500">
          <div
            className="w-full md:w-3/4 h-80 md:h-[400px] bg-zinc-800 rounded-lg flex items-center justify-center 
            text-white text-3xl font-semibold"
          >
            Image Placeholder
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Description Project={Project} />
        </div>
      </div>

      <div className="bg-gradient-to-t from-enactusYellow to-yellow-300 text-white text-center py-8">
        <p className="text-lg text-gray-900 font-semibold">
          Want to learn more about our projects? Stay tuned for updates and exciting stories!
        </p>
      </div>
    </div>
  );
};

export default Webpage;
