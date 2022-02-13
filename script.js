// Setting constants and variables //

const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRows');
let cells = document.getElementsByClassName('cell');

// Create default gird size //

function getGrid() {
    makeRows (16);
    makeColumns(16);
}

function makeRows (numberOf) {
    for (r = 0; r < numberOf; r++){
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRows';
    };
};

// Create columns //

function createColumns(numberOfCells) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numberOfCells; j++) {
            let newCells = document.createElement('div');
            rows[j].appendChild(newCells).className = 'cell';
        };
    };
};