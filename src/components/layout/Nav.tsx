import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../utils/constants";
import { goToSection } from "../../utils/goToSection";
import type { Lang, Theme, Translations } from "../../types";

interface NavProps {
  active: string;
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  theme: Theme;
  toggleTheme: () => void;
}

export function Nav({ active, lang, setLang, t, theme, toggleTheme }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleScrollToSection = (id: string) => {
    goToSection(navigate, pathname, id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div
        className="nav-logo"
        title="Ir hacia Arriba"
        onClick={() => goToSection(navigate, pathname)}
      >
        Jano Martino<span>.</span>
      </div>

      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`nav-link ${active === item.id ? "active" : ""}`}
            onClick={() => handleScrollToSection(item.id)}
          >
            {t.nav[item.key]}
          </div>
        ))}
      </div>

      <button
        className="hamburger-btn icon-btn"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      <div className="nav-actions">
        <button
          className="icon-btn lang-btn"
          onClick={() => setLang(lang === "en" ? "es" : "en")}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
        <button className="icon-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => handleScrollToSection(item.id)}
            >
              {t.nav[item.key]}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
