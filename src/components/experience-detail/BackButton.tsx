import { useLocation, useNavigate } from "react-router-dom";
import { goToSection } from "../../utils/goToSection";
import type { Translations } from "../../types";

interface BackButtonProps {
  t: Translations;
}

export function BackButton({ t }: BackButtonProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button
      type="button"
      className="exp-detail-back"
      onClick={() => goToSection(navigate, pathname, "experiencia")}
    >
      ← {t.backToExperience}
    </button>
  );
}
