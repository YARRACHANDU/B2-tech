import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e5f6fb] to-[#d0f0fa] py-14 sm:py-20 md:py-28 px-3 sm:px-5 md:px-8 lg:px-16 xl:px-32">
      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-white rounded-t-[50%]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-5 md:space-y-7"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1f44] leading-snug sm:leading-tight md:leading-tight mt-8">
            Right Job. Right Candidate.<br />Right Now.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#0a1f44]">
            Recruitment reimagined with precision, speed, and unmatched quality.
          </p>
          <Link to='/Expertise'><Button className="px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl">
            Get Started
          </Button></Link>
        </motion.div>

        {/* Image with Rounded & Curved Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="overflow-hidden rounded-3xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <img
              src="/1.webp"
              alt="Recruitment Infographic"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
