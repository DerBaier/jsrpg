export default class Sprite {

    constructor(context, position, width, height) {
        this.context = context;
        this.position = position;
        this.width = width;
        this.height = height;
    }


    draw() {
        this.context.fillStyle = "blue";

        this.context.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw();
    }
}

