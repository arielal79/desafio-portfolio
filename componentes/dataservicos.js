function addCards(el, titulo, parrafo, img) {
  const cards = document.createElement(`div`);
  cards.innerHTML = `<div class="servicios-elementos-contenedor">
    <img class="servicios-logo" src=${img} alt="${titulo}" />
    <h3 class="servicios-subtitulo">${titulo}</h3>
    <p class="servicios-parrafo">${parrafo}
    </p>
    
  </div> `;
  el.appendChild(cards);
}

function addCardsConUrl(el, titulo, parrafo, img, url) {
  const cards = document.createElement(`div`);
  cards.innerHTML = `<div class="servicios-elementos-contenedor">
    <img class="servicios-logo" src=${img} alt="${titulo}" />
    <h3 class="servicios-subtitulo">${titulo}</h3>
    <p class="servicios-parrafo">${parrafo}
    </p>
    <a class="servicios-url" href="http://apx.school">
    <h3 class="servicios-subtitulo">${url}<h3>
    </a>
  </div> `;
  el.appendChild(cards);
}

function procesDataServicios(datos) {
  datos.items.map((item) => {
    let titulo;
    let parrafo;
    let img;

    if (item.sys.contentType.sys.id == "servicios") {
      console.log(item);
      titulo = item.fields.titulo;
      parrafo = item.fields.parrafo;

      for (let i = 0; i < datos.includes.Asset.length; i++) {
        const element = datos.includes.Asset[i];
        if (element.fields.title == titulo) {
          img = element.fields.file.url;
        }
      }

      let posicionCards = document.querySelector(".servicios-contenedor");
      addCards(posicionCards, titulo, parrafo, img);
    }
  });
}

function procesDataPortfolio(datos) {
  datos.items.map((item) => {
    let titulo;
    let parrafo;
    let img;
    let url;
    if (item.sys.contentType.sys.id == "portfolio") {
      console.log(item);
      titulo = item.fields.titulo;
      parrafo = item.fields.parrafo;
      url = item.fields.url;
      for (let i = 0; i < datos.includes.Asset.length; i++) {
        const element = datos.includes.Asset[i];
        if (element.fields.title == titulo) {
          img = element.fields.file.url;
        }
      }

      let posicionCards = document.querySelector(".servicios-contenedor");
      addCardsConUrl(posicionCards, titulo, parrafo, img, url);
    }
  });
}

function procesData(datos) {
  datos.items.map((item) => {
    let titulo;
    let parrafo;
    let img;

    if (item.sys.contentType.sys.id == "desafioModulo4") {
      console.log(item);
      titulo = item.fields.titulo;
      parrafo = item.fields.parrafo;
      for (let i = 0; i < datos.includes.Asset.length; i++) {
        const element = datos.includes.Asset[i];
        if (element.fields.title == titulo) {
          img = element.fields.file.url;
        }
      }

      let posicionCards = document.querySelector(".servicios-contenedor");
      addCards(posicionCards, titulo, parrafo, img);
    }
  });
}
