
let canvas = document.getElementById("gameBoard")
let context = canvas.getContext('2d');
canvas.width = innerWidth / 2 - 10
canvas.height = innerHeight - 20

const assets = {
    Enemy: new Image,
    Player: new Image,
    LazerUp: new Image,
    FireDown: new Image,
    FireRight: new Image,
    FireLeft: new Image,
    Block: new Image,
    LastEnemy: new Image,
}

assets.Enemy.src = "assets/enemy.png"
assets.Player.src = "assets/player.png"
assets.LazerUp.src = "assets/lazer-up.png"
assets.FireDown.src = "assets/fire-down.png"
assets.FireRight.src = "assets/fire-right.png"
assets.FireLeft.src = "assets/fire-left.png"
assets.Block.src = "assets/block.png"
assets.LastEnemy.src = "assets/lastEnemy.png"

let player = new Player()

let shots = []
let enemies = []
let blocks = []
let lastEnemy = undefined
let score = 0

for (let i = 0; i < 4; i++)
    blocks.push(new Block())


function drawAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw(player)
    shots.forEach(shot => draw(shot))
    enemies.forEach(enemy => draw(enemy))
    blocks.forEach(block => draw(block))
    if (lastEnemy != undefined) {

        draw(lastEnemy)
    }
    drawScore()
    requestAnimationFrame(drawAll)
}

function drawScore() {
    context.beginPath();
    context.font = 'bold 20px serif';
    context.fillStyle = "black"
    context.fillText(`Score: ${score}`, 10, 30);
    context.fill();
    if (lastEnemy != undefined) {
        context.beginPath();
        context.font = 'bold 18px serif';
        context.fillStyle = "red"
        context.fillText(`Last Enemy Health: ${lastEnemy.health}`, 10, 60);
        context.fill();
    }
}

function draw(shape) {
    context.beginPath();
    context.fillStyle = shape.color;
    if (shape.img == "")
        context.rect(shape.x, shape.y, shape.width, shape.height)
    else
        context.drawImage(shape.img, shape.x, shape.y, shape.width, shape.height);
    context.fill();
}
let playerDirection = ""

document.addEventListener("keydown", e => {
    if (e.keyCode == 37) {// left
        playerDirection = "left"
    } else if (e.keyCode == 39) { // right

        playerDirection = "right"
    } else if (e.keyCode == 13 || e.keyCode == 32) {// enter or space
        shots.push(player.shoot())
    }
})
document.addEventListener("keyup", e => {
    playerDirection = ""

})

let playerMover = setInterval(() => {


    if (playerDirection == "left")
        player.move("left", 5)
    else if (playerDirection == "right")
        player.move("right", 5)

}, 10)

let shotsMover = setInterval(() => {
    for (let i = 0; i < shots.length; i++) {
        shots[i].move(shots[i].direction);
        if (!shots[i].inCanvas()) {
            shots.splice(i, 1)
            continue
        } else if (shots[i].origin instanceof Player) {
            if (lastEnemy != undefined && shots[i].contains(lastEnemy)) {
                lastEnemy.health--;
                shots.splice(i, 1)
                if (lastEnemy.health == 0) {
                    alert("YOU WIN")
                    reset()
                    return
                }
                continue
            }
            for (let j = 0; j < enemies.length; j++) {
                if (enemies[j].contains(shots[i])) {
                    shots.splice(i, 1)
                    enemies.splice(j, 1)
                    score++
                    if (score == 50) {
                        lastEnemy = new LastEnemy()
                    }
                    return
                }
            }
        } else if (shots[i].origin instanceof LastEnemy) {
            if (shots[i].contains(player)) {
                alert("You lost")
                reset()
                return
            }
        }
        for (let j = 0; j < blocks.length; j++) {
            if (shots[i].contains(blocks[j])) {
                shots.splice(i, 1)
                break
            }
        }
    }
}, 100);


let enemyCreator = setInterval(() => enemies.push(new Enemy()), 1000)


let enemyMover = setInterval(() => {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move("down");
        if (!enemies[i].inCanvas()) {
            enemies.splice(i, 1)
            continue
        } else if (enemies[i].contains(player)) {
            alert("You lost")
            reset()
            return
        }
        for (let j = 0; j < blocks.length; j++) {
            if (enemies[i].contains(blocks[j])) {
                enemies.splice(i, 1)
                break
            }
        }
    }
}, 100);


let lastEnemyMover = setInterval(() => {
    if (lastEnemy != undefined) {
        lastEnemy.move(3)
        if (lastEnemy.contains(player)) {
            alert("You lost")
            reset()
            return
        }
        blocks.forEach(block => {
            if (lastEnemy.contains(block))
                lastEnemy.flipDirection()
        });
    }
}, 10)

let lastEnemyShooter = setInterval(() => {
    if (lastEnemy != undefined) {
        let enemyShots = lastEnemy.shoot()
        enemyShots.forEach(shot => {
            shots.push(shot)
        });
    }
}, 3000)


drawAll()
function reset() {
    shots = []
    enemies = []
    blocks = []
    lastEnemy = undefined
    score = 0
    player = new Player()
    for (let i = 0; i < 4; i++)
        blocks.push(new Block())
}