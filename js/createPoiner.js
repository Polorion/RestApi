const setPointerCoordinates = () => {
  document.querySelectorAll(".footerBottom__item").forEach((el, i) => {
    el.addEventListener("click", (e) => {
      const coordinates = e.target.getBoundingClientRect();
      const pointer = document.querySelector(".pointer");
      const pointerWidth = pointer.getBoundingClientRect().width;
      pointer.style.left =
        coordinates.width * i + coordinates.width / 2 + pointerWidth / 2 + "px";
    });
  });
};
export default setPointerCoordinates;
