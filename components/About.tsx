import Reveal from "./Reveal";

export default function About() {
  return (
    <section
    className="about-section"
      style={{
        background: "#050505",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <div
      className="about-content"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ 
          flex: 1, 
          minWidth: "0",
           }}>
          <p
            style={{
              color: "#a000ff",
              letterSpacing: "4px",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            ABOUT CYBER'CUTS
          </p>

        <h2
  style={{
    fontSize: "clamp(42px, 5vw, 64px)",
    marginBottom: "30px",
    lineHeight: "1.1",
    fontWeight: 600,
    letterSpacing: "-1px",
  }}
>
  Не просто
  <br />
  <span
    style={{
      color: "#a000ff",
      textShadow: "0 0 20px rgba(160,0,255,0.25)",
    }}
  >
    барбершоп.
  </span>
</h2>

          <p
            style={{
              color: "#a9a9a9",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "600px",
            }}
          >
            Cyber'Cuts — это место, где современный стиль встречается
            с атмосферой underground.
            

            

            Здесь важна каждая деталь: точность работы, комфорт,
            музыка, свет и пространство. Мы создаём не только стрижку,
            но и впечатление, к которому хочется возвращаться.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "0",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Info number="01" title="СТИЛЬ" />
          <Info number="02" title="АТМОСФЕРА" />
          <Info number="03" title="ХАРАКТЕР" />
        </div>
      </div>
    </section>
  );
}

function Info({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div
    className="about-info"
      style={{
        borderBottom: "1px solid #222",
        paddingBottom: "20px",
        transition: "transform 0.3s ease, border-color 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          color: "#a000ff",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        {number}
      </div>

      <div
        style={{
          marginTop: "8px",
          letterSpacing: "3px",
          fontSize: "18px",
        }}
      >
        {title}
      </div>
    </div>
  );
}