export default function BtnMenu() {
  const d = document,
    $btnMenu = d.createElement("button");
  $btnMenu.classList = "header--btnMenu hamburger hamburger--3dx";

  $btnMenu.innerHTML = `
      <span class="header--btnMenu hamburger-box">
          <span class="header--btnMenu hamburger-inner"></span>
      </span>
      `;

  return $btnMenu;
}

// Abrir/Cerrar Menu Desplegable

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".header--btnMenu") ||
    (!e.target.matches(".header--btnMenu") &&
      !e.target.matches(".header--menu") &&
      !e.target.matches(".header--menu-div-container") &&
      document.querySelector(".header--menu.active"))
  ) {
    document.querySelector(".header--menu").classList.toggle("active");
    document.querySelector(".header--btnMenu").classList.toggle("is-active");
    document.querySelector("main").classList.toggle("blur");
  }
});
