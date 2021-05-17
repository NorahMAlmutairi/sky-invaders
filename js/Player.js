class Player extends Motion {
    constructor() {
        super()
        this.x = 0;
        this.width = 200;
        this.height = 100;
        this.y = canvas.height - this.height
        this.color = "white"
        this.img = Images.Player
    }

    shoot() {
        return new Shot(this, "up")
    }


}