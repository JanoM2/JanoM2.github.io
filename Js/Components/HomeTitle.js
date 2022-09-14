export default function HomeTitle() {
  const $homeTitle = document.createElement("div");
  $homeTitle.classList.add("home--title-container");

  $homeTitle.innerHTML = `
    <h1 class="home--title-h1" data-aos="zoom-in">Mi nombre es Jano Martino</h1>
    <h2 class="home--title-h2" data-aos="zoom-in">Y soy FrontEnd Developer</h2>
    `;

  window.addEventListener("DOMContentLoaded", async () => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("aos-animate");
          }, 500);
        } else {
          null;
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 1 });
    const $element = document.querySelectorAll("[data-aos=zoom-in]");
    $element.forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  });

  return $homeTitle;
}
