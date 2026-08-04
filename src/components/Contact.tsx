import { useState } from "react";
import type { ContactFormState, PortfolioViewData, Translations } from "../types";

interface ContactProps {
  data: PortfolioViewData;
  t: Translations;
}

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const FORMSPREE_ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : "";

export function Contact({ data, t }: ContactProps) {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
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
            name="name"
            placeholder={t.name}
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            required
            disabled={status === "sending"}
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={t.email}
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            required
            disabled={status === "sending"}
          />
          <textarea
            className="form-input"
            name="message"
            rows={5}
            placeholder={t.message}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            required
            disabled={status === "sending"}
          />
          {status === "sent" ? (
            <div className="sent-msg">{t.sentMsg}</div>
          ) : (
            <>
              <button
                type="submit"
                className="btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? t.sending : t.send}
              </button>
              {status === "error" && (
                <div className="form-error">{t.errorMsg}</div>
              )}
            </>
          )}
        </form>
      </div>
    </section>
  );
}
