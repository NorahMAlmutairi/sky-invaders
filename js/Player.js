class Player extends Motion {
    constructor() {
        super()
        this.x = 0;
        this.width = 60;
        this.height = 60;
        this.y = canvas.height - this.height
        this.color = "white"
        this.img = assets.Player
    }

    shoot() {
        return new Shot(this, "up")
    }


}