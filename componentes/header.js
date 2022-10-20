function addHeader(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="menu-hamburguesa__conteiner">
  <div class="cierra-menu">
    <img class="img-cierra-menu" src="./img/cerrar.png" />
  </div>
  <div class="portfolio">
    <a href="./portfolio.html"> Portafolio </a>
  </div>
  <div class="servicios">
    <a href="./servicios.html"> Servicios </a>
  </div>

<div class="contacto">
  <a href="./contacto.html"> Contacto </a>
</div>
</div>
<div class="header-components">
<div class="header__conteiner-logo">
  <a href="./index.html">
    <img class="header-logo" src="./img/logo.png" />
  </a>
</div>
<div class="header__conteiner-menu">
  <img class="header-menu" src="./img/burger.png" />
</div>
<div class="desktop__menu">
  <a class="desktop__portfolio" href="./portfolio.html">Portafolio</a>
  <a class="desktop__servicios" href="./servicios.html">Servicios</a>
  <a class="desktop__contacto" href="./contacto.html">Contacto</a>
</div>`;
  el.appendChild(headerEl);
  abrirMenu();
  cerrarMenu();
}

function cerrarMenu() {
  const cerrarMenu = document.querySelectorAll(".img-cierra-menu");

  for (let i = 0; i < cerrarMenu.length; i++) {
    cerrarMenu[i].addEventListener("click", () => {
      const conteinerMenu = document.querySelectorAll(
        ".menu-hamburguesa__conteiner"
      );
      for (let i = 0; i < conteinerMenu.length; i++) {
        conteinerMenu[i].style.transform = "translateY(-2000px)";
      }
    });
  }
}

function abrirMenu() {
  const abrirMenu = document.querySelectorAll(".header-menu");

  for (let i = 0; i < abrirMenu.length; i++) {
    abrirMenu[i].addEventListener("click", function () {
      const conteinerMenu = document.querySelectorAll(
        ".menu-hamburguesa__conteiner"
      );
      for (let i = 0; i < conteinerMenu.length; i++) {
        conteinerMenu[i].style.transform = "translateY(0)";
      }
    });
  }
}
