const moveBtn = document.querySelector(".mv-btn-wrapper");
const carContainer = document.querySelector(".car-container");
let cars = carContainer.children;

let mvBtn = moveBtn.children[0];
let carInterval;
moveBtn.addEventListener("click", () => {
  if (mvBtn.innerHTML == "Move The Car") {
    carInterval = setInterval(() => {
      const pageWidth = Math.round(4 * Math.random());
      const pageHeight = Math.round(18 * Math.random());
      const rt = Math.round(-1440 * Math.random());
      const sc = Math.round(1.3 * Math.random());

      for (let car of cars) {
        car.style.transform = `translate(${pageWidth}rem, ${pageHeight}rem) rotate(${rt}deg) scale(${sc})`;
      }
    }, 1500);

    mvBtn.innerHTML = "Stop";
    mvBtn.classList.add("stop-car");
  } else if (mvBtn.innerHTML == "Stop") {
    mvBtn.classList.remove("stop-car");
    mvBtn.innerHTML = "Move The Car";
    clearInterval(carInterval);
  }

  return;
});
