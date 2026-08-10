import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Nav } from "./components/layout/Nav";
import { CustomCursor } from "./components/common/CustomCursor";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage";
import { useActiveSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import { useCustomCursor } from "./hooks/useCustomCursor";
import { getTranslations } from "./data/translations";
import { getPortfolioViewData } from "./utils/getPortfolioViewData";
import type { Lang } from "./types";

function HomeContent({
  data,
  t,
}: {
  data: ReturnType<typeof getPortfolioViewData>;
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <>
      <Experience data={data} t={t} />
      <hr className="section-divider" />
      <Projects data={data} t={t} />
      <hr className="section-divider" />
      <Education data={data} t={t} />
      <hr className="section-divider" />
      <About data={data} t={t} />
      <hr className="section-divider" />
      <Contact data={data} t={t} />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const active = useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const { cursorPos, cursorHover } = useCustomCursor();
  const t = getTranslations(lang);
  const data = getPortfolioViewData(lang);

  return (
    <>
      <Nav
        active={active}
        lang={lang}
        setLang={setLang}
        t={t}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main">
        <Sidebar data={data} t={t} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeContent data={data} t={t} />} />
            <Route
              path="/experience/:slug"
              element={<ExperienceDetailPage lang={lang} t={t} />}
            />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
      <CustomCursor cursorHover={cursorHover} cursorPos={cursorPos} />
    </>
  );
}
