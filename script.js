let clearButton = document.querySelector('header button');
let container = document.querySelector('.container');
let rowsAndColumns = +prompt('How many rows and columns?');

clearButton.addEventListener("mouseenter", button => {
    clearButton.classList.add('overButton');
});
clearButton.addEventListener("mouseleave", button => {
    clearButton.classList.remove('overButton');
});
clearButton.addEventListener("click", handleClick);

function handleClick() {
    rowsAndColumns = +prompt('How many rows and columns?');
    generateGrid(rowsAndColumns);
}

function generateGrid(rowsAndColumns) {
    generateRows(rowsAndColumns);
    generateCells(rowsAndColumns);
}

function generateRows(rowsAndColumns) {
    container.innerHTML = '';
    for (i = 0; i < rowsAndColumns; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

function generateCells(rowsAndColumns) {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        for (i = 0; i < rowsAndColumns; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell); 
        }
    });
}

function draw(cell) {
    console.log(cell);
}

generateGrid(rowsAndColumns);

let cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener("mouseover", function(){
        cell.style.backgroundColor = '#545DA6';
    })
});