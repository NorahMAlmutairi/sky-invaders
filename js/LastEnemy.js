class LastEnemy extends Motion {
    static directions = ["up-right", "down-right", "up-left", "down-left"]
    constructor() {
        super()
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = 130
        this.height = 100
        this.color = "white"
        this.img = Images.LastEnemy
        this.health = 20
        this.direction = LastEnemy.directions[0]
    }

    move(magnitude = 20) {
        // Randomly change the direction (Chance of changing direction is %1)
        if (Math.round(Math.random() * 100) == 50)
            this.direction = LastEnemy.directions[Math.round(Math.random() * 3)]

        if (this.direction == "up-right") {
            this.x += magnitude
            this.y -= magnitude
        } else if (this.direction == "up-left") {
            this.x -= magnitude
            this.y -= magnitude
        } else if (this.direction == "down-right") {
            this.x += magnitude
            this.y += magnitude
        } else if (this.direction == "down-left") {
            this.x -= magnitude
            this.y += magnitude
        }


        if (this.x > canvas.width - this.width)
            this.direction = this.direction.split("-")[0] + "-left"
        else if (this.x < 0)
            this.direction = this.direction.split("-")[0] + "-right"

        if (this.y > canvas.height - this.height)
            this.direction = "up-" + this.direction.split("-")[1]
        else if (this.y < 0)
            this.direction = "down-" + this.direction.split("-")[1]
    }

    flipDirection() {
        let yDirection = this.direction.split("-")[0]
        let xDirection = this.direction.split("-")[1]
        let newDirection = ""
        if (this.yDirection == "up")
            newDirection = "down-"
        else
            newDirection = "up-"

        if (this.xDirection == "right")
            newDirection += "left"
        else
            newDirection += "right"

        this.direction = newDirection
    }

    shoot() {
        let enemyShots = []
        let directions = ["down", "left", "right"]
        directions.forEach(direction => {
            enemyShots.push(new Shot(this, direction))
        });
        return enemyShots
    }
}