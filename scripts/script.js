const clouds = document.getElementById('clouds');
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let interval = setInterval(gameOver, 10);

document.addEventListener('keydown', startGame);

function startGame(event) {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        if (cactus.className !== 'active') {
            clouds.className = 'active';
            cactus.className = 'active';

            dino.style.backgroundImage = 'url(images/dino-run.gif)';
            dino.style.backgroundSize = '65px 65px';
        }

        jump();
    }
} 

function jump() {
    const audio = document.createElement('audio');
    audio.src = 'sounds/jump.mp3';
    audio.autoplay = true;

    if (dino.className !== 'active') {
        dino.className = 'active';
    }

    setTimeout(function() {
        dino.className = '';
    }, 300)
}

function gameOver() {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140 ) {
        const audio = document.createElement('audio');
        audio.src = 'sounds/game-over.mp3';
        audio.autoplay = true;

        dino.style.background = 'url(./images/dino.png)'
        dino.style.backgroundSize = '50px 50px' ;
        clouds.classList.remove('active');
        cactus.classList.remove('active');

        setTimeout(() => {
            alert('Game Over');
            window.location.reload();
        }, 50)
    }
}