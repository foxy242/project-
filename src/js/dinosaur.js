const canvas = document.getElementById('canvass');
const ctx = canvas.getContext('2d');
const gravity = 0.5;
const jumpStrength = 11;
let isJumping = false;
let dinoY = canvas.height - 40;
let dinoYSpeed = 0;
let obstacles = [];
const dinoImage = new Image();
const cactusImage = new Image();
dinoImage.src = "https://w7.pngwing.com/pngs/39/802/png-transparent-gray-dinosaur-illustration-tyrannosaurus-t-shirt-dino-t-rex-runner-2-lonely-t-rex-run-2-google-chrome-8-bit-game-angle-text-thumbnail.png"
cactusImage.src = 'https://w7.pngwing.com/pngs/380/807/png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text-thumbnail.png';
let gameover = false;
let gameStarted = false;

let obstacleSpawnInterval = 100; // Інтервал між спавнами
let obstacleSpawnCounter = 0; // Лічильник для відстеження інтервалу

function jump() {
    if (!isJumping && gameStarted) {
        isJumping = true;
        dinoYSpeed = -jumpStrength;
    }
}

document.addEventListener('keydown', event => {
    if (event.code === 'KeyW' && !gameover) {
        if (!gameStarted) {
            gameStarted = true;
            draw();
        }
        jump();
    }
});

function retry() {
    document.location.reload();
}

function drawDino() {
    ctx.drawImage(dinoImage, 50, dinoY, 30, 30);
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(cactusImage, obstacle.x, canvas.height - obstacle.height, obstacle.width, obstacle.height);
    });
}

function updateDino() {
    dinoY += dinoYSpeed;
    dinoYSpeed += gravity;

    if (dinoY >= canvas.height - 40) {
        dinoY = canvas.height - 40;
        dinoYSpeed = 0;
        isJumping = false;
    }
}

function updateObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x -= 5;
    });

    if (obstacleSpawnCounter <= 0) {
        if (Math.random() < 0.02) {
            let numObstacles = Math.floor(Math.random() * 3) + 1; // Генеруємо випадкову кількість від 1 до 3
            let lastObstacleX = canvas.width; // Зберігаємо x координату останнього куща для перевірки відступу
            for (let i = 0; i < numObstacles; i++) {
                let minSpacing = 5; // Мінімальний відступ між кущами
                let maxSpacing = 20; // Максимальний відступ між кущами
                let spacing = minSpacing + Math.random() * (maxSpacing - minSpacing); // Випадкове значення відступу між кущами
                obstacles.push({
                    x: lastObstacleX + spacing, // Додаємо випадковий відступ до x координати останнього куща
                    width: 20 + Math.random() * 10,
                    height: 20 + Math.random() * 70
                });
                lastObstacleX = obstacles[obstacles.length - 1].x + obstacles[obstacles.length - 1].width; // Оновлюємо x координату останнього куща
            }
            obstacleSpawnCounter = obstacleSpawnInterval; // Скидаємо лічильник
        }
    } else {
        obstacleSpawnCounter--;
    }

    obstacles = obstacles.filter(obstacle => obstacle.x > -obstacle.width);
}

function collisionDetection() {
    obstacles.forEach(obstacle => {
        if (dinoY + 30 >= canvas.height - obstacle.height && dinoY <= canvas.height && 50 + 30 >= obstacle.x && 50 <= obstacle.x + obstacle.width) {
            gameover = true;
            document.getElementById('retryButton').style.display = 'block';
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDino();
    drawObstacles();
    updateDino();
    updateObstacles();
    collisionDetection();
    if (!gameover) {
        requestAnimationFrame(draw);
    }
    obstacleSpawnCounter--; // Додайте цей рядок для обнулення лічильника під час кожної анімаційної кадру
}

document.getElementById('retryButton').onclick = retry;