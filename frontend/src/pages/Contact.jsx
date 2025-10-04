import React from "react";
import Contact from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/nav";
import WhatsAppButton from "../components/whatsapp";
import ChatWidget from "../components/chatwidget";

function AboutUs() {
  return (
    <div>
      <div><Navbar /></div>
      <Contact />
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default AboutUs;
