"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      padding: "2rem"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: 900,
        color: "#003365",
        marginBottom: "1rem",
        textAlign: "center"
      }}>
        404 – Page Not Found
      </h1>
      <p style={{
        fontSize: "1.2rem",
        color: "#495867",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        Sorry, the page you are looking for does not exist.<br />
        Please check the URL or return to the homepage.
      </p>
      <Link
        href="/"
        style={{
          background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
          color: "#fff",
          fontWeight: 700,
          padding: "0.8em 2em",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "1.1rem",
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
        }}
      >
        Go Home
      </Link>
    </main>
  );
}
