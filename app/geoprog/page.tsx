import React from "react";
import Link from "next/link";
import { SOFTWARES } from "../constants/softwares";

export default function GeoprogPage() {
  return (
    <>
      <title>Softwares | GEOTUCO</title>
      <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", color: "#2a4d69", fontWeight: 800, marginBottom: "2rem", textAlign: "center" }}>
          Softwares
        </h1>
        <div style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {Object.entries(SOFTWARES).map(([key, software]) => (
            <Link
              key={key}
              href={`/geoprog/${key}`}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px #e0e6ed",
                padding: "2rem 1.5rem",
                minWidth: 220,
                maxWidth: 260,
                textDecoration: "none",
                color: "#2a4d69",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: 500,
                transition: "transform 0.15s"
              }}
            >
              <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center" }}>
                {software.title}
              </div>
              <div style={{ color: "#4b5d67", fontSize: "1rem", textAlign: "center" }}>
                {software.description}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
