const grid = document.querySelector(".grid");
const newGridButton = document.querySelector(".new");

function deleteGrid() {
    do {
        grid.removeChild(grid.lastChild);
    } while (grid.hasChildNodes());
}

function generateGrid() {
    if (grid.hasChildNodes()) {
        deleteGrid();
    }

    let gridSize = 0;
    do {
        gridSize = Number(prompt("What size grid?"));
        if (gridSize == null) return;
    } while (isNaN(gridSize));

    for (let i = 0; i < gridSize; ++i) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (let j = 0; j < gridSize; ++j) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }
    }
    grid.addEventListener("mouseover", function (e) {
        let currentOpacity = Number(e.target.style.opacity);
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
            e.target.setAttribute("style", `opacity: ${currentOpacity};`)
        }
    });
}

newGridButton.addEventListener("click", generateGrid);