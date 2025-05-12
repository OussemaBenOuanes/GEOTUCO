import React from "react";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { SOFTWARES } from "../../constants/softwares";

export default async function GeoprogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const software = SOFTWARES[slug];

  if (!software) return notFound();

  // Detect language from headers or fallback to 'en'
  let lang = "en";
  if (typeof headers !== "undefined") {
    // @ts-ignore
    const accept = headers().get("accept-language");
    if (accept && accept.startsWith("fr")) lang = "fr";
  }

  // Move SEO tags to a React fragment for use in the layout's <head>
  // Use next/head for client-side, but for server components, return only main content
  // Let the layout handle <head> tags if needed

  return (
    // ...no <head> here...
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
      {/* Optionally, you can export SEO data for use in layout */}
      {/* <SEO title={software.title} description={lang === "fr" ? software.seo.fr : software.seo.en} /> */}
      <h1 style={{ fontSize: "2rem", color: "#2a4d69", marginBottom: "1rem" }}>{software.title}</h1>
      <p style={{ fontSize: "1.15rem", color: "#444" }}>
        {lang === "fr" ? software.descriptionFr : software.description}
      </p>
    </main>
  );
}
