            // Setting constants  //

const container = document.querySelector('#container');
let cell;
let target;

            // Setting Divs //

function makeCell (numCell) {
    for (let j = 0; j < numCell; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
} 

     //  setting up function to makeGrid //

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let r = 0; r < numRow; r++) {
        makeCell(numCol);
    }
}

function promptGrid() {
    let number = prompt("Please select the sixe of your grid! 16-256 only!", 16);
      if (number >=16 && number <=256) {
          makeGrid(number,number);
      }else {
          do {
              number = prompt("Invalid selection! Please choose size of 16-256!");
          }
          while (number < 16 || number > 256);
          makeGrid(number,number);
      }
}

        //  Add the mouseover event //

function changeColor (target) {
    target.style.backgroundColor = 'dark-grey';
}        