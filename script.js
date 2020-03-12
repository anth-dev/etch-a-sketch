let clearButton = document.querySelector('header button');
let container = document.querySelector('.container');
let rowsAndColumns = '10';

clearButton.addEventListener("mouseenter", button => {
    clearButton.classList.add('overButton');
});
clearButton.addEventListener("mouseleave", button => {
    clearButton.classList.remove('overButton');
});
clearButton.addEventListener("click", handleClick);

function handleClick() {
    rowsAndColumns = +prompt('How many rows and columns?');
    generateDivs(rowsAndColumns);
}

function generateDivs(rowsAndColumns) {
    container.innerHTML = '';
    console.log('generating ' + rowsAndColumns + ' rows and columns');
    for (i = 0; i < rowsAndColumns * rowsAndColumns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

generateDivs(rowsAndColumns);