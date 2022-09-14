export function BtnScrollTop() {
  const $body = document.querySelector("body"),
    $scrollTop = document.createElement("a");
  $scrollTop.classList = "scrollTop hidden";
  $scrollTop.textContent = "🡩";

  window.addEventListener("scroll", () => {
    let limite = $body.getBoundingClientRect();
    if (limite.y < -200) {
      $scrollTop.classList.remove("hidden");
    } else {
      $scrollTop.classList.add("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".scrollTop")) {
      window.scrollTo(0, 0);
    }
  });

  return $scrollTop;
}
