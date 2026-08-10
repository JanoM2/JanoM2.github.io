import { useParams } from "react-router-dom";
import { EXPERIENCE_DETAILS } from "../data/experience-details";
import { BackButton } from "../components/experience-detail/BackButton";
import { ImageGallery } from "../components/experience-detail/ImageGallery";
import type { Lang, Translations } from "../types";

interface ExperienceDetailPageProps {
  lang: Lang;
  t: Translations;
}

export function ExperienceDetailPage({ lang, t }: ExperienceDetailPageProps) {
  const { slug = "" } = useParams<{ slug: string }>();
  const detail = EXPERIENCE_DETAILS[slug];

  if (!detail) {
    return (
      <section className="section exp-detail">
        <h1 className="section-title">{t.experienceNotFound}</h1>
        <BackButton t={t} />
      </section>
    );
  }

  const title = lang === "en" ? detail.titleEn : detail.title;
  const description = lang === "en" ? detail.descriptionEn : detail.description;
  const features = lang === "en" ? detail.featuresEn : detail.features;
  const highlights = lang === "en" ? detail.highlightsEn : detail.highlights;

  return (
    <section className="section exp-detail">

      <div className="exp-detail-top">
        <BackButton t={t} />
      </div>

      <header className="exp-detail-header">
        <h1 className="section-title exp-detail-title">{title}</h1>
        <p className="exp-detail-description">{description}</p>
        {detail.url && (
          <a
            href={detail.url}
            target="_blank"
            rel="noreferrer"
            className="link-btn primary"
          >
            {t.preview}
          </a>
        )}
      </header>

      <div className="exp-detail-block">
        <h2 className="exp-detail-subtitle">{t.technologies}</h2>
        <div className="exp-tech">
          {detail.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="exp-detail-block">
        <h2 className="exp-detail-subtitle">{t.screenshots}</h2>
        <ImageGallery images={detail.images} title={title} />
      </div>

      <div className="exp-detail-split">
        <div className="exp-detail-block">
          <h2 className="exp-detail-subtitle">{t.features}</h2>
          <ul className="exp-detail-list">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="exp-detail-block">
          <h2 className="exp-detail-subtitle">{t.highlights}</h2>
          <ul className="exp-detail-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
