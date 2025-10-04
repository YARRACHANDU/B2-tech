import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager @TechCorp",
    text: "This recruitment service transformed our hiring process. We hired the best in record time!",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Patel",
    role: "Software Engineer",
    text: "I landed my dream job within 2 weeks. The process was smooth and professional.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alicia Gomez",
    role: "Startup Founder",
    text: "Finding the right talent used to take months, now it’s just days. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fbfd]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0a1f44] mb-8 sm:mb-12">
        What People Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-[#00809D]"
            />
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">
              “{item.text}”
            </p>
            <h4 className="font-bold text-base sm:text-lg text-[#0a1f44]">{item.name}</h4>
            <span className="text-xs sm:text-sm text-gray-500">{item.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
