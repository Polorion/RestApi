import createCard from "./createCard.js";
import setPointerCoordinates from "./setPointerCoordinates.js";

const getData = async () => {
  try {
    const resp = await axios.get(
      `https://conf.ontico.ru/api/conferences/forCalendar.json`
    );
    const list = await resp.data;
    start(list.result);
  } catch (error) {
    alert(error.message);
  }
};
getData();

const start = (list) => {
  list.forEach((el) => {
    createCard(
      el.date_range,
      el.logo,
      el.name,
      el.brief,
      el.location,
      "highload.ru",
      el.uri
    );
  });
};
setPointerCoordinates();
