document.addEventListener('DOMContentLoaded', () => {

    let celulas = document.querySelectorAll('.celula');

    celulas.forEach((celula) => {
        celula.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    let celula = event.target;
    let position = celula.id;

    handleMove(position);
    updateSquares();
   
}

function updateSquares(){

    let celulas = document.querySelectorAll('.celula');

    celulas.forEach((celula) => {
        let position = celula.id;
        let symbol = board[position];

        if(symbol != ''){
            celula.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}