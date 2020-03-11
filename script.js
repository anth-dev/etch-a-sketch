let clearButton = document.querySelector('header button');

clearButton.addEventListener("mouseenter", button => {
    clearButton.classList.add('overButton');
});
clearButton.addEventListener("mouseleave", button => {
    clearButton.classList.remove('overButton');
});