import { useState } from "react";
import type { PortfolioViewData, Translations } from "../types";

interface ProjectsProps {
  data: PortfolioViewData;
  t: Translations;
}

export function Projects({ data, t }: ProjectsProps) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="proyectos" className="section">
      <p className="section-label">{t.sectionLabels.projects}</p>
      <h2 className="section-title">{t.sectionTitles.projects}</h2>
      <div className="projects-grid">
        {data.projects.map((p, i) => (
          <div
            key={i}
            className={`project-card-container${flipped[i] ? " is-flipped" : ""}`}
            onClick={() => toggleFlip(i)}
          >
            <div className="project-card-scale">
              <div className={`project-card ${flipped[i] ? "flipped" : ""}`}>
                <div className="project-card-front">
                  <div className="click-to-discover">{t.clickToDiscover}</div>
                </div>
                <div className="project-card-back">
                  <div className="project-header">
                    <div className="project-emoji">{p.emoji}</div>
                    {p.url ? (
                      <div className="project-name with-link">
                        {p.name} <span className="external-link-icon">↗</span>
                      </div>
                    ) : (
                      <div className="project-name">{p.name}</div>
                    )}
                  </div>
                  <div className="project-desc">{p.description}</div>
                  <div className="project-tech">
                    {p.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.preview}
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.code}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
