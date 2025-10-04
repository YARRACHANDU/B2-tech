import React from "react";
import Corevalues from "../../components/AboutComponent/corevalues";
import Footer from "../../components/Footer";
import Navbar from "../../components/nav";
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function OurValues() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "96px" }}>
        <Corevalues />
      </div>
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default OurValues;
