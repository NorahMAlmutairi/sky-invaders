// let y = 0;
// let enemies = document.getElementsByClassName("enemy")
// for (let i = 0; i < enemies.length; i++) {
//     enemies[i].style.left = Math.floor((Math.random() * 330)) + "px";
//     enemies[i].style.top = y + "px"
//     y = y - 150
// }


// window.setInterval(() => {
//     for (let i = 0; i < enemies.length; i++)
//         if (parseInt(enemies[i].style.top) >= 550)
//             enemies[i].style.top = "0px"
//         else
//             enemies[i].style.top = (parseInt(enemies[i].style.top) + 10) + "px"
// }, 100);

// let blocks = document.getElementsByClassName("block");
// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].style.left = Math.floor((Math.random() * 300)) + "px";
//     blocks[i].style.top = Math.floor((Math.random() * (600 - 40 - 100))) + "px";

// }


// let enemiesObjects = []
// for (let i = 0; i < enemies.length; i++) {
//     let htmlEnemy = enemies[i]
//     let objectEnemy = new Enemy();
//     objectEnemy.element = htmlEnemy;
// }


let player = new Player()

document.addEventListener("keydown", e => {
    if (e.keyCode == 37) {// left
        player.move("left")
    } else if (e.keyCode == 39) { // right
        player.move("right")
    }
})