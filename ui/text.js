export default class Text {

    constructor(text, position, context) {
        this.context = context;
        this.position = position;
        this.text = text;
    }


    draw() {
        this.context.fillStyle = "red";
        this.context.font = "32px arial";
        this.context.fillText(
            this.text,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw();
    }
}