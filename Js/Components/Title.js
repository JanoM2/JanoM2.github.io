export function Title(section, word) {
  const $title = document.createElement("h1");
  $title.classList = `${section}--title`;
  $title.textContent = word;

  return $title;
}
