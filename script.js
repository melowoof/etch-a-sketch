let container = document.querySelector("#main-container");
const divClass = document.querySelector(".square");
const rgbArray = [];

function createDivs(nbrDivs = 16) {
  const totalDivs = nbrDivs ** 2 * 1.5;
  const divArray = [];
  //   divClass.style.width = "calc(100% / " + nbrDivs + ");";
  //   divClass.style.height = nbrDivs + "px";

  for (let i = 0; i < totalDivs; i++) {
    // let j = i;
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

function darkenSquare(id) {
  return (rgbArray[id] -= 25.5);
}

// divClass.addEventListener("hover", function (event) {
//   div.style.backgroundColor = "lightblue";
// });

createDivs();
