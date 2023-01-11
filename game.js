const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth= canvas.width =600;
const canvasheight =canvas.height = 600;

const playerImage = new Image();
playerImage.src = 

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasheight);
//    ctx.fillRect(50, 50, 100, 100)
    ctx.drawImage(playerImage, 50, 50, canvasWidth, canvasheight);
    requestAnimationFrame(animate);
};

animate();