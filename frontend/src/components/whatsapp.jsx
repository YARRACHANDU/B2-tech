import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916364053221"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 hover:scale-110 transform transition-all duration-300 z-50"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
