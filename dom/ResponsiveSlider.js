const d = document;

export function responsiveSlider(img, next, prev) {
  let figure = d.querySelectorAll(img);
  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target.matches(next)) {
      e.preventDefault();
      figure[i].classList.remove("activado");
      i++;
      if (i >= figure.length) i = 0;
      figure[i].classList.add("activado");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(prev)) {
      e.preventDefault();
      figure[i].classList.remove("activado");
      i--;
      if (i < 0) i = figure.length - 1;
      figure[i].classList.add("activado");
    }
  });
}
