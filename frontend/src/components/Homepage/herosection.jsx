import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Award, Smile } from "lucide-react";
import Navbar from "../../components/Navbar";
import Textani from "./textanimations";
import { Link } from "react-router-dom";
import bgImage from './hu.jpg';

function Counter({ from = 0, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
}

function Herosection() {
  const stats = [
    {
      number: 48,
      label: "Professional Staff",
      icon: <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />,
    },
    {
      number: 24,
      label: "Years of Experience",
      icon: <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />,
    },
    {
      number: 3578,
      label: "Satisfied Clients",
      icon: <Smile className="w-8 h-8 text-pink-500 mx-auto mb-3" />,
    },
  ];

  return (
    <div>
          <section
      className="relative bg-cover bg-center min-h-screen flex items-center py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content Wrapper */}
        <div
          className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10 items-center text-white"
          style={{ marginTop: "80px" }}
        >
          {/* Left Side Content */}
          <div>
            <motion.p
              className="uppercase tracking-wide text-sm text-gray-200 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to B2 Tech Services
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#00809D]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Talent. <br /> Enabling Growth. <br />
            </motion.h1>

            <motion.p
              className="text-gray-200 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Textani />
            </motion.p>

            <motion.button
              className="bg-[#00809D] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-xl hover:bg-[#0a1f44] hover:shadow-lg transition-all duration-300 w-64"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <Link to="/recruitmentservice">Explore</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.button>
          </div>

          {/* Center Doctor Image */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <div className="relative rounded-b-[200px]">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-9 rounded-b-[220px] bg-gradient-to-b from-blue-400/30 via-blue-400/20 to-blue-500/30 blur-3xl animate-pulse"></div>

              {/* White Glow Border */}
              <div className="absolute -inset-6 rounded-b-[220px] bg-white/20 blur-xl"></div>

              {/* Image Container */}
              <div
                className="relative bg-white rounded-b-[200px] overflow-hidden shadow-2xl"
                style={{ border: "2px solid white" }}
              >
                <img
                  src="./guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg"
                  alt="Doctor"
                  className="w-80 h-[450px] object-cover relative z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side Stats */}
          <div className="flex flex-col gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Background Glow */}
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>

                <div className="relative bg-white-10 rounded-full shadow-2xl px-8 py-6 text-center flex flex-col items-center">
                  {/* SVG Icon */}
                  {stat.icon}
                  <h3 className="text-3xl font-bold text-white-900">
                    <Counter to={stat.number} />+
                  </h3>
                  <p className="text-[#00809D]-900 text-sm mt-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
