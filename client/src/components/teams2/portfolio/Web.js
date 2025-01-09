import React, { useState } from 'react';
import Template from './Template';
import Department from './Department';

const Web = () => {
  const [showPresent, setShowPresent] = useState(true);

  return (
    <div className="h-screen bg-zinc-50 ">
      
      <Department tag="WEB TEAM" />
      
      <div className="container mx-auto px-4">
        
        <div className="flex justify-end mt-8 mb-12">
          <div className="bg-zinc-200 p-1 rounded-xl inline-flex">
            <button
              className={`py-2 px-6 rounded-lg font-medium transition-all duration-200 ${
                showPresent
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'text-zinc-500 hover:text-zinc-700'
              }`}
              aria-pressed={showPresent}
              onClick={() => setShowPresent(true)}
            >
              Present
            </button>
            <button
              className={`py-2 px-6 rounded-lg font-medium transition-all duration-200 ${
                !showPresent
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'text-zinc-500 hover:text-zinc-700'
              }`}
              aria-pressed={!showPresent}
              onClick={() => setShowPresent(false)}
            >
              Alumni
            </button>
          </div>
        </div>
        
        
        <div className="my-10 pb-16">
          {showPresent ? (
            <Template
              name={["Shruti Mayank", "Himanshu Tripathi", "Shaurya Raj Srivastava", "Aniket Shah"]}
              yr={["2024", "2024", "2024", "2024"]}
              url={["/", "/", "/", "/"]}
            />
          ) : (
            <Template
              name={["Gawtham Vellore", "Adya Sharma", "Himanshu Tripathi", "Shruti Mayank"]}
              yr={["2019", "2021", "2009", "2022"]}
              url={["/", "/", "/", "/"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Web;
