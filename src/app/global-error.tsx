"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>Global Application Error</h2>
          <p>{error.message || "An unhandled error occurred."}</p>
          <button
            onClick={() => reset()}
            style={{
              padding: "10px 20px",
              background: "#0263CC",
              color: "#fff",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Refresh Application
          </button>
        </div>
      </body>
    </html>
  );
}
