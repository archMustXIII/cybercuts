import Reveal from "./Reveal";

export default function Services() {
  return (
    <section
    className="services-section"
      style={{
        background: "#080808",
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
        SERVICES
      </p>

      <h2
        style={{
          fontSize: "48px",
          marginBottom: "70px",
          lineHeight: "1.2",
        }}
      >
        Услуги
      </h2>
<Reveal>
      <div
      className="services-list"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Service
          number="01"
          title="Мужская стрижка"
          price="1 400 ₽"
        />

        <Service
          number="02"
          title="Стрижка + борода"
          price="2 300 ₽"
        />

        <Service
          number="03"
          title="Моделирование бороды"
          price="1 100 ₽"
        />

        <Service
          number="04"
          title="Детская стрижка"
          description="до 14 лет"
          price="1 200 ₽"
        />

        <Service
          number="05"
          title="Камуфляж"
          description="8 ml"
          price="900 ₽"
        />

        <Service
          number="06"
          title="Воск"
          price="300 ₽"
        />
      </div>
      </Reveal>
    </section>
  );
}

function Service({
  number,
  title,
  description,
  price,
}: {
  number: string;
  title: string;
  description?: string;
  price: string;
}) {
  return (
    <div
    className="services-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        padding: "30px 0",
        borderTop: "1px solid #222",
      }}
    >
      <span
        style={{
          color: "#a000ff",
          fontSize: "16px",
          minWidth: "40px",
        }}
      >
        {number}
      </span>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 400,
            margin: 0,
          }}
        >
          {title}
        </h3>

        {description && (
          <p
            style={{
              color: "#666",
              margin: "6px 0 0",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            {description}
          </p>
        )}
      </div>

      <span
        style={{
          color: "white",
          fontSize: "20px",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
        }}
      >
        {price}
      </span>
    </div>
  );
}