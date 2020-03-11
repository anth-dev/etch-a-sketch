let clearButton = document.querySelector('header button');
let rowsAndColumns = '100';

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
    console.log('generating ' + rowsAndColumns + ' rows and columns');
    for (i = 0; i <= rowsAndColumns * rowsAndColumns; )
}

generateDivs(rowsAndColumns);