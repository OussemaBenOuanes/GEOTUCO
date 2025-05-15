"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from "react";
import { whatsappTranslations } from "../translations/whatsapp";

export default function FloatingWhatsAppGlobal() {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue) setLanguage(e.newValue);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const t = whatsappTranslations[language] || whatsappTranslations.en;

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
      statusMessage={t.statusMessage}
      chatMessage={t.chatMessage}
      placeholder={t.placeholder}
      allowEsc={true}
      allowClickAway={false}
      notification
      notificationDelay={30}
      notificationSound
      buttonStyle={{ boxShadow: 'none' }}
      onClick={handleWhatsAppClick}
      onNotification={undefined}
    />
  );
}
