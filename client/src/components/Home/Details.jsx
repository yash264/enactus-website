import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid.jsx";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import img1 from "../../assets/Teams/TeamMembers/Amartya Mani.jpeg";
import img2 from "../../assets/Teams/TeamMembers/Amartya Mani.jpeg";
import img3 from "../../assets/Teams/TeamMembers/Amartya Mani.jpeg";
import { asset } from "../../images/asset.js";

export function Details() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>)
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-900 flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-300 p-2 items-center space-x-2 bg-white">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
        <div className="w-full bg-gray-200 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-300 p-2 items-center space-x-2 w-3/4 ml-auto bg-white">
        <div className="w-full bg-gray-200 h-4 rounded-full" />
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-300 p-2 items-center space-x-2 bg-white">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
        <div className="w-full bg-gray-200 h-4 rounded-full" />
      </motion.div>
    </motion.div>)
  );
};

const SkeletonTwo = () => {
  return (
    (<div className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-100 flex-col space-y-2">
      <div className="flex flex-col items-center justify-center h-full">
        
        <img className="object-fill overflow-y-auto w-full h-full " src={asset.en6}/>
      </div>
    </div>)
  );
};

const SkeletonThree = () => {
  return (
    (<div className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-100 flex-col space-y-2">
      <iframe
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="Enactus Impact"
        src="https://www.youtube.com/embed/1U3zF6ll27E?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fenactus.org"
      ></iframe>
    </div>)
  );
};

const SkeletonFour = () => {
  const variants = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-100 flex-row space-x-2">
      <motion.div
        variants={variants}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-gray-300 flex flex-col items-center justify-center">
        <img
          src={asset.utkarsh}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-gray-700 mt-4">
          Utkarsh Sharma
        </p>
        <p
          className="border border-red-500 bg-red-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Meet our team
        </p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-gray-300 flex flex-col items-center justify-center">
        <img
          src={asset.roysha}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-gray-700 mt-4">
          Aditya Roysha
        </p>
        <p
          className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Meet our team
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-gray-300 flex flex-col items-center justify-center">
        <img
          src={asset.shreyansh}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-gray-700 mt-4">
          Shreyansh Singh
        </p>
        <p
          className="border border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Meet our team
        </p>
      </motion.div>
    </motion.div>)
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gray-100 flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-gray-300 p-2 items-start space-x-2 bg-white">
        <img
          src={asset.roysha}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p className="text-xs text-gray-700">
          Enactus projects are designed to create a better, more sustainable world.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-300 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white">
        <p className="text-xs text-gray-700">Join us in making a difference.</p>
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex-shrink-0" />
      </motion.div>
    </motion.div>)
  );
};

const items = [
  {
    title: "About Enactus",
    description: (
      <span className="text-sm">
        Learn more about Enactus and our mission to create a better world.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-gray-700" />,
  },
  {
    title: "Buy Enactus Products",
    description: (
      <span class="text-sm">
        Support our projects by purchasing Enactus products.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-gray-700" />,
  },
  {
    title: "Enactus Impact Video",
    description: (
      <span className="text-sm">
        Watch our impact video to see the difference we are making.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-gray-700" />,
  },
  {
    title: "Team",
    description: (
      <span className="text-sm">
        Innovating Today, Inspiring Tomorrow!"
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-gray-700" />,
  },
  {
    title: "Enactus MNNIT:",
    description: (
      <span className="text-sm">
        Ideas that Impact.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-gray-700" />,
  },
];
