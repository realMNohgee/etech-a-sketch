// Create  the grid //

function grid (content) {
    let container = content.appendChild(document.createElement("div"));
    container.id = "main";
    container.className = "container";

    for (let i = 0; i < 16; ++i) {
        let row = container.appendChild(document.createElement("div")); 
        row.className = "row";
        row.id = "row" + i;

        for (let x = 0; x < 16; ++x) {
            let box = row.appendChild(document.createElement("div"));
            box.className = "box";
        console.log(grid);
        }
    }
}
grid(document.body)