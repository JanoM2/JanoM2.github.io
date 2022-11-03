export default function BtnDownload() {
  const $btnDownload = document.createElement("a");
  $btnDownload.classList.add("home--btnDownload");
  $btnDownload.href = "/assets/Jano Martino - FrontEnd Dev en.pdf";
  $btnDownload.download = "Jano Martino - FrontEnd Dev";
  $btnDownload.textContent = "Descargar Cv";

  return $btnDownload;
}
