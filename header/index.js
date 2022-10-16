function createHeader(headerEl) {
  headerEl.innerHTML = `
    
    <h2 class="menu__logo">.ARNO()</h2>
    
    <div class="menu__detail">
        <div class="menu__bars-button"></div>
        <div class="menu__bars-button menu__middle-bar"></div>
        <div class="menu__bars-button"></div>
    </div>
    
    <div class="menu__modal">
    
        <h2 class="menu__title">Matías Arno</h2>
    
        <div class="menu__division-bars"></div>
        <div class="menu__list">
            <a class="menu__links" href="./portfolio.html"> Portfolio </a>
            <a class="menu__links" href="./services.html"> Services </a>
            <a class="menu__links" href="./contact.html"> Contact </a>
        </div>
        
        <div class="menu__division-bars"></div>
    </div>
    
    `;
}
function changeMenuStyleAccordingUrl(currentUrl, menuEl, menuElements) {
  if (currentUrl.includes("contact")) {
    menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.54)";
    menuElements.logo.style.color = "black";
    menuElements.links.forEach(
      (item) => (item.style.color = "rgb(72, 72, 72)")
    );
    menuElements.links.forEach(
      (item) => (item.style.backgroundColor = "#ffffff00")
    );
    menuElements.bars.forEach(
      (item) => (item.style.backgroundColor = "rgb(90, 90, 90)")
    );
  }
}

function controlMenu(menuEl, menuElements, currentUrl) {
  if (menuEl.style.height != "100vh") {
    menuEl.style.height = "100vh";
    menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.36)";
    menuEl.style.borderRadius = "0 0 0 54px";
    menuElements.modal.style.display = "flex";
    menuElements.middle_bar.style.flexGrow = "9";
    menuElements.middle_bar.style.backgroundColor = "#dfe6e99d";
    menuElements.middle_bar.style.margin = "1.8px 0";
  } else {
    menuEl.style.height = "81px";
    menuEl.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
    menuEl.style.borderRadius = "0";
    menuElements.modal.style.display = "none";
    menuElements.middle_bar.style.flexGrow = "1";
    menuElements.middle_bar.style.backgroundColor = "#ffeaa3";
    menuElements.middle_bar.style.margin = "4.5px 0";

    if (currentUrl.includes("contact")) {
      changeMenuStyleAccordingUrl(currentUrl, menuEl, menuElements);
    }
  }
}

function getElements() {
  const menuElements = {
    button: document.querySelector(".menu__detail"),
    modal: document.querySelector(".menu__modal"),
    logo: document.querySelector(".menu__logo"),
    bars: document.querySelectorAll(".menu__bars-button"),
    links: document.querySelectorAll(".menu__links"),
    middle_bar: document.querySelector(".menu__middle-bar"),
  };

  return menuElements;
}

function changeMenuStyle(menuEl) {
  const menuElements = getElements();
  const currentUrl = window.location.href;

  changeMenuStyleAccordingUrl(currentUrl, menuEl, menuElements);

  menuElements.button.addEventListener("click", () => {
    controlMenu(menuEl, menuElements, currentUrl);
  });
}
