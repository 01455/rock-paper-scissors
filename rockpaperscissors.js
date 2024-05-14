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