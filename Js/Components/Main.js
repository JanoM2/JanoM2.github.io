import Home from "./Home.js";
import SobreMi from "./SobreMi.js";
import EducCurso from "./EducCurso.js";
import Proyectos from "./Proyectos.js";
import Contacto from "./Contacto.js";

export default function Main() {
  const $main = document.createElement("main");
  $main.classList.add("main");
  $main.id = "home";
  $main.appendChild(Home());
  $main.appendChild(SobreMi());
  $main.appendChild(EducCurso());
  $main.appendChild(Proyectos());
  $main.appendChild(Contacto());

  return $main;
}
