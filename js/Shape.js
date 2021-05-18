class Shape {
    color = "red"
    x = 0
    y = 0
    width = 0
    height = 0
    img = ""

    //Collision check method
    //Disclaimer : do not try to understand this part of code just leave it and trust it.
    contains(shape, bothWays = true) {
        let inX = this.betweenX(shape.x) || this.betweenX(shape.x + shape.width)
        let inY = this.betweenY(shape.y) || this.betweenY(shape.y + shape.height)
        if (inX && inY)
            return true
        else if (bothWays)
            return shape.contains(this, false)
        else
            return false;
    }

    betweenX(anotherX) {
        return (anotherX > this.x && anotherX < this.x + this.width)
    }

    betweenY(anotherY) {
        return (anotherY > this.y && anotherY < this.y + this.height)
    }

}