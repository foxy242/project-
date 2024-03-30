let field = document.getElementById('field');
    let ball = document.getElementById('ball');
    
    let ballSpeedX = 0;
    let ballSpeedY = 0;

    field.addEventListener('mousedown', function(event) {
        let fieldRect = field.getBoundingClientRect();
        let ballRect = ball.getBoundingClientRect();

        let mouseX = event.clientX - fieldRect.left;
        let mouseY = event.clientY - fieldRect.top;

        let ballX = ballRect.left - fieldRect.left + ballRect.width / 2;
        let ballY = ballRect.top - fieldRect.top + ballRect.height / 2;

        let deltaX = mouseX - ballX;
        let deltaY = mouseY - ballY;

        let angle = Math.atan2(deltaY, deltaX);
        let speed = 5;

        ballSpeedX = Math.cos(angle) * speed;
        ballSpeedY = Math.sin(angle) * speed;
    });

    function moveBall() {
        let fieldRect = field.getBoundingClientRect();
        let ballRect = ball.getBoundingClientRect();

        let nextX = ballRect.left - fieldRect.left + ballSpeedX;
        let nextY = ballRect.top - fieldRect.top + ballSpeedY;

        if (nextX < 0 || nextX + ballRect.width > fieldRect.width) {
            ballSpeedX *= -1;
        }
        if (nextY < 0 || nextY + ballRect.height > fieldRect.height) {
            ballSpeedY *= -1;
        }

        ball.style.left = nextX + 'px';
        ball.style.top = nextY + 'px';
        
        requestAnimationFrame(moveBall);
    }

    moveBall();