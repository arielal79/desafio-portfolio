function contacto(el) {
  const formularioEl = document.createElement("form");
  formularioEl.innerHTML = `<section class="section__mail-conteiner">
      <div class="mail__titilo">
        <h2>Contacto</h2>
      </div>
      <div class="mail__form">
        <div class="label">
          <label class="mail-label" for="nombre"
            >Nombre
            <input
              class="nombre__form-input"
              type="text"
              name="nombre"
              id="nombre"
            />
          </label>
        </div>
        <div class="label">
          <label class="mail-label" for="email"
            >email
            <input
              class="email__form-input"
              type="email"
              name="email"
              id="email"
            />
          </label>
        </div>
        <div class="label textarea">
            <label class="mail-label textarea" for="textarea"
            >Mensaje
            
            <textarea name="textarea" id="" cols="40" rows="10"
            class="email__form-input textarea"
            type="textarea"
            name="textarea"
            id="textarea">
        </textarea>
            
         
        </div>
        <div class="mail__form-button-conteiner">
          <button type="submit" class="mail__form-button">Enviar</button>
        </div>
      </div>
    </section>`;
  el.appendChild(formularioEl);
  ///escucha evento submit del formulario
  formularioEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.textarea.value;
    enviarMail(nombre, email, mensaje);
    enviarMailRemitente(nombre, email, mensaje);
    formularioEl.reset();
    modalEnviado();
    setTimeout(() => {
      location.reload();
    }, 2000);
  });
}
////enviar mail desde api apx

function enviarMail(nombre, email, mensaje) {
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      to: "alariel739@gmail.com",
      message: `Nombre:${nombre}
         Email:${email}
         Mensaje:${mensaje}`,
    }),
  });
}
function enviarMailRemitente(nombre, email, mensaje) {
  fetch("https://apx-api.vercel.app/api/utils/dwf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      to: `${email}`,
      message: `${nombre} -
        - Sus datos fueron enviados, gracias por comunicarse con nosotros. `,
    }),
  });
}

function modalEnviado() {
  const dondevaModal = document.querySelector(".form__conteiner");
  const modal = document.createElement("div");
  modal.innerHTML = `<div class="modal-conteiner" >
    <div>
    <img class="modal-img" src="./img/mensaje-enviado.gif" alt="enviado" />
    </div>
    
    </div>`;
  dondevaModal.appendChild(modal);
}
