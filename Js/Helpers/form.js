export function ContactForm() {
  const $form = document.createElement("form");
  $form.classList.add("contact-form");

  $form.innerHTML = `
  <input name="name" class="name" type="text" placeholder="Escribe tu Nombre"
  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" title="Nombre solo acepta letras y espacios en blanco" required
  data-form autocomplete="off">

  <input name="email" class="email" type="email" placeholder="Escribe tu email" title='Email incorrecto'
  pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required data-form autocomplete="off">

  <input name="subject" class="subject" type="text" placeholder="Asunto a Tratar" title="Campo sin rellenar"
  required data-form autocomplete="off">

  <textarea name="comment" class="textarea" placeholder="Escribe tus comentarios" rows="5"
  title="Tu comentario no puede superar los 255 caracteres" data-pattern="^.{1,255}$" required
  data-form autocomplete="off"></textarea>
  
  <button class="contactBtn" type="submit">Enviar</button>
  
  <div class="ldr none"></div>
  
  <div class="contact-form-response none">
    <p>Los datos han sido enviados</p>
  </div>
  `;

  function validationsForm() {
    const d = document;
    const $form = d.querySelector(".contact-form");
    let $input = d.querySelectorAll(".contact-form [data-form]");

    $input.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.className;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target;
        let pattern = $input.pattern || $input.dataset.pattern;

        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.classList).classList.add("is-active")
            : d.getElementById($input.classList).classList.remove("is-active");
        }

        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.classList).classList.add("is-active")
            : d.getElementById($input.classList).classList.remove("is-active");
        }
      }
    });

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      fetch("https://formsubmit.co/ajax/martinojano0@gmail.com", {
        method: "POST",
        body: new FormData($form),
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const $response = d.querySelector(".contact-form-response"),
            $loader = d.querySelector(".ldr");
          $loader.classList.remove("none");

          setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => {
              $response.classList.add("none");
            }, 3000);
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
          $form.insertAdjacentHTML("afterend", `<p class="error">${err}</p>`);
        });
    });
  }

  setTimeout(() => validationsForm(), 100);

  return $form;
}
