document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
  });

// const refs = {
//   openModalBtn: document.querySelector('[data-open-header-modal]'),
//   closeModalBtn: document.querySelector('[data-close-header-modal]'),
//   backdrop: document.querySelector('[data-header-backdrop]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// refs.backdrop.addEventListener('click', logBackdropClick);

// function toggleModal() {
//   refs.backdrop.classList.toggle('header-is-hidden');
// }

// function logBackdropClick() {
//   console.log('Це клік в бекдроп');
// }

  document.getElementById("conductor").addEventListener("change", function() {
    let selectedOption = this.value;
// Means
    let ourTeamSection = document.getElementById("our-team")
    let pickScientistSection = document.getElementById("info__section")
// Numbers
// let cheackBornAgeSection = document.getElementById("")
    let calculatorOfTimeSection = document.getElementById("time-calculator__section")
    let calculatorSection = document.getElementById("calculator__section")
    let guessTheNumberSection = document.getElementById("guess-the-number-section")
    let threeNumbersSection = document.getElementById("highest-number__section")
// Games
    let dinoGameSection = document.getElementById("dino-game");
    let soccerGameSection = document.getElementById("soccer")
    let paperRockGameSection = document.getElementById("prs__section")
    switch(selectedOption) {
        case "interactive":
// Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")
// Number
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
// Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        case "number":
//  Games 
            soccerGameSection.classList.add("display-none");
            dinoGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none")
// Numbers
            calculatorOfTimeSection.classList.remove("display-none")
            calculatorSection.classList.remove("display-none")
            guessTheNumberSection.classList.remove("display-none")
            threeNumbersSection.classList.remove("display-none")
// Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            break;
        case "games":
// Games
            dinoGameSection.classList.remove("display-none");
            soccerGameSection.classList.remove("display-none");
            paperRockGameSection.classList.remove("display-none")
// Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
// Means
            ourTeamSection.classList.add("display-none")
            pickScientistSection.classList.add("display-none")
            break;
        case "means":
// Games
            dinoGameSection.classList.add("display-none");
            soccerGameSection.classList.add("display-none");
            paperRockGameSection.classList.add("display-none");
// Numbers
            calculatorOfTimeSection.classList.add("display-none")
            calculatorSection.classList.add("display-none")
            guessTheNumberSection.classList.add("display-none")
            threeNumbersSection.classList.add("display-none")
// Means
            ourTeamSection.classList.remove("display-none")
            pickScientistSection.classList.remove("display-none")
            break;
        default:
            break;
    }
});