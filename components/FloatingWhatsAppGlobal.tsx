"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React from "react";

export default function FloatingWhatsAppGlobal() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      window.open("https://wa.me/21671712233", "_blank");
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <FloatingWhatsApp
      phoneNumber="+21671712233"
      accountName="GEOTUCO"
      avatar="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?semt=ais_hybrid&w=740"
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hello there! 👋 How can we help you?"
      placeholder="Type your message.."
      allowEsc
      allowClickAway
      notification
      notificationDelay={30}
      notificationSound
      buttonStyle={{ boxShadow: 'none' }}
      onClick={handleWhatsAppClick}
    />
  );
}
