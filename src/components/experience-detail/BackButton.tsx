import { useNavigate } from "react-router-dom";
import type { Translations } from "../../types";

interface BackButtonProps {
  t: Translations;
}

export function BackButton({ t }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    window.setTimeout(() => {
      document.getElementById("experiencia")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <button type="button" className="exp-detail-back" onClick={handleBack}>
      ← {t.backToExperience}
    </button>
  );
}
