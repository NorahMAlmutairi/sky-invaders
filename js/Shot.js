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
        if (direction == "up") this.img = Images.LazerUp
        else if (direction == "down") this.img = Images.FireDown
        else if (direction == "right") this.img = Images.FireRight
        else if (direction == "left") this.img = Images.FireLeft

        if (direction == "right" || direction == "left") {
            this.width = 100
            this.height = 50
        }
    }

}