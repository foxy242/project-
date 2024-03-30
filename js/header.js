document.getElementById("sort_select") .addEventListener("change", function () {
    let selectedOption = this.value;
    let ourTeamSection = document.getElementById("our_team")
    let pickScientistSection = document.getElementById("info_section")
    let cheackBornAgeSection = document.getElementById("leap_year_section")
    let calculatorOfTimeSection = document.getElementById("time_calculator_section")
    let calculatorSection = document.getElementById("calculator_section")
    let guessTheNumberSection = document.getElementById("guess_the_number_section")
    let threeNumbersSection = document.getElementById("highest_number_section")
    let dinoGameSection = document.getElementById("dino_game");
    let soccerGameSection = document.getElementById("soccer")
    let paperRockGameSection = document.getElementById("prs_section")
    switch(selectedOption) {
        case "interactive":
            dinoGameSection.classList.remove("display_none");
            soccerGameSection.classList.remove("display_none");
            paperRockGameSection.classList.remove("display_none")
            calculatorOfTimeSection.classList.remove("display_none")
            calculatorSection.classList.remove("display_none")
            guessTheNumberSection.classList.remove("display_none")
            threeNumbersSection.classList.remove("display_none")
            cheackBornAgeSection.classList.remove("display_none")
            ourTeamSection.classList.remove("display_none")
            pickScientistSection.classList.remove("display_none")
            break;
        case "number":
            soccerGameSection.classList.add("display_none");
            dinoGameSection.classList.add("display_none");
            paperRockGameSection.classList.add("display_none")
            calculatorOfTimeSection.classList.remove("display_none")
            calculatorSection.classList.remove("display_none")
            guessTheNumberSection.classList.remove("display_none")
            threeNumbersSection.classList.remove("display_none")
            cheackBornAgeSection.classList.remove("display_none")
            ourTeamSection.classList.add("display_none")
            pickScientistSection.classList.add("display_none")
        case "games":
            dinoGameSection.classList.remove("display_none");
            soccerGameSection.classList.remove("display_none");
            paperRockGameSection.classList.remove("display_none")
            calculatorOfTimeSection.classList.add("display_none")
            calculatorSection.classList.add("display_none")
            guessTheNumberSection.classList.add("display_none")
            threeNumbersSection.classList.add("display_none")
            cheackBornAgeSection.classList.add("display_none")
            ourTeamSection.classList.add("display_none")
            pickScientistSection.classList.add("display_none")
            break;
        case "means":
            dinoGameSection.classList.add("display_none");
            soccerGameSection.classList.add("display_none");
            paperRockGameSection.classList.add("display_none");
            calculatorOfTimeSection.classList.add("display_none")
            calculatorSection.classList.add("display_none")
            guessTheNumberSection.classList.add("display_none")
            threeNumbersSection.classList.add("display_none")
            cheackBornAgeSection.classList.add("display_none")
            ourTeamSection.classList.remove("display_none")
            pickScientistSection.classList.remove("display_none")
            break;
        default:
            break;
    }
});

let header = document.getElementById('header');
let headerLogo = document.querySelector(".header_logo")
let leapYearSection = document.getElementById("leap_year_section")
let guessTheNumberSection = document.getElementById("guess_the_number_section")
let prsSection = document.getElementById("prs_section")
let calculatorSection = document.getElementById("calculator_section")
let timeCalculatorSection = document.getElementById("time_calculator_section")
let dinoGame = document.getElementById("dino_game")
let soccer = document.getElementById("soccer")
let highestNumberSection = document.getElementById("highest_number_section")
let ourTeam = document.getElementById("our_team")
let infoSection = document.getElementById("info_section")
let footer = document.querySelector(".footer")
document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
    if (this.classList.contains('night')) {
        header.style.backgroundColor = '#333';
        leapYearSection.style.backgroundColor = '#333';
        guessTheNumberSection.style.backgroundColor = '#333';
        prsSection.style.backgroundColor = '#333';
        calculatorSection.style.backgroundColor = '#333';
        timeCalculatorSection.style.backgroundColor = '#333';
        dinoGame.style.backgroundColor = '#333';
        soccer.style.backgroundColor = '#333';
        highestNumberSection.style.backgroundColor = '#333';
        ourTeam.style.backgroundColor = '#333';
        infoSection.style.backgroundColor = '#fff';
        footer.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = '#fff';
        leapYearSection.style.backgroundColor = '#fff';
        guessTheNumberSection.style.backgroundColor = '#fff';
        prsSection.style.backgroundColor = '#fff';
        calculatorSection.style.backgroundColor = '#fff';
        timeCalculatorSection.style.backgroundColor = '#fff';
        dinoGame.style.backgroundColor = '#fff';
        soccer.style.backgroundColor = '#fff';
        highestNumberSection.style.backgroundColor = '#fff';
        ourTeam.style.backgroundColor = '#fff';
        infoSection.style.backgroundColor = '#fff';
        footer.style.backgroundColor = '#fff';

    }
});