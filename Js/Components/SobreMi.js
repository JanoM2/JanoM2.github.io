export default function SobreMi() {
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

    const observer = new IntersectionObserver(callback, { threshold: 1 });
    document.querySelectorAll(".sobreMi--li").forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  });

  setTimeout(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      const li = document.querySelectorAll("li");
      li.forEach((el) => el.removeAttribute("data-aos"));
    }
  }, 1);
}
