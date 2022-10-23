function agregarHeader() {
  const headerComponet = document.querySelector(".header-component");
  addHeader(headerComponet);
}

function agregarForm() {
  const formulario = document.querySelector(".form__conteiner");
  contacto(formulario);
}

function agregarFooter() {
  const footer = document.querySelector(".footer__conteiner");
  addFooter(footer);
}

function contenfulFetch() {
  const promesa = fetch(
    `
    https://cdn.contentful.com/spaces/sira3rgjcuk8/environments/master/entries/?access_token=_90XOUJILpmOL958dCQI0xTSsX_-kGlXQiSQ6AFG3oI`
  );
  promesa.then((res) => {
    res.json().then((dato) => {
      procesData(dato);
    });
  });
}

function main() {
  agregarHeader();
  contenfulFetch();
  agregarForm();
  agregarFooter();
}

main();
