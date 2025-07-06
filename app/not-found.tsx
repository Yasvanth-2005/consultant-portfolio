import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        color: "#1e293b",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🚫</div>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}
      >
        404 - Page Not Found
      </h1>
      <p
        style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#64748b" }}
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <a
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "0 2px 8px rgba(30,41,59,0.08)",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#1d4ed8")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#2563eb")}
        >
          Go Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
