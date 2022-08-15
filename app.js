//goal is to make a score tracking game uisng html, css & js.

// >there should a score keeper,
// >an option to selece to what you play too,
// >two buttons to add points, one for each plater,
// >a button to rest

// >when a player wins the winning number should turn green and the score adding buttons should be disabled

//to start lets call out all the elements we're going to need

//player scores
const playerOneScore = document.querySelector('#player1');
const playerTwoScore = document.querySelector('#player2');

//add one to scores
const pointPOne = document.querySelector('#pointPOne')
const pointPTwo = document.querySelector('#pointPTwo')

//reset button
const resetBtn = document.querySelector('#resetBtn')

const winScore = document.querySelector('.form-select') //looking for value


// win conditon
function isWin() {
    if (winScore.value <= playerOneScore.innerHTML || winScore.value <= playerTwoScore.innerHTML) {
        console.log('game over')
        pointPOne.disabled = true;
        pointPTwo.disabled = true;
        winScore.disabled = true;
        if (winScore.value <= playerOneScore.innerHTML) {
            playerOneScore.style.color = 'green'
        } else {
            playerTwoScore.style.color = 'green'
        }
    }
}


// add point buttons
pointPOne.addEventListener('click', () => {
    playerOneScore.innerHTML = Number(playerOneScore.innerHTML) + 1;
    isWin()
})

pointPTwo.addEventListener('click', () => {
    playerTwoScore.innerHTML = Number(playerTwoScore.innerHTML) + 1;
    isWin()
})

//reset button

resetBtn.addEventListener('click', () => {
    playerOneScore.innerHTML = '0'
    playerTwoScore.innerHTML = '0'

    winScore.value = "Select winning score"

    pointPOne.disabled = false;
    pointPTwo.disabled = false;
    winScore.disabled = false;

    playerOneScore.style.color = 'black'
    playerTwoScore.style.color = 'black'

    console.log('game reset')
})