import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../utils/constants";

export function useActiveSection(): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
        (section): section is HTMLElement => section !== null,
      );
      let current = "";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 150) current = section.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}
