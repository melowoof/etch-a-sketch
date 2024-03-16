const container = document.querySelector("#main-container");
const canvasSizeInput = document.querySelector("#canvas-size");
const normalButton = document.querySelector("#normal");
const psychButton = document.querySelector("#psychedelic");
// normalButton.disabled = true;
const clearButton = document.querySelector("#clear");
let rangeInputEvent = new Event("input");
const rgbArray = [];

function createDivs(nbrDivs = 16) {
  const totalDivs = nbrDivs ** 2 * 1.5;
  const divArray = [];

  for (let i = 0; i < totalDivs; i++) {
    let div = document.createElement("div");

    div.classList.add("square");
    div.style.width = 40 / nbrDivs + "vw";
    div.style.height = 40 / nbrDivs + "vw";
    div.id = i;
    div.addEventListener("mouseenter", function (event) {
      let rgbVal = darkenSquare(i);
      div.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
    });

    divArray.push(div);
    rgbArray.push(255);
  }

  for (const div of divArray) {
    container.appendChild(div);
  }
}

function removeDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function darkenSquare(id) {
  return (rgbArray[id] -= 25.5);
}

canvasSizeInput.addEventListener("input", function () {
  const value = canvasSizeInput.value;
  removeDivs();
  createDivs(value);
  console.log(value);
});

normalButton.addEventListener("click", function () {
  normalButton.classList.add("selected");
  psychButton.classList.remove("selected");

  // normalButton.disabled = true;
  // psychButton.disabled = false;
});

psychButton.addEventListener("click", function () {
  psychButton.classList.add("selected");
  normalButton.classList.remove("selected");

  // normalButton.disabled = false;
  // psychButton.disabled = true;
});

clearButton.addEventListener("click", function () {
  canvasSizeInput.dispatchEvent(rangeInputEvent);
});

//

createDivs();
