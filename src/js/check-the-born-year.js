document.querySelector('.input_but_leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap_input').value;

    if (userInput === "29.02") {
        document.getElementById('yes_no_leap').textContent = "Ви народились у високосний рік";
    } else {
        document.getElementById('yes_no_leap').textContent = "Ви не народились у високосний рік";
    }
});