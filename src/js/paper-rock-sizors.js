const choices = ["rock", "paper", "scissors"];
    let computerWins = 0;
    let userWins = 0;

    document.getElementById("rock_button").addEventListener("click", function () {
        playGame("rock");
    });

    document.getElementById("scissors_button").addEventListener("click", function () {
        playGame("scissors");
    });

    document.getElementById("paper_button").addEventListener("click", function () {
        playGame("paper");
    });

    document.getElementById("computer_variant").addEventListener("click", function () {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playGame(computerChoice);
    });

    function playGame(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = "";

        if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            userWins++;
            result = "Ви виграли!";
        } else if (userChoice === computerChoice) {
            result = "Нічия!";
        } else {
            computerWins++;
            result = "Комп'ютер виграв!";
        }

        document.getElementById("winOrLose").innerHTML = result;
        document.getElementById("comp_score_text").innerHTML = computerWins;
        document.getElementById("user_score_text").innerHTML= userWins;
    }
