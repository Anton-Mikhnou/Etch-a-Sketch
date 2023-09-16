let rows = 16;
let column = 16;

let gridDiv;

const grid = document.querySelector('.display');
for(let i = 0; i < rows*column; i++){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('item');
    grid.appendChild(gridDiv);
}

grid.addEventListener('click', (event) => {
    const itemElem = event.target;
    itemElem.classList.add('active')
    console.log(event.target)
})

