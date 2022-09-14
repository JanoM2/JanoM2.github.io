import Hr from "./Hr.js";
import { Title } from "./Title.js";

export default function SobreMi() {
  const $sobreMi = document.createElement("section"),
    $article = document.createElement("article"),
    $ul = document.createElement("ul");

  $sobreMi.id = "sobreMi";
  $sobreMi.classList.add("sobreMi");
  $article.classList = `sobreMi--article`;
  $ul.classList.add("sobreMi--ul");

  $sobreMi.appendChild(Hr());
  $sobreMi.appendChild(Title("sobreMi", "Sobre Mi"));
  $ul.innerHTML = `
  <li class="sobreMi--li" data-aos="fade-right">Hola Mundo, soy <b>Jano</b>, tengo 21 años y soy <b>Desarrollador FrontEnd Autodidacta</b>. Soy una persona <b>proactiva</b>, <b>organizada y responsable</b>, con buenas relaciones interpersonales. Cuento con muchísimas ganas de <b>encontrar</b> mi primer oportunidad IT.</li>
  <li class="sobreMi--li" data-aos="fade-left"><b>Me encanta programar</b> y la manera en que con un poco de código se puede <b>hacer de todo</b>, desde hacer un diseño bonito hasta crear algo totalmente dinámico e interactivo con el usuario.</li>
  <li class="sobreMi--li" data-aos="fade-right">También me gustan mucho los <b>deportes</b> y mi Favorito es el <b>Básquet</b>.</li>
  <li class="sobreMi--li" data-aos="fade-left">Además disfruto mucho de ver <b>películas</b> y las que más me gustan son las del genero de <b>terror y drama</b>.</li>
  `;

  $article.appendChild($ul);
  $sobreMi.appendChild($article);

  // mediaQuery

  document.addEventListener("scroll", async () => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        } else {
          null;
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 1 });
    document.querySelectorAll(".sobreMi--li").forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  });

  setTimeout(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      const li = document.querySelectorAll("li");
      li.forEach((el) => el.removeAttribute("data-aos"));
    }
  }, 1);

  return $sobreMi;
}
