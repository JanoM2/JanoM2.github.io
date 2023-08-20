import Hr from "./Hr.js";
import { Title } from "./Title.js";
import { Cards } from "./Cards.js";

export default function EducCurso() {
  // CreateElement
  const $educCurso = document.createElement("section"),
    $articleCards = document.createElement("article"),
    $articleCaruosel = document.createElement("article"),
    $articleSkills = document.createElement("article");

  // Adding Classes and one Id
  $educCurso.id = "educacionCursos";
  $educCurso.classList.add("eduCursos");
  $articleCards.setAttribute("data-aos", "fade-up");
  $articleCards.classList = `eduCursos--article-cursos`;
  $articleCaruosel.classList = `eduCursos--article-certificados`;
  $articleSkills.classList = `eduCursos--article-skills`;

  // AppendChild
  $educCurso.appendChild(Hr());
  $educCurso.appendChild(Title("eduCursos", "Educacion/Cursos"));
  {
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "Jon Mircha",
        "https://aprendejavascript.org/",
        "https://jonmircha.com/img/kEnAi.svg"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "Platzi",
        "https://platzi.com/",
        "https://static.platzi.com/media/platzi-isotipo@2x.png"
      )
    );

    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "FreeCodeCamp",
        "https://www.freecodecamp.org/",
        "https://play-lh.googleusercontent.com/MoaYYQjGtmGLhG9HbjCDKyj44kwHj1HfbCI2Am70elRm35vJ-u4y4X5uEJjP97MAAsU"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "Carlos Azaustre",
        "https://carlosazaustre.es/",
        "https://public-tidycal.s3.us-west-2.amazonaws.com/profile_pictures/pvKjF5f86PON6toPrGLDvOz8N0Qo6IqAvsFCAKCP.png"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "MiduDev",
        "https://midu.dev/",
        "https://midu.dev/logo.png"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "Soy Dalto",
        "https://www.youtube.com/c/soydalto",
        "https://yt3.ggpht.com/jHpWdf9qWNdrCjxfQxCxR0aiYY9Y1IO7s6Jwlk-OgKxS8nzjEMffakE6mdOdp2u22R3130U0nQ=s88-c-k-c0x00ffffff-no-rj"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "Future Learn",
        "https://www.futurelearn.com/",
        "https://assets.bizclikmedia.net/1800/843a95c16430093c85ffe702599b6280:eb2d29ce1e13fb34cceebd9cb53b4aa7/951af173-d392-45ec-b5e7-548687b8c070.png"
      )
    );
    $articleCards.appendChild(
      Cards(
        "eduCursos",
        "EFSET",
        "https://www.efset.org/",
        "//a.storyblok.com/f/71234/103x24/da9ab91cbd/efset-logo_black.svg"
      )
    );
  }
  $educCurso.appendChild($articleCards);

  $educCurso.appendChild(Title("eduCursos", "Certificados"));
  $articleCaruosel.innerHTML = `
  <div class="eduCursos--carousel">

    <figure class="eduCursos--certified  activado">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 1.png" alt="certified">
      <a target="_blank" href="https://www.freecodecamp.org/certification/Jano_Martino/javascript-algorithms-and-data-structures">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 2.png" alt="certified">
      <a target="_blank" href="https://drive.google.com/file/d/1DmIml9twB8KwPUHEr7BHgUzG-l-yLRDX/view">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 3.png" alt="certified">
      <a target="_blank" href="https://drive.google.com/file/d/1KAG0kVZZk0KvTlnWuS3g-l8o5vi4K9jA/view">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 4.png" alt="certified">
      <a target="_blank" href="https://drive.google.com/file/d/1nSRPDILrsIFm9_JJTyq6lRyIobOPACMZ/view">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 5.png" alt="certified">
      <a target="_blank" href="https://www.efset.org/cert/aG7wp5">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 6.png" alt="certified">
      <a target="_blank" href="https://www.futurelearn.com/certificates/gj5n72d">Enlace al Certificado</a>
    </figure>
    <figure class="eduCursos--certified ">
      <img class="eduCursos--certified-img" src="/assets/certified/certified 7.png" alt="certified">
      <a target="_blank" href="https://www.futurelearn.com/certificates/kmqgugg">Enlace al Certificado</a>
    </figure>

  </div>

  <button class="prev" disabled>&#10094;</button>
  <button class="next">&#10095;</button>
`;
  $educCurso.appendChild($articleCaruosel);

  $educCurso.appendChild(Title("eduCursos", "Skills"));
  $articleSkills.innerHTML = `
    <div class="eduCursos--icons-container">
      <span class="eduCursos--icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="144px" height="144px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
      </span>
      <span class="eduCursos--icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="144px" height="144px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
      </span>
      <span class="eduCursos--icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="144px" height="144px" baseProfile="basic"><path fill="#f7df1e" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"/></svg>
      </span>
      <span class="eduCursos--icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style=" fill:#000000;"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon></svg>
      </span>
      <span class="eduCursos--icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="144px" height="144px"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"/></svg>
      </span>
      <span class="eduCursos--icon">
          <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="90px" height="90px" fill="#ffff"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
      </span>
    </div>
  `;
  $educCurso.appendChild($articleSkills);

  // DATA AOS

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

    const observer = new IntersectionObserver(callback, { threshold: 0.2 });
    const $element = document.querySelector(".eduCursos--article-cursos");
    observer.observe($element);
  });

  return $educCurso;
}

// Movimiento del Carousel

let i = 0,
  contador = 0,
  sum = Math.abs(contador);

document.addEventListener("click", (e) => {
  let figure = document.querySelectorAll(".eduCursos--certified");

  if (e.target.matches(".prev")) {
    document.querySelector(
      ".eduCursos--certified.activado"
    ).style.transform = `translateX(0%)`;

    figure[i].classList.remove("activado");
    i--;
    sum = Math.abs(sum) - 100;
    figure[i].classList.add("activado");

    if (sum < figure.length * 100 - 100)
      document.querySelector(".next").disabled = false;
    if (sum <= 0) {
      document.querySelector(".prev").disabled = true;
    } else {
      document.querySelector(".prev").disabled = false;
    }
  }

  if (e.target.matches(".next")) {
    figure[i].classList.remove("activado");
    i++;
    sum += 100;
    figure[i].classList.add("activado");

    document.querySelector(
      ".eduCursos--certified.activado"
    ).style.transform = `translateX(-${sum}%)`;

    if (sum > 0) document.querySelector(".prev").disabled = false;
    if (sum >= figure.length * 100 - 100) {
      document.querySelector(".next").disabled = true;
    } else {
      document.querySelector(".next").disabled = false;
    }
  }
});
