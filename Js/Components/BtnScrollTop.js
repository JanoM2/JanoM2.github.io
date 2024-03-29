export default function BtnScrollTop() {
  const $body = document.querySelector("body");
  const $scrollTop = document.querySelector(".scrollTop");

  window.addEventListener("scroll", () => {
    let limite = $body.getBoundingClientRect();
    if (limite.y < -200) {
      $scrollTop.classList.remove("hidden");
    } else {
      $scrollTop.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".scrollTop") || e.target.matches(".arrow-5")) {
      window.scrollTo(0, 0);
    }
  });
}
