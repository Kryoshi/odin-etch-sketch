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
        gridSize = Number(prompt("What size grid? [MAX: 100]"));
        
        if (gridSize == null) return;
    } while (isNaN(gridSize) || gridSize > 100);

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
        if (e.target.className === "square") {
            randomizeColor(e.target);
        }
    });
}

function randomizeColor (square) {
    let r, g, b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    a = alpha(square.style.backgroundColor);
    square.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b}, ${a});`);
}

function alpha (color) {
    let a = 0;
    if (color === undefined || color === "") {
        a = 0.1;
    } else if (color) {
        const rgbCheckArray = color.split("(")
        if (rgbCheckArray[0] === "rgba") {
            const colorArray = color.split(",");
            let colorString = colorArray[colorArray.length - 1].trim();
            let alphaString = "";
            for (let i = 0; i < colorString.length; ++i) {
                let currentChar = colorString.charAt(i);
                if (currentChar == '.' || !isNaN(Number(currentChar))) {
                    alphaString += currentChar;
                }
            }
            a = Number(alphaString);
            if (a < 1) {
                a += 0.1;
            }
        } else {
            a = 1;
        }
    }
    return a;
}

newGridButton.addEventListener("click", generateGrid);