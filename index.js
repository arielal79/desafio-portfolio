function fillHomePageContent(data) {
  const homeTitleEl = document.querySelector(".home__title");
  const homeSubtitleEl = document.querySelector(".home__subtitle");
  const homeEl = document.querySelector(".home");

  if (homeEl) {
    homeEl.style.backgroundImage = `url("${data.imageURL}")`;
    homeTitleEl.innerHTML = data.title;
    homeSubtitleEl.innerHTML = data.subtitle;
  }
}

function fillAboutmePageContent(data) {
  const aboutmeImageEl = document.querySelector(".about-me__image");
  const aboutmeTitleEl = document.querySelector(".about-me__title");
  const aboutmeTextEl = document.querySelector(".about-me__text");
  const aboutmeHashtagsArr = document.querySelectorAll(".about-me__hashtag");

  if (aboutmeTitleEl) {
    aboutmeImageEl.style.backgroundImage = `url("${data.backgroundImageURL}")`;
    aboutmeTitleEl.innerHTML = data.title;
    aboutmeTextEl.innerHTML = data.text;
    aboutmeHashtagsArr.forEach(
      (hashtag, i) => (hashtag.innerHTML = data.hashtags[i])
    );
  }
}

function createServiceCards(data) {
  const servicesEl = document.querySelector(".services");
  const servicesTemplateEl = document.querySelector(".services-template");

  if (servicesEl) {
    const servicesServiceIconEl = servicesTemplateEl.content.querySelector(
      ".services__service-icon"
    );
    servicesServiceIconEl.innerHTML = data.serviceIcon;

    const servicesServiceTitleEl = servicesTemplateEl.content.querySelector(
      ".services__service-title"
    );
    servicesServiceTitleEl.innerHTML = data.serviceTitle;

    const servicesServiceTextEl = servicesTemplateEl.content.querySelector(
      ".services__service-text"
    );
    servicesServiceTextEl.innerHTML = data.serviceText;

    const clone = document.importNode(servicesTemplateEl.content, true);
    servicesEl.appendChild(clone);
  }
}

function createPortfolioCards(data) {
  const portfolioEl = document.querySelector(".portfolio");
  const portfolioTemplateEl = document.querySelector(".portfolio-template");

  if (portfolioEl) {
    const portfolioWorkIconEl = portfolioTemplateEl.content.querySelector(
      ".portfolio__work-icon"
    );
    portfolioWorkIconEl.innerHTML = data.portfolioIcon;

    const portfolioWorkTitleEl = portfolioTemplateEl.content.querySelector(
      ".portfolio__work-title"
    );
    portfolioWorkTitleEl.innerHTML = data.portfolioTitle;

    const portfolioWorkTextEl = portfolioTemplateEl.content.querySelector(
      ".portfolio__work-text"
    );
    portfolioWorkTextEl.innerHTML = data.portfolioText;

    const clone = document.importNode(portfolioTemplateEl.content, true);
    portfolioEl.appendChild(clone);
  }
}

function getCmsData() {
  function createDataObj(data) {
    let dataObj = {
      home: { title: "", subtitle: "", imageURL: "" },
      aboutme: { title: "", text: "", hashtags: [], backgroundImageURL: "" },
      services: [],
      portfolio: [],
    };

    data.items.forEach((item) => {
      if (item.fields.serviceTitle) {
        dataObj.services.push(item);
      } else if (item.fields.aboutmeTitle) {
        dataObj.aboutme.title = item.fields.aboutmeTitle;
        dataObj.aboutme.text = item.fields.aboutmeText;
        dataObj.aboutme.hashtags = item.fields.aboutmeHashtags;
        dataObj.aboutme.backgroundImageURL =
          data.includes.Asset[0].fields.file.url;
      } else if (item.fields.homeTitle) {
        dataObj.home.title = item.fields.homeTitle;
        dataObj.home.subtitle = item.fields.homeSubtitle;
        dataObj.home.imageURL = data.includes.Asset[1].fields.file.url;
      } else if (item.fields.portfolioTitle) {
        dataObj.portfolio.push(item);
      }
    });

    return dataObj;
  }

  return fetch(
    "https://cdn.contentful.com/spaces/sezd397y3ob3/environments/master/entries?access_token=d30jfPjygQpzALTd6rttnxuBwCL9oUdLRc2L_fSzyiQ"
  )
    .then((resp) => resp.json())
    .then((data) => createDataObj(data));
}

function main() {
  getCmsData().then((dataObj) => {
    fillHomePageContent(dataObj.home);
    fillAboutmePageContent(dataObj.aboutme);
    dataObj.services.forEach((service) => createServiceCards(service.fields));
    dataObj.portfolio.forEach((work) => createPortfolioCards(work.fields));
  });

  const menuEl = document.querySelector(".menu");
  const contactEl = document.querySelector(".contact");
  const footerEl = document.querySelector(".footer");

  createHeader(menuEl);
  changeMenuStyle(menuEl);

  if (contactEl) {
    createContact(contactEl);
  }

  createFooter(footerEl);
}

main();
