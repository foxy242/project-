const inputGuess = document.querySelector(".guess_the_number_input")
const buttonGuess = document.querySelector(".guess_the_number_button")
const dandruffGuessSvg = document.querySelector(".guess_the_number_svg")
const answerGuess = document.querySelector(".guess_the_number_text")

const secretNumber = Math.floor(Math.random() * 100) + 1;
const guess = inputGuess.value;
buttonGuess.addEventListener('click', (event) => {
    if (guess === secretNumber) {
        answerGuess.textContent = `Вітаю, ви вгадали число! ${secretNumber}`
        answerGuess.style.color = "#039900"
    } else {
        answerGuess.textContent = `Ви програли, комп’ютер загадав ${secretNumber}`
        answerGuess.style.color = "#990000"
    }
})
