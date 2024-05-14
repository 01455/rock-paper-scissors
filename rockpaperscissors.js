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


function playGame(rounds) {
    let humanScore = 0
    let computerScore = 0
    let roundsPlayed = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a draw! both chose ${humanChoice}`)
            return
        }
        if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
            return
        }
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
            return
        }
        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
            return
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
            return
        }
    }

    while (roundsPlayed < rounds) {
        playRound(getHumanChoice(), getComputerChoice());
        roundsPlayed++;
    }

    if (humanScore === computerScore) {
        console.log(`Draw! both have ${humanScore} point(s)`)
        return
    }

    if (humanScore > computerScore) {
        console.log(`You won! you got ${humanScore} points vs computers ${computerScore} points`)
        return
    } else {
        console.log(`You lost! you got ${humanScore} points vs computers ${computerScore} points`)
        return
    }

}

playGame(5)