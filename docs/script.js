const grid = document.querySelector(".grid");


let gridSize = 16;

function generateGrid() {
    const size = grid.clientWidth / gridSize;
    console.log(grid.clientWidth);
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
}

generateGrid()