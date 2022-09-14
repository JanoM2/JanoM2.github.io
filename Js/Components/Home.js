import Picture from "./Picture.js";
import HomeTitle from "./HomeTitle.js";
import Icons from "./Icons.js";
import BtnDownload from "./BtnDownload.js";

export default function Home() {
  const $home = document.createElement("section");
  $home.classList.add("home");
  $home.id = "home";
  $home.appendChild(Picture());
  $home.appendChild(HomeTitle());
  $home.appendChild(Icons("home"));
  $home.appendChild(BtnDownload());

  return $home;
}
