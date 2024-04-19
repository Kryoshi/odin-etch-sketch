const grid = document.querySelector(".grid");


let gridSize = 64;

function generateGrid() {
    const size = grid.clientWidth / gridSize;
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
            console.log(currentOpacity);
        }
    });
}

generateGrid()