import Hr from "./Hr.js";
import { Paragraph } from "./Paragraph.js";

export function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");

  $footer.appendChild(Hr());
  $footer.appendChild(Paragraph(`Hecho con ♥ por Jano Martino`));

  return $footer;
}
