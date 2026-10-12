export default function Gallery() {
  return (
    <section
      className="gallery-section"
      style={{
        background: "#050505",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <p
        style={{
          color: "#a000ff",
          letterSpacing: "4px",
          fontSize: "14px",
          marginBottom: "15px",
        }}
      >
        GALLERY
      </p>

      <h2
        style={{
          fontSize: "clamp(42px, 5vw, 64px)",
          marginBottom: "40px",
          lineHeight: "1.1",
          fontWeight: 500,
          letterSpacing: "-2px",
        }}
      >
        Пространство{" "}
        <span
          style={{
            color: "#a000ff",
            textShadow: "0 0 20px rgba(160,0,255,0.2)",
          }}
        >
          Cyber'Cuts
        </span>
      </h2>

      <div className="gallery-layout">

        {/* ГЛАВНОЕ ФОТО */}

        <div className="gallery-card gallery-main">
          <img
            className="gallery-image"
            src="/gallery/interior-1.jpg"
            alt="Интерьер Cyber'Cuts"
          />

          <div className="gallery-label">
            CYBER'CUTS / 01
          </div>
        </div>

        {/* ВТОРОЕ ФОТО */}

        <div className="gallery-card gallery-small">
          <img
            className="gallery-image"
            src="/gallery/interior-2.jpg"
            alt="Рабочие места Cyber'Cuts"
          />

          <div className="gallery-label">
            SPACE / 02
          </div>
        </div>

        {/* ТРЕТЬЕ ФОТО */}

        <div className="gallery-card gallery-small">
          <img
            className="gallery-image"
            src="/gallery/interior-3.jpg"
            alt="Интерьер Cyber'Cuts"
          />

          <div className="gallery-label">
            ATMOSPHERE / 03
          </div>
        </div>

      </div>
    </section>
  );
}