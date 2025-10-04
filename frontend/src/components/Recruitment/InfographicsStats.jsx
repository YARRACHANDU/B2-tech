import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBriefcase, FaRocket } from "react-icons/fa";

const stats = [
  { icon: <FaUserTie />, number: "10K+", label: "Candidates Placed" },
  { icon: <FaBriefcase />, number: "500+", label: "Companies Served" },
  { icon: <FaRocket />, number: "98%", label: "Success Rate" },
];

const InfographicStats = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-center">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-3 sm:space-y-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00809D] flex items-center justify-center text-white text-2xl sm:text-3xl shadow-xl">
              {item.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1f44]">{item.number}</h3>
            <p className="text-base sm:text-lg text-[#0a1f44]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfographicStats;
