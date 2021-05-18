class Shot extends Motion {

    constructor(origin, direction) {
        super()
        this.origin = origin
        this.direction = direction
        this.x = origin.x + origin.width / 2
        this.y = origin.y
        this.width = 50
        this.height = 100
        this.color = "orange"
        if (direction == "up") this.img = assets.LazerUp
        else if (direction == "down") this.img = assets.FireDown
        else if (direction == "right") this.img = assets.FireRight
        else if (direction == "left") this.img = assets.FireLeft

        if (direction == "right" || direction == "left") {
            this.width = 100
            this.height = 50
        }
    }

}