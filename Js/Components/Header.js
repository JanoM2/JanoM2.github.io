import Menu from "./Menu.js";
import BtnMenu from "./BtnMenu.js";
import { BtnScrollTop } from "./BtnScrollTop.js";

export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Menu());
  $header.appendChild(BtnMenu());
  $header.appendChild(BtnScrollTop());

  return $header;
}
