const createCard = (Data, Img, Title, SubTitle, Location, GoTo, URL) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const body = document.createElement("div");
  body.classList.add("card__body");
  const { time, logoBody } = createHeader(Img, Data);
  const { title, subTitle } = createContent(Title, SubTitle);
  const location = createLoacation(Location, GoTo);

  const buttons = createBtn(URL);

  body.append(time, logoBody, title, subTitle, location, buttons);
  const container = document.querySelector(".content");

  card.append(body);
  container.append(card);
};

export default createCard;

const createBtn = (URL) => {
  const bodyButton = document.createElement("div");
  bodyButton.classList.add("card__buttons");
  const buttonBuy = document.createElement("button");
  buttonBuy.classList.add("card__buttonBuy");
  buttonBuy.textContent = "Купить Билет";
  const buttonMore = document.createElement("a");
  buttonMore.classList.add("card__linkBtn");
  buttonMore.target = "_blank";
  buttonMore.href = URL;
  buttonMore.textContent = "Подробнее";
  bodyButton.append(buttonBuy, buttonMore);
  return bodyButton;
};

const createLoacation = (Location, GoTo) => {
  const location = document.createElement("div");
  const locationBody = document.createElement("div");
  locationBody.classList.add("card__locationElement");
  const locationPoint = document.createElement("img");
  locationPoint.src = "../img/point.svg";
  const locationFrom = document.createElement("p");
  locationFrom.textContent = Location;
  locationBody.append(locationPoint, locationFrom);
  const goToBody = document.createElement("div");
  goToBody.classList.add("card__locationElement");
  const goToPoint = document.createElement("img");
  goToPoint.src = "../img/goTo.svg";
  const goToFrom = document.createElement("a");
  goToFrom.target = "_blank";
  goToFrom.href = "https://highload.ru/";
  goToFrom.textContent = GoTo;
  goToBody.append(goToPoint, goToFrom);
  location.classList.add("card__location");
  location.append(locationBody, goToBody);
  return location;
};

const createContent = (Title, SubTitle) => {
  const title = document.createElement("h2");
  title.textContent = Title;
  title.classList.add("card__title");
  const subTitle = document.createElement("p");
  subTitle.classList.add("card__subtitle");
  subTitle.textContent = SubTitle;
  return {
    title,
    subTitle,
  };
};

const createHeader = (Img, Data) => {
  const time = document.createElement("h3");
  time.classList.add("card__time");
  const logoBody = document.createElement("div");
  const logo = document.createElement("img");
  logoBody.classList.add("card__imgBody");
  logoBody.append(logo);
  logo.src = Img;
  time.textContent = Data;
  return { time, logoBody };
};
