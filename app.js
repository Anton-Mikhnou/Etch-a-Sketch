const display = document.querySelector('.display');

let pixelQuantity;
let rows;
let columns;
const quantity = document.querySelector('.quantity');
quantity.addEventListener('click', () => {
    pixelQuantity = prompt('Make a choice, but no more than 100');
    rows = pixelQuantity;
    columns = pixelQuantity;
    console.log('1',pixelQuantity);
    console.log(rows)
    console.log(columns)
    for (let i = 0; i < rows * columns; i++){
        let divGrid = document.createElement('div');
        divGrid.classList.add('item');
        display.appendChild(divGrid);
    } 
})

// let rows = pixelQuantity;
// let columns = pixelQuantity;


for (let i = 0; i < rows * columns; i++){
    let divGrid = document.createElement('div');
    divGrid.classList.add('item');
    display.appendChild(divGrid);
} 
