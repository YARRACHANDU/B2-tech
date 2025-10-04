import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick, type = "button", variant = "solid" }) => {
  const baseClasses =
    "rounded-lg font-semibold transition-colors px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg";

  const variants = {
    solid: "bg-[#0089D0] text-white hover:bg-[#0075B8]",
    outline:
      "border-2 border-[#0089D0] text-[#0089D0] hover:bg-[#0089D0] hover:text-white",
    ghost: "text-[#0089D0] hover:text-[#005f86]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
