import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  const phoneNumber = "918368604905"; // country code + number
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  return (
    <div className="">
      <a
        className="fixed bottom-5 right-5 z-50 bg-green-400 hover:bg-green-500 p-2 rounded-full"
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp
          size={40}
          color=""
          className="w-10 h-10 text-white transition-all duration-300"
        />
      </a>
    </div>
  );
};

export default WhatsappIcon;
