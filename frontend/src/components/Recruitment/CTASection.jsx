import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate(); // <-- added here

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-[#00809D] to-[#0a1f44] text-center text-white overflow-hidden">
      {/* Curve effect */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-white rounded-b-[50%]"></div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
      >
        Ready to Find the Perfect Match?
      </motion.h2>

      <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
        Let’s make recruitment faster, smarter, and success-driven.
      </p>

      <Button
        className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-colors duration-300"
        style={{ backgroundColor: "#00809D", color: "#0a1f44" }}
        onClick={() => navigate("/contact")} // <-- fixed
      >
        Contact Us Today
      </Button>
    </section>
  );
};

export default CTASection;
