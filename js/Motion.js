class Motion extends Shape {

    move(direction, magnitude = 20) {
        if (direction == "left")
            this.x -= magnitude
        else if (direction == "right")
            this.x += magnitude
        else if (direction == "up")
            this.y -= magnitude
        else if (direction == "down")
            this.y += magnitude

        if (this.x < 0)
            this.x = 0
        else if (this.x > canvas.width - this.width)
            this.x = canvas.width - this.width
    }

    inCanvas() {
        if (this.x >= canvas.width - this.width || this.x <= 0 || this.y > canvas.height || this.y < 0)
            return false
        else
            return true
    }
}