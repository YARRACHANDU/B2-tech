import React from "react";
import Companyphilosophy from "../../components/AboutComponent/companyphilosophy";
import Footer from "../../components/Footer";
import Navbar from "../../components/nav";
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";

function AboutUs() {
  return (
    <div>
     <div>
       <Navbar />
     </div>
      <div >
        <Companyphilosophy />
      </div>

      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default AboutUs;
