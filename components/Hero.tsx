export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "80px 15px 0",
        background:
          "radial-gradient(circle at center, #24102f 0%, #0d0d0d 45%, #050505 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "#a000ff",
          filter: "blur(180px)",
          opacity: 0.25,
          borderRadius: "50%",
        }}
      />

      <h1
      className="hero-title"
        style={{
          fontSize: "clamp(38px, 10vw, 90px)",
          letterSpacing: "clamp(3px, 1.5vw, 14px)",
          whiteSpace: "nowrap",
          maxWidth: "100%",
          marginBottom: "25px",
          fontWeight: 700,
          position: "relative",
          textShadow:
            "0 0 15px rgba(170,0,255,0.7)",
        }}
      >
        CYBER'CUTS
      </h1>

      <p
      className="hero-subtitle"
        style={{
          fontSize: "22px",
          color: "#b5b5b5",
          maxWidth: "500px",
          lineHeight: 1.5,
          marginBottom: "45px",
          position: "relative",
        }}
      >
        Не просто стрижка.
        

        Пространство с характером.
      </p>

      <a
  href="https://dikidi.net/2154854"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
  style={{
    padding: "16px 45px",
    background: "transparent",
    color: "white",
    border: "1px solid #a000ff",
    fontSize: "18px",
    letterSpacing: "3px",
    cursor: "pointer",
    position: "relative",
    textDecoration: "none",
  }}
>
  ЗАПИСАТЬСЯ
</a>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          color: "#555",
          fontSize: "12px",
          letterSpacing: "4px",
        }}
      >
        TYUMEN • UNDERGROUND BARBERSHOP
      </div>
    </section>
  );
}