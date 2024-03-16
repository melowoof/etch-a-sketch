const container = document.querySelector("#main-container");
const canvasSizeInput = document.querySelector("#canvas-size");
const normalButton = document.querySelector("#normal");
const psychButton = document.querySelector("#psychedelic");
const clearButton = document.querySelector("#clear");
const rgbArray = [];

let rangeInputEvent = new Event("input");
let isNormal = true;

function createDivs(nbrDivs = 16) {
  const totalDivs = nbrDivs ** 2 * 1.5;
  const divArray = [];

  for (let i = 0; i < totalDivs; i++) {
    let div = document.createElement("div");

    div.classList.add("square");
    div.style.width = 40 / nbrDivs + "vw";
    div.style.height = 40 / nbrDivs + "vw";
    div.id = i;

    if (!isNormal) {
      div.addEventListener("mouseenter", function (event) {
        div.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      });
    } else {
      div.addEventListener("mouseenter", function (event) {
        let rgbVal = darkenSquare(i);
        div.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
      });
    }

    divArray.push(div);
    rgbArray.push(255);
  }

  // changeMode();
  for (const div of divArray) {
    container.appendChild(div);
  }
}

function normalEvent(event) {
  let div = event.target;
  let rgbVal = darkenSquare(div.id);
  div.removeEventListener("mouseenter", normalEvent);
  div.removeEventListener("mouseenter", psychedelicEvent);
  div.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
}

function psychedelicEvent(event) {
  let div = event.target;
  div.removeEventListener("mouseenter", normalEvent);
  div.removeEventListener("mouseenter", psychedelicEvent);
  div.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function changeMode() {
  if (!isNormal) {
    for (const div of container.children) {
      div.addEventListener("mouseenter", function (event) {
        div.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
      });
    }
  } else {
    for (const div of container.children) {
      div.addEventListener("mouseenter", function (event) {
        let rgbVal = darkenSquare(div.id);
        div.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
      });
    }
  }
  // isNormal = !isNormal;
  // !isNormal;
}

function removeDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function darkenSquare(id) {
  return (rgbArray[id] -= 25.5);
}

normalButton.addEventListener("click", function () {
  normalButton.classList.add("selected");
  psychButton.classList.remove("selected");

  isNormal = true;
  changeMode();
  // normalButton.disabled = true;
  // psychButton.disabled = false;
});

psychButton.addEventListener("click", function () {
  psychButton.classList.add("selected");
  normalButton.classList.remove("selected");

  isNormal = false;
  changeMode();
  // normalButton.disabled = false;
  // psychButton.disabled = true;
});

clearButton.addEventListener("click", function () {
  canvasSizeInput.dispatchEvent(rangeInputEvent);
});

canvasSizeInput.addEventListener("input", function () {
  const value = canvasSizeInput.value;
  removeDivs();
  createDivs(value);
  console.log(value);
});

//

createDivs();
// changeMode();
