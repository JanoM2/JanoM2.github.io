import Hr from "./Hr.js";
import { Title } from "./Title.js";
import { Cards } from "./Cards.js";

export default function Proyectos() {
  const $proyectos = document.createElement("section"),
    $article = document.createElement("article");

  $proyectos.id = "proyectos";
  $proyectos.classList.add("proyectos");
  $article.classList.add("proyectos--article");

  $proyectos.appendChild(Hr());
  $proyectos.appendChild(Title("proyectos", "Proyectos"));
  $article.appendChild(
    Cards(
      "proyectos",
      "DOM-Exercises",
      "https://dom-exercises.000webhostapp.com/",
      "/assets/proyects/dom.png"
    )
  );
  $article.appendChild(
    Cards(
      "proyectos",
      "Pokemon",
      "https://codepen.io/janom2/pen/XWELWrN",
      "/assets/proyects/pokemon.png"
    )
  );
  $article.appendChild(
    Cards(
      "proyectos",
      "TV Show",
      "https://codepen.io/janom2/pen/JjLQPzN",
      "/assets/proyects/tvshow.png"
    )
  );
  $article.appendChild(
    Cards(
      "proyectos",
      "WordPress API",
      "https://codepen.io/janom2/pen/gOeNOYQ",
      "/assets/proyects/wordpress api.png"
    )
  );
  $article.appendChild(
    Cards(
      "proyectos",
      "Instagram Design",
      "https://codepen.io/janom2/pen/OJvKJrK",
      "/assets/proyects/ig.png"
    )
  );
  $article.appendChild(
    Cards(
      "proyectos",
      "Who's That Pokemon?",
      "https://game-whos-that-pokemon.netlify.app/",
      "/assets/proyects/guess pokemon.png"
    )
  );

  $proyectos.appendChild($article);

  document.addEventListener("scroll", async () => {
    let options = {
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        } else {
          null;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll(".proyectos--cards").forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  });

  return $proyectos;
}
