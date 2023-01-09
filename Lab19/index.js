'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20
// document.querySelector('.guess').value = 23
const number = Math.trunc(Math.random()*20) + 1;
let scoreNumber = 20
document.querySelector('.check').addEventListener('click', () => {
    const guess =  document.querySelector('.guess').value 
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number !'
    }else if(number === Number(guess)) {
        document.querySelector('.number').textContent = number
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
    } else if(number > guess) {
        if(scoreNumber > 0) {
            document.querySelector('.message').textContent = 'To Low!'
            scoreNumber--
        }else {
            document.querySelector('.message').textContent = 'You lost the game'
        }
        document.querySelector('.score').textContent = scoreNumber
    }else if(number < guess) {
        if(scoreNumber > 0) {
            document.querySelector('.message').textContent = 'To High!'
            scoreNumber--
        }else {
            document.querySelector('.message').textContent = 'You lost the game'
        }
        document.querySelector('.score').textContent = scoreNumber
    }
})
document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222';
})