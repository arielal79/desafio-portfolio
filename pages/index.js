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
    https://cdn.contentful.com/spaces/ueuv9mhnfwgs/environments/master/entries/?access_token=Ia6BfYDsRlmnDhrhVWQE6qMOLMp2bnbpryiNP81-GPc`
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
