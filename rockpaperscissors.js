function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1)
    if (randomNum === 1) {
        return 'rock'
    } else if (randomNum === 2) {
        return 'paper'
    } else  {
        return 'scissors'
    }
}

function checkScore(human, computer) {
    if (human == 5) {
        roundResultTrackerText.textContent = `You won! got ${human} points against computers ${computer}`
        rockBtn.toggleAttribute('disabled')
        paperBtn.toggleAttribute('disabled')
        scissorsBtn.toggleAttribute('disabled')
        let resetBtn = document.createElement('button')
        resetBtn.textContent = 'Reset Game'
        resetBtn.classList.add('btn')
        buttons.appendChild(resetBtn)
        resetBtn.addEventListener('click', (e) => {
            resetGame(e)
        })
        return
    }
    if (computer == 5) {
        roundResultTrackerText.textContent = `You lost! got ${human} points against computers ${computer}`
        rockBtn.toggleAttribute('disabled')
        paperBtn.toggleAttribute('disabled')
        scissorsBtn.toggleAttribute('disabled')
        resetBtn = document.createElement('button')
        resetBtn.textContent = 'Reset Game'
        resetBtn.classList.add('btn')
        buttons.appendChild(resetBtn)
        resetBtn.addEventListener('click', (e) => {
            resetGame(e)
        })
        return
    }
}

let humanChoice = ''
let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const statusDiv = document.querySelector('#gameStatusDiv')
const buttons = document.querySelector('.btns')
let humanScoreTrackerText = document.querySelector('#humanScore')
let computerScoreTrackerText = document.querySelector('#computerScore')
let roundsPlayedTrackerText = document.querySelector('#roundsPlayed')
let roundResultTrackerText = document.querySelector('#roundResult')

rockBtn.addEventListener('click', () => {
    humanChoice = 'rock'
    playRound(humanChoice, getComputerChoice())
})
paperBtn.addEventListener('click', () => {
    humanChoice = 'paper'
    playRound(humanChoice, getComputerChoice())
})
scissorsBtn.addEventListener('click', () => {
    humanChoice = 'scissors'
    playRound(humanChoice, getComputerChoice())
})


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResultTrackerText.textContent = (` It's a draw! both chose ${humanChoice}`)
        roundsPlayed++
        roundsPlayedTrackerText.textContent = 'Rounds Played: ' + roundsPlayed
        return
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        roundResultTrackerText.textContent = (` You win! Your pick (${humanChoice}) beats computer pick (${computerChoice})`)
        humanScore++
        humanScoreTrackerText.textContent = 'Human Score: ' + humanScore
        roundsPlayed++
        roundsPlayedTrackerText.textContent = 'Rounds Played: ' + roundsPlayed
        checkScore(humanScore, computerScore)
        return
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        roundResultTrackerText.textContent = (` You win! Your pick (${humanChoice}) beats computer pick (${computerChoice})`)
        humanScore++
        humanScoreTrackerText.textContent = 'Human Score: ' + humanScore
        roundsPlayed++
        roundsPlayedTrackerText.textContent = 'Rounds Played: ' + roundsPlayed
        checkScore(humanScore, computerScore)
        return
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundResultTrackerText.textContent = (` You win! Your pick (${humanChoice}) beats computer pick (${computerChoice})`)
        humanScore++
        humanScoreTrackerText.textContent = 'Human Score: ' + humanScore
        roundsPlayed++
        roundsPlayedTrackerText.textContent = 'Rounds Played: ' + roundsPlayed
        checkScore(humanScore, computerScore)
        return
    }
    else {
        roundResultTrackerText.textContent = (` You lose! Your pick (${humanChoice}) loses to computer pick (${computerChoice})`)
        computerScore++
        computerScoreTrackerText.textContent = 'Computer Score: ' + computerScore
        roundsPlayed++
        roundsPlayedTrackerText.textContent = 'Rounds Played: ' + roundsPlayed
        checkScore(humanScore, computerScore)
        return
    }
}

function resetGame(e) {
    humanScore = 0
    computerScore = 0
    roundsPlayed = 0
    humanScoreTrackerText.textContent = 'Human Score: '
    computerScoreTrackerText.textContent = 'Computer Score: '
    roundsPlayedTrackerText.textContent = 'Rounds Played: '
    roundResultTrackerText.textContent = 'Round Result:'
    rockBtn.toggleAttribute('disabled')
    paperBtn.toggleAttribute('disabled')
    scissorsBtn.toggleAttribute('disabled')
    buttons.removeChild(e.target)
    return
}