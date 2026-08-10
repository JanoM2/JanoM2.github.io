import type { NavigateFunction } from "react-router-dom";

function scrollToSection(id?: string) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function goToSection(
  navigate: NavigateFunction,
  pathname: string,
  id?: string,
) {
  const isHome = pathname === "/" || pathname === "";

  if (isHome) {
    scrollToSection(id);
    return;
  }

  navigate("/");
  window.setTimeout(() => scrollToSection(id), 50);
}
