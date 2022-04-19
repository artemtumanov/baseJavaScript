'use strict'

const area = document.querySelector('#area');
let move = 0;
let result = '';

area.addEventListener('click', e => {
    if(e.target.className == 'cell') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move ++;

        if (move == 9) {
            if (confirm('НИЧЬЯ! Хотите сыграть еще?')) {
                location.reload();
            }
        }
        setTimeout(checkWinner, 10);
    }
})


function checkWinner () {
    const cells = document.querySelectorAll('.cell');
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winCondition.length; i++) {
        if(cells[winCondition[i][0]].innerHTML == 'X' && cells[winCondition[i][1]].innerHTML == 'X' && cells[winCondition[i][2]].innerHTML == 'X') {
            result = 'КРЕСТИКИ';
            prepareResult(result);
        } else if (cells[winCondition[i][0]].innerHTML == 'O' && cells[winCondition[i][1]].innerHTML == 'O' && cells[winCondition[i][2]].innerHTML == 'O') {
            result = 'НОЛИКИ';
            prepareResult(result);
        }
    }
}

const prepareResult = (winner) => {
    if (confirm(`Победили ${winner}. Начать новую игру?`)) {
        location.reload();
    }
}