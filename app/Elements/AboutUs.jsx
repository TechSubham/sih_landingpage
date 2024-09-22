"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gray-700">About </span>
          <span className="text-blue-600">Us</span>
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Team Qubit</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are working on web scraping and vulnerability detection website. 
            Our goal is to make data extraction and analysis better and safer.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Ajay Singh</h4>
            <p className="text-lg text-blue-600 font-medium">Lead Developer</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Manit Singh</h4>
            <p className="text-lg text-blue-600 font-medium">Backend Developer</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Subham</h4>
            <p className="text-lg text-blue-600 font-medium">Frontend Developer</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Harshjit Singh</h4>
            <p className="text-lg text-blue-600 font-medium">Video Editor</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Dhruv Rastogi</h4>
            <p className="text-lg text-blue-600 font-medium">PPT Designer</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 text-center m-4 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-2xl font-semibold mb-2 text-gray-800">Shubhangi Johri</h4>
            <p className="text-lg text-blue-600 font-medium">PPT Designer</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;