let gridDiv;
let rows;
let columns;

const grid = document.querySelector('.display');
const quantity = document.querySelector('.quantity')
quantity.addEventListener('click', () => {
    let size = prompt('To make your choise');
    rows = size;
    columns = size;
    if (rows && columns) {
        display.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        for(let i = 0; i < rows*columns; i++){
            gridDiv = document.createElement('div');
            gridDiv.classList.add('item');
            grid.appendChild(gridDiv);
        }
    }
})






let isDrawing = false;

grid.addEventListener('mousedown', () => {
    isDrawing = true;
})

grid.addEventListener("mousemove", (event) => {
    if (isDrawing){
        const target = event.target;
        target.classList.add('active')
        console.log(event.target)
    }
})

grid.addEventListener('mouseup', () => {
    isDrawing = false;
})








