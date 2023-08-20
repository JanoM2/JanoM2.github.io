export default function Proyectos() {
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
}
