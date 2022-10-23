function agregarHeader() {
  const headerContacto = document.querySelector(".header-component");
  addHeader(headerContacto);
}

function agregarForm() {
  const formulario = document.querySelector(".form__conteiner");
  contacto(formulario);
}

function agregarFooter() {
  const footer = document.querySelector(".footer__conteiner");
  addFooter(footer);
}

function main() {
  agregarHeader();
  agregarForm();
  agregarFooter();
}

main();
