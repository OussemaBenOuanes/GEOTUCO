import React from "react";

const SOFTWARES: Record<string, { title: string; description: string }> = {
  geologa: {
    title: "GEOLOGA®",
    description: "GEOLOGA® is a specialized software for geological data management and analysis, supporting geotechnical and civil engineering projects.",
  },
  geopres: {
    title: "GEOPRES®",
    description: "GEOPRES® provides advanced tools for pressuremeter test data processing and interpretation in geotechnical investigations.",
  },
  geoprec: {
    title: "GEOPREC®",
    description: "GEOPREC® is designed for precision geotechnical measurements and reporting, ensuring high accuracy in field and lab results.",
  },
  geostat: {
    title: "GEOSTAT®",
    description: "GEOSTAT® offers comprehensive statistical analysis for geotechnical and geological datasets.",
  },
  geodyna: {
    title: "GEODYNA®",
    description: "GEODYNA® focuses on dynamic soil testing and seismic analysis for geotechnical engineering.",
  },
  geogran: {
    title: "GEOGRAN®",
    description: "GEOGRAN® is used for granulometric analysis and soil classification in laboratory environments.",
  },
  geolima: {
    title: "GEOLIMA®",
    description: "GEOLIMA® assists in Atterberg limits and soil consistency analysis for geotechnical labs.",
  },
  geocomp: {
    title: "GEOCOMP®",
    description: "GEOCOMP® is a comprehensive suite for soil compaction and consolidation test management.",
  },
  geocons: {
    title: "GEOCONS®",
    description: "GEOCONS® provides tools for consolidation test data processing and settlement analysis.",
  },
  geogonf: {
    title: "GEOGONF®",
    description: "GEOGONF® specializes in swelling and shrinkage tests for expansive soils.",
  },
  geocisa: {
    title: "GEOCISA®",
    description: "GEOCISA® is tailored for in-situ soil testing and geotechnical site investigation management.",
  },
  geoproc: {
    title: "GEOPROC®",
    description: "GEOPROC® offers process automation and reporting for geotechnical laboratory workflows.",
  },
};

export default async function GeoprogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const software = SOFTWARES[slug];

  if (!software) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#2a4d69", marginBottom: "1rem" }}>Software Not Found</h1>
        <p style={{ fontSize: "1.15rem", color: "#444" }}>The requested software page does not exist.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", color: "#2a4d69", marginBottom: "1rem" }}>{software.title}</h1>
      <p style={{ fontSize: "1.15rem", color: "#444" }}>{software.description}</p>
    </main>
  );
}
