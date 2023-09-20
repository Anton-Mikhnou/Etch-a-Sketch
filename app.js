let rows = 16;
let column = 16;

let gridDiv;

const grid = document.querySelector('.display');
for(let i = 0; i < rows*column; i++){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('item');
    grid.appendChild(gridDiv);
}

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








