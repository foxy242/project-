const canvas = document.getElementById('canvass');
const ctx = canvas.getContext('2d');
const gravity = 0.5;
const jumpStrength = 10.5;
let isJumping = false;
let dinoY = canvas.height - 40;
let dinoYSpeed = 0;
let obstacles = [];
const dinoImage = new Image();
const cactusImage = new Image();
cactusImage.style.width = "10px"
dinoImage.src = "https://w7.pngwing.com/pngs/39/802/png-transparent-gray-dinosaur-illustration-tyrannosaurus-t-shirt-dino-t-rex-runner-2-lonely-t-rex-run-2-google-chrome-8-bit-game-angle-text-thumbnail.png"
cactusImage.src = 'https://w7.pngwing.com/pngs/380/807/png-transparent-game-off-game-jam-gamedev-net-video-game-cactus-game-angle-text-thumbnail.png';
let gameover = false;
let gameStarted = false;

function jump() {
    if (!isJumping && gameStarted) {
        isJumping = true;
        dinoYSpeed = -jumpStrength;
    }
}

document.addEventListener('keydown', event => {
    if (event.code === 'Space' && !gameover) {
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
    ctx.drawImage(dinoImage, 50, dinoY, 30, 30); // Малюємо зображення динозавра замість зеленого квадрата
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(cactusImage, obstacle.x, canvas.height - obstacle.height, obstacle.width, obstacle.height); // Малюємо зображення кактуса замість червоного квадрата
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
        obstacle.x -= 3;
    });

    if (Math.random() < 0.02) {
        obstacles.push({
            x: canvas.width,
            width: 20 + Math.random() * 20,
            height: 20 + Math.random() * 70
        });
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
}

document.getElementById('retryButton').onclick = retry;