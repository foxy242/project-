function calculateTime() {
    let inputValue = parseInt(document.getElementById('start-timer').value);

    let days = Math.floor(inputValue / 86400);
    let hours = Math.floor((inputValue % 86400) / 3600);
    let minutes = Math.floor((inputValue % 3600) / 60);
    let seconds = inputValue % 60;
    let timeOutput = document.querySelector('.time_calc_time');
    timeOutput.textContent = ` ${days}дн   ${hours}:${minutes}:${seconds}`;
}

document.querySelector('.time_button_calculator').addEventListener('click', calculateTime);