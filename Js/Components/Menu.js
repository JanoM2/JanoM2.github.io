export default function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("header--menu");

  $menu.innerHTML = `
  <a href="#home">Jano Martino</a>
  <div class="header--menu-div-container">
  <a href="#sobreMi">Sobre Mi</a>
  <a href="#educacionCursos">Educacion/Cursos</a>
  <a href="#proyectos">Proyectos</a>
  <a href="#contacto">Contacto</a>
  </div>
  `;

  return $menu;
}
