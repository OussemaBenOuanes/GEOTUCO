"use client";
import React, { useEffect, useState } from "react";

const trainingTranslations = {
  en: {
    title: "Training",
    description:
      "GEOTUCO offers specialized training programs in geotechnical engineering, laboratory testing, and field investigation techniques. Our courses are designed for engineers, technicians, and students seeking to enhance their practical skills and theoretical knowledge in the geotechnical field.",
    bullets: [
      "Hands-on training in soil and rock testing",
      "Workshops on geotechnical investigation methods",
      "Software training for geotechnical analysis",
      "Customized courses for organizations and universities",
      "Certification upon completion",
    ],
  },
  fr: {
    title: "Formation",
    description:
      "GEOTUCO propose des programmes de formation spécialisés en génie géotechnique, essais en laboratoire et techniques d’investigation sur le terrain. Nos cours sont conçus pour les ingénieurs, techniciens et étudiants souhaitant renforcer leurs compétences pratiques et leurs connaissances théoriques dans le domaine géotechnique.",
    bullets: [
      "Formation pratique aux essais sur sols et roches",
      "Ateliers sur les méthodes d’investigation géotechnique",
      "Formation aux logiciels d’analyse géotechnique",
      "Cours personnalisés pour entreprises et universités",
      "Certification à l’issue de la formation",
    ],
  },
};

export default function Training() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const l = localStorage.getItem("lang") || "en";
      setLang(l);
      document.title = `${trainingTranslations[l]?.title || trainingTranslations.en.title} | GEOTUCO`;
    }
  }, []);
  const t = trainingTranslations[lang] || trainingTranslations.en;
  return (
    <>
      <title>{t.title} | GEOTUCO</title>
      <main
        style={{
          padding: "2rem",
          fontFamily: "sans-serif",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            color: "#2a4d69",
            fontWeight: 800,
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {t.title}
        </h1>
        <div
          style={{
            color: "#444",
            fontSize: "1.15rem",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          {t.description}
        </div>
        <ul
          style={{
            color: "#4b5d67",
            fontSize: "1rem",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {t.bullets.map((b, i) => (
            <li key={i}>✔️ {b}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
