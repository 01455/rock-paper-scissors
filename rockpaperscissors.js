let humanScore = 0
let computerScore = 0

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

function getHumanChoice() {
    let choice = prompt('rock / paper / scissors?', '')
    let choiceFiltered = choice.toLowerCase().trim()
    while (choiceFiltered !== 'rock' && choiceFiltered !== 'paper' && choiceFiltered !== 'scissors') {
        choice = prompt('rock / paper / scissors?', '')
        choiceFiltered = choice.toLowerCase().trim()
    }   
    return choiceFiltered
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! both chose ${humanChoice}`)
        return
    }
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
        return
    }
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
        return
    }
    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
        return
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1 
        return
    }
}

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)