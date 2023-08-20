export default function HomeTitle() {
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
}
