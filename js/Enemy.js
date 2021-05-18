class Enemy extends Motion {
    constructor() {
        super()
        this.width = 50;
        this.height = 50;
        this.y = 0;
        this.x = Math.random() * (canvas.width - this.width)
        this.color = '#B44'
        this.img = assets.Enemy
    }
}