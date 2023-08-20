export default function EducCurso() {
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
