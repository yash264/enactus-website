import React from 'react';
import { motion } from 'framer-motion';

const Department = (props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative py-5 flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-yellow-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_#18181B)]" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-yellow-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {props.tag}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-yellow-600 rounded-full"
            />
            <span className="text-yellow-600 font-medium">Excellence in Technology</span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-yellow-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Department;