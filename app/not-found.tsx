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
        <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base shadow hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
          Go Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
