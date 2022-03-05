// Setting constants and variables //

const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRows');
let cells = document.getElementsByClassName('cell');

// Create default gird size //

function getGrid() {
    makeRows (16);
    createColumns(16);
}

function makeRows (numberOf) {
    for (r = 0; r < numberOf; r++){
        let newRows = document.createElement('div');
        document.body.appendChild(newRows).className = 'gridRows';
     
    }
}

// Create columns //)

function createColumns(numberOfCells) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numberOfCells; j++) {
            let newCells = document.createElement('div');
            rows[j].appendChild(newCells).className = 'cell';
        }
    }
const square = document.querySelector('div');
square.addEventListener('mouseover', mouseOver) 
target.classList.replace('square', 'color');
};



getGrid();
