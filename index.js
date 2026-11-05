function newDiv() {
  const newDiv = document.createElement("div");
  return newDiv;
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
