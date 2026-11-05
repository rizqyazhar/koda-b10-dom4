function newDiv() {
  const newDiv = document.createElement("div");
  return newDiv;
}

function newBtn() {
  const newBtn = document.createElement("button");
  return newBtn;
}

const board = newDiv();

const innerBoard = newDiv();

document.body.appendChild(board);
board.setAttribute("class", "board");

board.appendChild(innerBoard);

innerBoard.setAttribute("class", "inner-board");

for (let i = 0; i < 8; i++) {
  const row = newDiv();
  row.setAttribute("class", "row");
  for (let j = 0; j < 8; j++) {
    const box = newDiv();
    row.appendChild(box);
    box.setAttribute("class", "box");
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        box.classList.add("white");
      } else {
        box.classList.add("black");
      }
    } else {
      if (j % 2 === 0) {
        box.classList.add("black");
      } else {
        box.classList.add("white");
      }
    }
  }
  innerBoard.appendChild(row);
}

const themeBox = newDiv();

document.body.appendChild(themeBox);
themeBox.setAttribute("class", "themeBox");

const newSpan = document.createElement("span");
themeBox.appendChild(newSpan);

newSpan.textContent = "Set theme:";

const theme = [
  {
    circColor: "theme-one",
    borderColor: "#8A5F41",
    whiteColor: "#F3E4C9",
    blackColor: "#A77F60",
  },
  {
    circColor: "theme-two",
    borderColor: "#313647",
    whiteColor: "#A3B087",
    blackColor: "#435663",
  },
  {
    circColor: "theme-three",
    borderColor: "#524646",
    whiteColor: "#FCF2E5",
    blackColor: "#A8A492",
  },
  {
    circColor: "theme-four",
    borderColor: "#1E201E",
    whiteColor: "#fff",
    blackColor: "#2b2a2a",
  },
];

function handleChangeTheme(getClass) {
  const getAllBlack = document.querySelectorAll(".black");
  const getAllWhite = document.querySelectorAll(".white");
  const getBoard = document.querySelector(".board");

  for (const style of theme) {
    const { borderColor, blackColor, whiteColor, circColor } = style;

    if (getClass === circColor) {
      getBoard.style.borderColor = borderColor;

      getAllWhite.forEach((e) => {
        e.style.backgroundColor = whiteColor;
      });

      getAllBlack.forEach((e) => {
        e.style.backgroundColor = blackColor;
      });
    }
  }
}

theme.forEach((e) => {
  const circle = newBtn();
  themeBox.appendChild(circle);
  circle.setAttribute("class", "circle");
  circle.classList.add(e.circColor);
});

const buttons = document.querySelectorAll(".circle");

buttons.forEach((b) =>
  b.addEventListener("click", () => {
    const getClass = b.getAttribute("class").split(" ")[1];
    handleChangeTheme(getClass);
  }),
);
