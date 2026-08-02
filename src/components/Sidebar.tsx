import type { PortfolioViewData, Translations } from "../types";

interface SidebarProps {
  data: PortfolioViewData;
  t: Translations;
}

export function Sidebar({ data, t }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-avatar-container">
        <img
          src={data.profile_image}
          alt="Profile Image"
          className="sidebar-avatar"
        />
      </div>
      <h1 className="sidebar-name">
        {data.name}
        <span>.</span>
      </h1>
      <p className="sidebar-role">{data.role}</p>
      <div className="sidebar-badge">
        <div className="sidebar-badge-dot" />
        {t.available}
      </div>

      <div className="sidebar-about">
        <p>{t.aboutSideBar}</p>
      </div>

      <div className="sidebar-links">
        <a href={`mailto:${data.email}`} className="sidebar-link">
          ✉️ {t.contactMe}
        </a>
        <a
          href={data.cv}
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          📄 {t.downloadCV}
        </a>
        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          💻 GitHub
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="sidebar-link"
        >
          🔗 LinkedIn
        </a>
      </div>
    </aside>
  );
}
