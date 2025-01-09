import React from "react";

const Title = ({ title }) => {
  return (
    <div
      className="p-6 top-0"
    >
      <h1 className="lg:text-5xl tracking-wider md:text-3xl font-mono font-bold text-center">
        PROJECT {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default Title;