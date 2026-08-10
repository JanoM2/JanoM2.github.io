import type { Lang, PortfolioViewData } from "../types";
import { portfolioData } from "../data/portfolio";

function pickLocalized(
  lang: Lang,
  es?: string,
  en?: string,
): string | undefined {
  const value = lang === "en" ? en ?? es : es ?? en;
  return value || undefined;
}

export function getPortfolioViewData(lang: Lang): PortfolioViewData {
  const { cv_es, cv_en, experience, projects, ...rest } = portfolioData;

  return {
    ...rest,
    cv: pickLocalized(lang, cv_es, cv_en) ?? cv_es,
    experience: experience.map(
      ({ descriptionEn, url_name_es, url_name_en, ...item }) => ({
        ...item,
        url_name: pickLocalized(lang, url_name_es, url_name_en),
        description: lang === "en" ? descriptionEn : item.description,
      }),
    ),
    projects: projects.map(({ descriptionEn, ...item }) => ({
      ...item,
      description: lang === "en" ? descriptionEn : item.description,
    })),
  };
}
