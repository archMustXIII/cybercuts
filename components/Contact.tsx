export default function Contact() {
  return (
    <section
      className="contact-section"
      style={{
        background: "#080808",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <div
        className="contact-content"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
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
          CONTACT
        </p>

        <h2
          style={{
            fontSize: "clamp(44px, 6vw, 72px)",
            lineHeight: "1",
            fontWeight: 500,
            letterSpacing: "-2px",
            margin: "0 0 80px",
          }}
        >
          Найди свой{" "}
          <span
            style={{
              color: "#a000ff",
              textShadow: "0 0 25px rgba(160,0,255,0.25)",
            }}
          >
            стиль.
          </span>
        </h2>

        <div
          className="contact-main"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "70px",
            alignItems: "stretch",
          }}
        >
          {/* ЛЕВАЯ ЧАСТЬ */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="contact-info-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "40px",
              }}
            >
              <ContactItem
                label="АДРЕС"
                children={
                  <>
                    Тюмень
                    <br/>
                    ул. Краснооктябрьская 8
                    <br/>
                    офис 1
                  </>
                }
              />

              <ContactItem
                label="ТЕЛЕФОН"
                children={
                  <a
                    href="tel:+79969466213"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    +7 996 946-62-13
                  </a>
                }
              />

              <ContactItem
                label="РАБОТАЕМ"
                children={
                  <>
                    Ежедневно
                    

                    с 11:00 до 21:00
                  </>
                }
              />
            </div>

            <div
              className="contact-action"
              style={{
                marginTop: "60px",
                paddingTop: "35px",
                borderTop: "1px solid #222",
              }}
            >
              <p
                style={{
                  color: "#555",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  marginBottom: "20px",
                }}
              >
                ГОТОВ К НОВОМУ ОБРАЗУ?
              </p>

              <a
  className="contact-button"
  href="https://dikidi.net/2154854"
  target="_blank"
  rel="noopener noreferrer"
>
  ЗАПИСАТЬСЯ
</a>
            </div>
          </div>

          {/* КАРТА */}

          <div className="cyber-map">
            <div className="cyber-map-grid"></div>

            <div className="map-scanline"></div>

            <div className="map-marker">
              <div className="marker-pulse"></div>

              <div className="marker-dot"></div>

              <div className="marker-label">
                <span>CYBER'CUTS</span>
                <small>TYUMEN / 01</small>
              </div>
            </div>

            <div className="map-corner map-corner-tl"></div>
            <div className="map-corner map-corner-tr"></div>
            <div className="map-corner map-corner-bl"></div>
            <div className="map-corner map-corner-br"></div>

            <div className="map-coordinates">
              57°09'N&nbsp;&nbsp;65°32'E
            </div>

            <div className="map-address">
              KRASNOOKTYABRSKAYA 8
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div
          style={{
            marginTop: "100px",
            paddingTop: "20px",
            borderTop: "1px solid #161616",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            color: "#444",
            fontSize: "11px",
            letterSpacing: "3px",
          }}
        >
          <span>CYBER'CUTS</span>
          <span>TYUMEN / 2026</span>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="contact-item">
      <p
        style={{
          color: "#666",
          fontSize: "12px",
          letterSpacing: "3px",
          margin: "0 0 15px",
        }}
      >
        {label}
      </p>

      <div
        style={{
          fontSize: "19px",
          lineHeight: "1.7",
        }}
      >
        {children}
      </div>
    </div>
  );
}