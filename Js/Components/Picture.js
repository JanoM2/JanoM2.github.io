export default function Picture() {
  const $picture = document.createElement("img");
  $picture.classList.add("home--picture");
  $picture.src = "/assets/perfil.jpg";
  $picture.alt = "Foto de Perfil";

  return $picture;
}
