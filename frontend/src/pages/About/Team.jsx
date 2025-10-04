import React from "react";
import Founder from "../../components/AboutComponent/founder";
import Footer from "../../components/Footer";
import Navbar from "../../components/nav";
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";

function Team() {
  return (
    <div>
     <div>
       <Navbar />
     </div>
      <Founder />
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Team;
