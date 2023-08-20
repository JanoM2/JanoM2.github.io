import { Loader } from "./Components/Loader.js";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import { Footer } from "./Components/Footer.js";

export default function App() {
  const $root = document.getElementById("root");

  document.querySelector("body").appendChild(Loader());
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Footer());
  document.querySelector("#root").classList.add("blur");

  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("#root").classList.remove("blur");
  }, 500);
}
