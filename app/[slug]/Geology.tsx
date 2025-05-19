"use client";
import React, { useEffect, useState } from "react";

const geologyTranslations = {
  en: {
    title: "Geology",
    description:
      "Our Geology services provide expert analysis of rock formations, soil composition, and geological hazards to support your engineering and construction projects. We deliver detailed geological surveys, mapping, and risk assessments to ensure informed decision-making and project safety.",
    bullets: [
      "Geological mapping and site characterization",
      "Rock and soil sampling and analysis",
      "Assessment of geological hazards (landslides, earthquakes, etc.)",
      "Hydrogeological studies",
      "Support for mining and tunneling projects",
    ],
  },
  fr: {
    title: "Géologie",
    description:
      "Nos services de géologie offrent une analyse experte des formations rocheuses, de la composition des sols et des risques géologiques pour accompagner vos projets d’ingénierie et de construction. Nous réalisons des études géologiques détaillées, des cartographies et des évaluations des risques pour garantir une prise de décision éclairée et la sécurité des projets.",
    bullets: [
      "Cartographie géologique et caractérisation des sites",
      "Échantillonnage et analyse des roches et des sols",
      "Évaluation des risques géologiques (glissements de terrain, séismes, etc.)",
      "Études hydrogéologiques",
      "Assistance pour les projets miniers et de tunnels",
    ],
  },
};

export default function Geology() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const l = localStorage.getItem("lang") || "en";
      setLang(l);
      document.title = `${geologyTranslations[l]?.title || geologyTranslations.en.title} | GEOTUCO`;
    }
  }, []);
  const t = geologyTranslations[lang] || geologyTranslations.en;
  return (
    <>
      <title>{t.title} | GEOTUCO</title>
      <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", color: "#2a4d69", fontWeight: 800, marginBottom: "2rem", textAlign: "center" }}>
          {t.title}
        </h1>
        <div style={{ color: "#444", fontSize: "1.15rem", marginBottom: "1.5rem", textAlign: "center" }}>
          {t.description}
        </div>
        <ul style={{ color: "#4b5d67", fontSize: "1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
          {t.bullets.map((b, i) => (
            <li key={i}>✔️ {b}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
