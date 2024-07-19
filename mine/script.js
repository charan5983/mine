function showConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confettiPieces = [];
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            // color: hsl(${Math.random() * 360}, 100%, 50%) // Corrected template literal syntax
        });
    }

    function updateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < confettiPieces.length; i++) {
            let confetti = confettiPieces[i];
            confetti.y += confetti.speed;
            confetti.angle += confetti.speed;
            if (confetti.y > canvas.height) {
                confetti.y = -confetti.size;
                confetti.x = Math.random() * canvas.width;
            }
            ctx.save();
            ctx.translate(confetti.x, confetti.y);
            ctx.rotate(confetti.angle * Math.PI / 180);
            ctx.fillStyle = confetti.color;
            ctx.fillRect(-confetti.size / 2, -confetti.size / 2, confetti.size, confetti.size);
            ctx.restore();
        }
        requestAnimationFrame(updateConfetti);
    }
    updateConfetti();

    const music = document.getElementById('music');
    music.play();

    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}