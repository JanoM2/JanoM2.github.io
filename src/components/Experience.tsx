import type { PortfolioViewData, Translations } from "../types";

interface ExperienceProps {
  data: PortfolioViewData;
  t: Translations;
}

export function Experience({ data, t }: ExperienceProps) {
  return (
    <section id="experiencia" className="section">
      <p className="section-label">{t.sectionLabels.experience}</p>
      <h2 className="section-title">{t.sectionTitles.experience}</h2>
      <div className="exp-list">
        {data.experience.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-name">{exp.name}</div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="exp-company-link"
                    >
                      {exp.url_name}{" "}
                      <span className="external-link-icon">↗</span>
                    </a>
                  ) : (
                    exp.role
                  )}
                </div>
              </div>
              <span className="exp-period">
                {exp.period.replace(/Presente|Present/g, t.period)}
              </span>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <div className="exp-tech">
              {exp.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
