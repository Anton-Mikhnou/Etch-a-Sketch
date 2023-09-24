const grid = document.querySelector('.display');
let gridDiv;
// start Grid
let rows = 16;
let columns = 16;
for(let i = 0; i < rows*columns; i++){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('item');
    grid.appendChild(gridDiv);
}

function createGrid(){
    if (rows && columns) {
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        for(let i = 0; i < rows*columns; i++){
            gridDiv = document.createElement('div');
            gridDiv.classList.add('item');
            grid.appendChild(gridDiv);
        }
    }
}

// change Grid
function drawingPlace(){
    let rng = document.getElementById('numberGrid');
    let p = document.getElementById('grid');
    let size = p.innerHTML = rng.value;
    rows = size;
    columns = size;
    createGrid();
}
// button reset
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    createGrid();
})


let isDrawing = false;

grid.addEventListener('mousedown', () => {
    isDrawing = true;
})

grid.addEventListener("mousemove", (event) => {
    if (isDrawing){
        const target = event.target;
        if(target.classList.contains('item')){
            target.classList.add('active')
        }
    }
})

grid.addEventListener('mouseup', () => {
    isDrawing = false;
})








