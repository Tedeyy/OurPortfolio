//Bouncing Ball
var ball = document.querySelector('.ball'),
    info = document.querySelector('.info'),
    y = 1,
    gravity = 1;
    var intervalId = setInterval(function () {
        if (y >= 352) {
            clearInterval(intervalId);
        } else if (y > 350) {
            gravity = -gravity;
        }
    
        gravity += 1;
        y += gravity;
        ball.style.top = y + 'px';
        info.innerText = "Y : " + y + ", G : " + gravity;
    }, 50);