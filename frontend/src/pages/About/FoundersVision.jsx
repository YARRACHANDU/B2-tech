import React from "react";
import Growthjourney from "../../components/AboutComponent/growthjourney";
import Footer from "../../components/Footer";
import Navb from "../../components/nav";
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";

function FoundersVision() {
  return (
    <div>
      <div>
        <Navb />
      </div>

      <Growthjourney />
      <ChatWidget />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default FoundersVision;
