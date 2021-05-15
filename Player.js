class Player extends Motion {
    element = document.getElementById("player")

    move(direction) {
        if (this.element.style.left == "")
            this.element.style.left = "0px"

        if (direction == "left")
            this.element.style.left = (Math.max(20, parseInt(this.element.style.left)) - 20) + "px";
        else if (direction == "right")
            this.element.style.left = (Math.min(270, parseInt(this.element.style.left)) + 20) + "px";
    }

}