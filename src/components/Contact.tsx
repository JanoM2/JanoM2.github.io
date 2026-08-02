import { useState } from "react";
import type { ContactFormState, PortfolioViewData, Translations } from "../types";

interface ContactProps {
  data: PortfolioViewData;
  t: Translations;
}

export function Contact({ data, t }: ContactProps) {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section">
      <p className="section-label">{t.sectionLabels.contact}</p>
      <h2 className="section-title">{t.sectionTitles.contact}</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <a href={`mailto:${data.email}`} className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{data.email}</div>
            </div>
          </a>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">{t.locationLabel}</div>
              <div className="contact-value">{data.location}</div>
            </div>
          </div>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">💻</div>
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">@JanoM2</div>
            </div>
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">🔗</div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">janomartino</div>
            </div>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder={t.name}
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder={t.email}
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            required
          />
          <textarea
            className="form-input"
            rows={5}
            placeholder={t.message}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            required
          />
          {sent ? (
            <div className="sent-msg">{t.sentMsg}</div>
          ) : (
            <button type="submit" className="btn-primary">
              {t.send}
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
