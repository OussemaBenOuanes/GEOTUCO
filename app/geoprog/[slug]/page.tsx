import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { SOFTWARES } from "../../constants/softwares";

export default async function GeoprogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const software = SOFTWARES[slug];

  if (!software) return notFound();

  // Await headers() before using its value
  let lang = "en";
  const hdrs = await headers();
  const accept = hdrs.get("accept-language");
  if (accept && accept.startsWith("fr")) lang = "fr";

  return (
    <Suspense>
      <title>{`${software.title} | GEOTUCO`}</title>
      <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 700, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#2a4d69", marginBottom: "1rem" }}>{software.title}</h1>
        <p style={{ fontSize: "1.15rem", color: "#444" }}>
          {lang === "fr" ? software.descriptionFr : software.description}
        </p>
      </main>
    </Suspense>
  );
}
