class Motion extends Shape {

    move(direction) {
        if (direction == "left")
            this.x -= 10
        else if (direction == "right")
            this.x += 10
        else if(direction=="up")
            this.y -= 2

        if (this.x < 0) 
            this.x = 0
        else if (this.x > canvas.width - this.width)
            this.x = canvas.width - this.width
    }
    
    shoot() {
        return new Shot(this.x, this.y)
    }
}