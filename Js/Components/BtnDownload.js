export default function BtnDownload() {
  const $btnDownload = document.createElement("a");
  $btnDownload.classList.add("home--btnDownload");
  $btnDownload.href = "/assets/Jano Martino.pdf";
  $btnDownload.download = "Jano Martino";
  $btnDownload.textContent = "Descargar Cv";

  return $btnDownload;
}
