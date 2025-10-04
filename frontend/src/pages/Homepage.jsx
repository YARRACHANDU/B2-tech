import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/Homepage/herosection';
import Whyb2 from '../components/Homepage/whyb2';
import Our from '../components/Homepage/Our Growth Journey';
import Serivices from '../components/Homepage/ourservices';
import Weser from '../components/Homepage/weserve';
import OurClient from '../components/Homepage/ourclient';
import Why from '../components/Homepage/why';
import WhatsAppButton from '../components/whatsapp';
import ChatWidget from '../components/chatwidget';
import Footer from '../components/Footer';
import Achieve from '../components/Homepage/achievements';
import { motion } from 'framer-motion';

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on refresh
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative">
      <Herosection>
      
      </Herosection>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-40px' }}
      >
        <Whyb2 />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-60px' }}
      >
        <Our />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-60px' }}
      >
        <Serivices />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-150px' }}
      >
        <Achieve />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-130px' }}
      >
        <Weser />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-50px' }}
      >
        <OurClient />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-60px' }}
      >
        <Why />
      </motion.div>

      <ChatWidget />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ marginTop: '-90px' }}
      >
        <Footer />
      </motion.div>

      <WhatsAppButton />
    </div>
  );
}

export default Homepage;
