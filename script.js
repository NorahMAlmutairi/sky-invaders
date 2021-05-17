let canvas = document.getElementById("gameBoard")
let context = canvas.getContext('2d');
canvas.width = innerWidth - 10
canvas.height = innerHeight - 20
let player = new Player()
let shots = []
function drawAll() {
    context.clearRect(0, 0, 9999, 9999);
    draw(player)
    shots.forEach(shot => draw(shot))
    requestAnimationFrame(drawAll)
}

function draw(shape) {
    context.beginPath();
    context.rect(shape.x, shape.y, shape.width, shape.height)
    context.fill();

}

setInterval(() => shots.forEach(shot => shot.move("up")), 10);


requestAnimationFrame(drawAll)

document.addEventListener("keydown", e => {
    if (e.keyCode == 37) {// left
        player.move("left")
    } else if (e.keyCode == 39) { // right
        player.move("right")
    } else if (e.keyCode == 13) {// enter
        shots.push(player.shoot())
    }
})


