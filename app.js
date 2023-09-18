let rows = 16;
let column = 16;

let gridDiv;

const grid = document.querySelector('.display');
for(let i = 0; i < rows*column; i++){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('item');
    grid.appendChild(gridDiv);
}
grid.addEventListener('click', () =>{
    grid.addEventListener('mousemove', (event) => {
        const target = event.target;
        target.classList.add('active')
    })
})


