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

//we need the parent elements for score and score. maybe we only need score to win



pointPOne.addEventListener('click', () => {
    playerOneScore.innerHTML = Number(playerOneScore.innerHTML) + 1;
    isWin()
})

pointPTwo.addEventListener('click', () => {
    playerTwoScore.innerHTML = Number(playerTwoScore.innerHTML) + 1;
    isWin()
})

//wait, why not just add the paramater into the button. so instead of it watching for it, it activates when the funtions is run


function isWin() {
    if (winScore.value <= playerOneScore.innerHTML || winScore.value <= playerTwoScore.innerHTML) {
        console.log('fire')
    }
}




// while (playerOneScore.value == winScore.value || playerTwoScore.value == winScore.value) {
//     console.log('win');
// }

//so lets for now make it when we press reset it will console.log the value of the winning score
//from there we can check to see if it matches the point then set a win condition.

// resetBtn.addEventListener('click', () => {
//     console.log('winScore.value, playerTwoScore.innerHTML')
// })

// resetBtn.addEventListener('click', () => {
// if (winScore.value == playerTwoScore.innerHTML) {
//     console.log('fire')
// }
// })


// let winCondition = false;
// while (winCondition == false) {
// }