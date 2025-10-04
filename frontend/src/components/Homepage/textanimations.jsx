import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Your Go-To Partner for Hiring Excellence in Specialized Tech & Business Domains",
  "Our Quality. Your Trust. — That’s Our Success Story.",
  "Don’t Just Find a Job. Discover a Future. With Us.",
  "Your Reliable Partner — Turning Today’s Challenges into Tomorrow’s Wins",
  "Trust. Transformation. Triumph. That’s the B2 Tech Way",
];

export default function HeroText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === taglines[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(taglines[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-gray-200 text-2xl md:text-xl font-semibold mb-6"
    >
      {text}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
}
