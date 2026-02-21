"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>Something went wrong</h1>

      <p style={{ maxWidth: "40ch", opacity: 0.8 }}>
        An unexpected error occurred. Please try again, or come back later.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <button onClick={() => reset()}>Try again</button>

        <a href="/" style={{ textDecoration: "underline" }}>
          Go home
        </a>
      </div>
    </main>
  );
}
