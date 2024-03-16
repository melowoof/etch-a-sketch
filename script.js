let container = document.querySelector("#main-container");
const divClass = document.querySelector(".square");
// let div = document.createElement("div");

function createDivs(nbrDivs = 16) {
  const totalDivs = nbrDivs ** 2;
  const divsArray = [];
  //   divClass.style.width = "calc(100% / " + nbrDivs + ");";
  //   divClass.style.height = nbrDivs + "px";

  for (let i = 0; i < totalDivs; i++) {
    let j = i;
    let div = document.createElement("div");

    div.classList.add("square");
    div.textContent = ++j;

    divsArray.push(div);
  }

  for (const div of divsArray) {
    container.appendChild(div);
  }
}

// divClass.addEventListener("hover", function (event) {
//   div.style.backgroundColor = "lightblue";
// });

createDivs();
