export function Cards(section, name, href, src) {
  const $divContainer = document.createElement("div");
  $divContainer.classList.add(`${section}--cards`);

  if (section === "proyectos")
    $divContainer.setAttribute("data-aos", "flip-up");

  $divContainer.innerHTML = `
  <a href="${href}" target="_blank">
  <img class="${section}-img" src="${src}" alt="${name}"></img>
  </a>
    <h3 class="${section}-h3">${name}</h3>
    <a class="${section}-fuente" href="${href}" target="_blank">Ver Más</a>
    `;

  return $divContainer;
}
