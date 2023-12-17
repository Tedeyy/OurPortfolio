//Smooth Scroll

//Bouncing Ball
var ball = document.querySelector('.ball'),
    info = document.querySelector('.info'),
    y = 1,
    gravity = 1;
var intervalId = setInterval(function (bounce) {
        if (y >= 352) {
            clearInterval(intervalId);
        } else if (y > 350) {
            gravity = -gravity;
        }
    
        gravity += 1;
        y += gravity;
        ball.style.top = y + 'px';
        info.innerText = "Y : " + y + ", G : " + gravity;
    }, 45);

// Restart Ball Bounce
const restartButton = document.getElementById('rball');

restartButton.addEventListener('click', function () {
    y = 0;
    gravity = 0;
    bounce();
});