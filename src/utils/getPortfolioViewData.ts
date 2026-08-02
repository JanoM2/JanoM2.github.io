import type { Lang, PortfolioViewData } from "../types";
import { portfolioData } from "../data/portfolio";

type Describable = { description: string; descriptionEn: string };

function getDesc(item: Describable, lang: Lang): string {
  return lang === "en" ? item.descriptionEn : item.description;
}

export function getPortfolioViewData(lang: Lang): PortfolioViewData {
  return {
    ...portfolioData,
    experience: portfolioData.experience.map((item) => ({
      ...item,
      description: getDesc(item, lang),
    })),
    projects: portfolioData.projects.map((item) => ({
      ...item,
      description: getDesc(item, lang),
    })),
  };
}
