export default function IntervalHomePicture() {
    window.addEventListener("DOMContentLoaded", async () => {
        const $element = document.querySelector(".home--picture");

        setInterval(() => {
            $element.classList.toggle("active");
        }, 3000);
    });
};

