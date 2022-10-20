function agregarHeader() {
  const headerComponet = document.querySelector(".header-component");
  addHeader(headerComponet);
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
