import type { PortfolioViewData, Translations } from "../types";

interface AboutProps {
  data: PortfolioViewData;
  t: Translations;
}

export function About({ data, t }: AboutProps) {
  return (
    <section id="about" className="section">
      <p className="section-label">{t.sectionLabels.about}</p>
      <h2 className="section-title">{t.sectionTitles.about}</h2>

      <div className="about-content">
        {t.aboutMeText.map((p, i) => (
          <p key={i} className="about-text">
            {p}
          </p>
        ))}
      </div>

      <div className="about-skills">
        <p className="section-subtitle">{t.skillsLabel}</p>
        <div className="skills-grid">
          {data.skills.map((s) => (
            <span key={s} className="skill-tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
