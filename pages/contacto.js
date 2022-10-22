function agregarHeader() {
  const headerContacto = document.querySelector(".header-component");
  addHeader(headerContacto);
}

function agregarFooter() {
  const footer = document.querySelector(".footer__conteiner");
  addFooter(footer);
}

function main() {
  agregarHeader();
  agregarFooter();
}

main();
