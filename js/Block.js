class Block extends Motion {

    constructor() {
        super()
        this.width = 50;
        this.height = 50;
        this.x = Math.max((this.width * 2), Math.random() * canvas.width - (this.width * 4))
        this.y = Math.max((this.height * 2), Math.random() * canvas.height - (this.height * 4))
        this.color = "grey"
        this.img = assets.Block
    }
}