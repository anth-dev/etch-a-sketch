let clearButton = document.querySelector('header button');
let container = document.querySelector('.container');
let rowsAndColumns = 50;

clearButton.addEventListener("mouseenter", button => {
    clearButton.classList.add('overButton');
});
clearButton.addEventListener("mouseleave", button => {
    clearButton.classList.remove('overButton');
});
clearButton.addEventListener("click", handleClick);

function handleClick() {
    rowsAndColumns = +prompt('How many rows and columns? Tip: Try 50.');
    generateGrid(rowsAndColumns);
}

function generateGrid(rowsAndColumns) {
    generateRows(rowsAndColumns);
    generateCells(rowsAndColumns);
    draw();
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

function draw() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        let baseAlpha = 0;
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = 'rgba(171,179,242, ' + `${baseAlpha += 0.1}` + ')';
        })
    });    
}

generateGrid(rowsAndColumns);