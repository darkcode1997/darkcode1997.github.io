const btnRollDice = document.querySelector('.roll-dice')
const btnHold = document.querySelector('.hold')
const btnNewGame = document.querySelector('.new-game')
const images = document.querySelector('.images')
const scorePlayer1 = document.querySelector('.score-player-1')
const scoreCurrentPlayer1 = document.querySelector('.score-current-player-1')
const scorePlayer2 = document.querySelector('.score-player-2')
const scoreCurrentPlayer2 = document.querySelector('.score-current-player-2')
const namePlayer1 = document.querySelector('.player-1')
const namePlayer2 = document.querySelector('.player-2')
const player1El = document.querySelector('.player-box-1')
const player2El = document.querySelector('.player-box-2')
let score1, score2, currentScore, activePlayer, playing;
const initGame = () => {
    playing = true;
    currentScore = 0
    activePlayer = 1
    score1 = 0
    score2 = 0

    scorePlayer1.textContent = 0
    scorePlayer2.textContent = 0
    scoreCurrentPlayer1.textContent = 0
    scoreCurrentPlayer2.textContent = 0
    images.classList.add('hidden')
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player1El.classList.add('active');
    player2El.classList.remove('active');
}

initGame()


function switchPlayer() {
    document.querySelector(`.score-current-player-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    document.querySelector('.player-box-1').classList.toggle('active')
    document.querySelector('.player-box-2').classList.toggle('active')
}

btnNewGame.addEventListener('click', initGame)
btnRollDice.addEventListener('click', rollDice)

function rollDice() {
    if(playing) {
        let diceRandom = Math.trunc(Math.random()*6) + 1
        images.setAttribute('src', `./images/dice-${diceRandom}.png`)
        images.classList.remove('hidden')
        if(diceRandom === 1) {
            switchPlayer()
        }else {
            currentScore += diceRandom
            document.querySelector(`.score-current-player-${activePlayer}`).textContent = currentScore
        }
    }
}

function hold() {
    if(playing) {
        if(activePlayer === 1) {
            score1 += currentScore
            document.querySelector(`.score-player-${activePlayer}`).textContent = score1
        }else if(activePlayer === 2) {
            score2 += currentScore
            document.querySelector(`.score-player-${activePlayer}`).textContent = score2
        }

        if(score1 >=100 || score2 >= 100) {
            playing = false;
            images.classList.add('hidden')
            document
        .querySelector(`.player-box-${activePlayer}`)
        .classList.add('winner');
      document
        .querySelector(`.player-box-${activePlayer}`)
        .classList.remove('active');
        }else {
            switchPlayer()
        }
    }
}
btnHold.addEventListener('click', hold)