import HomeTitle from "./Components/HomeTitle.js";
import BtnMenu from "./Components/BtnMenu.js";
import BtnScrollTop from "./Components/BtnScrollTop.js";
import SobreMi from "./Components/SobreMi.js";
import EducCurso from "./Components/EducCurso.js";
import Proyectos from "./Components/Proyectos.js";
import IntervalHomePicture from "./Components/IntervalHomePicture.js"
import { ContactForm } from "../Js/Helpers/form.js";

export default function App() {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("#root").classList.remove("blur");
  }, 400);

  HomeTitle();
  BtnMenu();
  BtnScrollTop();
  SobreMi();
  EducCurso();
  Proyectos();
  ContactForm();
  IntervalHomePicture()
}
