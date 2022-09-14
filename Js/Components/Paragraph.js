export function Paragraph(content) {
  const $p = document.createElement("p");
  $p.innerHTML = `${content}`;

  return $p;
}
