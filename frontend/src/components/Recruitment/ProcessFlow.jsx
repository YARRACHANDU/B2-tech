import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Screening", desc: "We filter and shortlist the best profiles." },
  { title: "Assessment", desc: "Evaluate skills, culture-fit, and expertise." },
  { title: "Interview", desc: "Schedule and manage interviews seamlessly." },
  { title: "Placement", desc: "Match candidates with the right employers." },
];

const ProcessFlow = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f0f8ff]">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center text-[#0a1f44] mb-8 sm:mb-12">
        Our Recruitment Process
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.3 }}
            className="relative text-center p-5 sm:p-6 bg-white shadow-lg rounded-xl w-full sm:w-72 mb-6 md:mb-0"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#0a1f44] mb-2">{step.title}</h3>
            <p className="text-sm sm:text-base text-[#0a1f44]">{step.desc}</p>
          </motion.div>
        ))}

        {/* Line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#00809D] -z-10"></div>
      </div>
    </section>
  );
};

export default ProcessFlow;
