"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(5,5,5,0.85)",
        backdropFilter: "blur(10px)",
        color: "white",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h2
        className="navbar-logo"
        style={{
          margin: 0,
          letterSpacing: "3px",
          fontSize: "20px",
          textShadow: "0 0 10px rgba(160,0,255,0.7)",
        }}
      >
        CYBER'CUTS
      </h2>

      {/* Десктопное меню */}
      <nav
        className="desktop-menu"
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <a href="#home" style={linkStyle}>
          Главная
        </a>

        <a href="#about" style={linkStyle}>
          О нас
        </a>

        <a href="#services" style={linkStyle}>
          Услуги
        </a>

        <a href="#gallery" style={linkStyle}>
          Галерея
        </a>

        <a href="#contact" style={linkStyle}>
          Контакты
        </a>

        <a
          href="https://dikidi.net/2154854"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 28px",
            background: "transparent",
            color: "white",
            border: "1px solid #a000ff",
            textDecoration: "none",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
        >
          ЗАПИСАТЬСЯ
        </a>
      </nav>

      {/* Кнопка мобильного меню */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "transparent",
          border: "1px solid #a000ff",
          color: "white",
          fontSize: "22px",
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Мобильное меню */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(5,5,5,0.97)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            padding: "25px 30px",
            boxSizing: "border-box",
            gap: "22px",
            borderTop: "1px solid #222",
          }}
        >
          <a
            href="#home"
            style={mobileLinkStyle}
            onClick={closeMenu}
          >
            Главная
          </a>

          <a
            href="#about"
            style={mobileLinkStyle}
            onClick={closeMenu}
          >
            О нас
          </a>

          <a
            href="#services"
            style={mobileLinkStyle}
            onClick={closeMenu}
          >
            Услуги
          </a>

          <a
            href="#gallery"
            style={mobileLinkStyle}
            onClick={closeMenu}
          >
            Галерея
          </a>

          <a
            href="#contact"
            style={mobileLinkStyle}
            onClick={closeMenu}
          >
            Контакты
          </a>

          <a
            href="https://dikidi.net/2154854"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px",
              background: "#a000ff",
              color: "white",
              textDecoration: "none",
              textAlign: "center",
              letterSpacing: "3px",
            }}
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      )}
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
};

const mobileLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  letterSpacing: "3px",
  cursor: "pointer",
};