let gridDiv;
let rows;
let columns;
const grid = document.querySelector('.display');

function func1(){
    let rng = document.getElementById('numberGrid');
    let p = document.getElementById('gr');
    let size = p.innerHTML = rng.value;
    rows = size;
    columns = size;
    console.log(rows)
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


let isDrawing = false;

grid.addEventListener('mousedown', () => {
    isDrawing = true;
})

grid.addEventListener("mousemove", (event) => {
    if (isDrawing){
        const target = event.target;
        target.classList.add('active')
    }
})

grid.addEventListener('mouseup', () => {
    isDrawing = false;
})








