const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

interface Player {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    dx: number;
    dy: number;
}

const player: Player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0,
}

function drawPlayer(): void {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update(): void {
    clearCanvas();
    drawPlayer();

    player.x += player.dx; 
    player.y += player.dy;

    requestAnimationFrame(update);
}

function moveUp(): void {
    player.dy = -player.speed;
}

function moveDown(): void {
    player.dy = player.speed;
}

function moveRight(): void {
    player.dx = player.speed;
}

function moveLeft(): void {
    player.dx = -player.speed;
}

function stopMovement(): void {
    player.dx = 0;
    player.dy = 0;
}

document.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'ArrowUp') moveUp();
    if (e.key === 'ArrowDown') moveDown();
    if (e.key === 'ArrowLeft') moveLeft();
    if (e.key === 'ArrowRight') moveRight();
});

document.addEventListener('keyup', (): void => {
    stopMovement();
});

update();
