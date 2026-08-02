import { useEffect, useState } from "react";
import type { CursorPosition } from "../types";

const CLICKABLE_SELECTOR =
  "button, a, .nav-link, .sidebar-link, .project-card-container, .contact-item, .edu-card, .link-btn";

export function useCustomCursor() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorHover(true);
    const handleMouseLeave = () => setCursorHover(false);

    const clickables = document.querySelectorAll(CLICKABLE_SELECTOR);

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return {
    cursorPos,
    cursorHover,
  };
}
