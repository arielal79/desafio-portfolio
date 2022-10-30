function agregarHeader() {
  const headerBienvenida = document.querySelector(".header-component");
  addHeader(headerBienvenida);
  const headerServicios = document.querySelector(".header__servicios");
  addHeader(headerServicios);
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
      //envio datos a procesDATO -para servicios
      procesDataServicios(dato);
    });
  });
}

function main() {
  agregarHeader();
  contenfulFetch();
  agregarFooter();
}

main();
