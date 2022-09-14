import { Li } from "./Li.js";

export function Article(article) {
  const $article = document.createElement("article");
  $article.classList = `${article}--article`;

  $ul.appendChild(
    Li(
      `<b>Me encanta programar</b> y la manera en que con un poco de código se puede hacer de todo, desde hacer un diseño bonito hasta crear algo totalmente dinámico e interactivo con el usuario.`
    )
  );
  $ul.appendChild(
    Li(
      `También me gustan mucho los deportes y mi Favorito es el <b>Básquet</b>.`
    )
  );
  $ul.appendChild(
    Li(
      `Además disfruto mucho de ver películas y las que más me gustan son las del genero de <b>terror y drama</b>`
    )
  );
  $article.appendChild($ul);

  return $article;
}
