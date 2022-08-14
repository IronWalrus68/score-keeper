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

pointPOne.addEventListener('click', () => {
    playerOneScore.innerHTML = Number(playerOneScore.innerHTML) + 1;
})

pointPTwo.addEventListener('click', () => {
    playerTwoScore.innerHTML = Number(playerTwoScore.innerHTML) + 1;
})