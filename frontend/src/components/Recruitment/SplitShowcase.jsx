import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Target, Briefcase } from "lucide-react";

const features = [
  {
    type: "candidates",
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Tailored Roles",
    description: "Find positions perfectly matching your skills and ambitions.",
  },
  {
    type: "candidates",
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Instant Opportunities",
    description: "Apply and get responses quickly with our streamlined process.",
  },
  {
    type: "employers",
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Elite Talent",
    description: "Access pre-vetted professionals for your projects.",
  },
  {
    type: "employers",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "Faster Hiring",
    description: "Reduce your recruitment timeline with our efficient tools.",
  },
];

const SplitShowcase = () => {
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  const handleClick = (type) => {
    if (type === "candidates") {
      setMessage("🎯 Exploring Candidate Opportunities...");
    } else {
      setMessage("🏢 Showing Employer Hiring Solutions...");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="relative py-24 px-6 sm:px-12 bg-gradient-to-b from-[#f0f6fb] to-white overflow-hidden">
      {/* Animated background waves */}
      <motion.div
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-[#00809D]/20 via-[#0a1f44]/10 to-[#00809D]/20 rounded-b-[50%]"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1f44]">
          For Candidates & Employers
        </h2>
        <p className="mt-4 text-[#0a1f44] text-base sm:text-lg md:text-xl">
          Discover tailored solutions designed to accelerate careers and scale businesses.
        </p>

        {/* Horizontal animated toggle */}
        <div className="mt-6 flex justify-center gap-4 relative bg-[#e5f6fb] rounded-full p-1 w-fit mx-auto">
          {["all", "candidates", "employers"].map((f, idx) => (
            <div key={f} className="relative z-10">
              <motion.button
                onClick={() => setFilter(f)}
                className="px-5 py-2 rounded-full font-medium text-[#0a1f44] relative z-10"
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </motion.button>
              {filter === f && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-[#00809D] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Split panels */}
      <div className="flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left side: animated info blocks */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {features
            .filter((f) => filter === "all" || f.type === filter)
            .map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                onClick={() => handleClick(feature.type)}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="bg-[#00809D] p-3 rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0a1f44]">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0a1f44]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Right side: decorative panel */}
        <motion.div
          className="md:w-1/2 bg-[#00809D] rounded-3xl h-80 flex items-center justify-center text-white text-2xl font-bold shadow-2xl relative overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute w-32 h-32 bg-white/10 rounded-full animate-pulse"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <span>Interactive Solutions</span>
        </motion.div>
      </div>

      {/* Response Toast */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8 flex items-center justify-center gap-2 text-green-600 font-medium"
        >
          <CheckCircle className="w-5 h-5" />
          <span>{message}</span>
        </motion.div>
      )}
    </section>
  );
};

export default SplitShowcase;
