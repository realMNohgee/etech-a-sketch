            // Setting constants  //

const container = document.querySelector('.container');
const userInput = document.getElementById('quantity');
const resetButton = document.querySelector('.reset');

            // Create Grid  //

getGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    };

inputGrid = () => {
     grid.innerHTML = "";
     grid.style.setProperty(
         'grid-template-cloumns', `repeat(${userInput.value}, 2fr)`

     );
     grid.style.setProperty(
         'grid-template-rows', `repeat(${userInput.value}, 2fr)`
     );

     for (let i = 0; i < userInput.value * userInput.value; i++) {
         const div = document.createElement('div');
     }
}