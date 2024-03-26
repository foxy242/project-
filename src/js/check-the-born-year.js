document.querySelector('.input-but__leap').addEventListener('click', function() {
    let userInput = document.getElementById('leap-input').value;

    // Перевірка чи введене число - "29.02"
    if (userInput === "29.02") {
        document.getElementById('yes-no-leap').textContent = "Ви народились у високосний рік";
    } else {
        document.getElementById('yes-no-leap').textContent = "Ви не народились у високосний рік";
    }
});