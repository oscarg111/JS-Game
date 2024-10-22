var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext('2d');
var player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0,
};
function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function update() {
    clearCanvas();
    drawPlayer();
    player.x += player.dx;
    player.y += player.dy;
    requestAnimationFrame(update);
}
function moveUp() {
    player.dy = -player.speed;
}
function moveDown() {
    player.dy = player.speed;
}
function moveRight() {
    player.dx = player.speed;
}
function moveLeft() {
    player.dx = -player.speed;
}
function stopMovement() {
    player.dx = 0;
    player.dy = 0;
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp')
        moveUp();
    if (e.key === 'ArrowDown')
        moveDown();
    if (e.key === 'ArrowLeft')
        moveLeft();
    if (e.key === 'ArrowRight')
        moveRight();
});
document.addEventListener('keyup', function () {
    stopMovement();
});
update();
