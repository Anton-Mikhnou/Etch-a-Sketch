let rows = 16;
let column = 16;

const grid = document.querySelector('.display');
for(let i = 0; i < rows*column; i++){
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('item');
    grid.appendChild(gridDiv);
}

const itemGrid = document.querySelectorAll('.item')
itemGrid.forEach ((items) => {
    items.addEventListener('mousedown', (event) =>{
        const item = event.target 
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    } )
})
