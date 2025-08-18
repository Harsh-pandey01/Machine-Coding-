const gameOptions = document.querySelectorAll('.game-options div img');
const chosenHand = document.querySelector('.chosen-hand img')
const choices = ['rock', 'paper', 'scissors'];
const compHand = document.querySelector('.comp-hand img')
function generateRandomComputerChoice() {
    let indexChosen = Math.floor(Math.random() * 3)
    return choices[indexChosen]
}


gameOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
        const userSelect = option.getAttribute('value')
        const result = document.querySelector('.result p')
        result.style.opacity = 0
        chosenHand.setAttribute('src', `/assets/01_assets/images/${userSelect}.png`)
        blockGame()
        compHand.classList.add('animate')
        const compChoice = generateRandomComputerChoice()
        setTimeout(() => {
            result.style.opacity = "1"
            if (compChoice == userSelect) {
                result.textContent = "Its a tie"
            } else if (userSelect == "rock") {
                if (compChoice == "paper") {
                    result.textContent = "Computer Wins"
                } else {
                    result.textContent = "Player Wins"
                }

            } else if (userSelect == "paper") {
                if (compChoice == 'rock') {
                    result.textContent = "Player Wins"
                } else {
                    result.textContent = "Computer Wins"
                }
            } else if (userSelect == 'scissors') {
                if (compChoice == 'rock') {
                    result.textContent = "Computer Wins"
                } else {
                    result.textContent = "Player Wins"
                }
            }

            freeBlockage()
            compHand.classList.remove('animate')
        }, 5000)
    })
})

function blockGame() {
    gameOptions?.forEach((option) => {
        option.style.pointerEvents = 'none'
        console.log(option)
    })
}
function freeBlockage() {
    gameOptions?.forEach((option) => {
        option.style.pointerEvents = 'auto'
        console.log(option)
    })
}

