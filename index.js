import Sprite from "./base/Sprite.js";
import Text from "./ui/text.js";

let canvas = document.getElementsByClassName(
    "mainWindow"
)[0];
let c = canvas.getContext("2d");



let player = new Sprite(c, { x: 100, y: 100 }, 50, 50)

let text = new Text("Willkommen", { x: 0, y: 30 }, c);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c?.fillRect(0, 0, canvas.width, canvas.height);
animate();

function animate() {
    window.requestAnimationFrame(animate);


    player.update();
    text.update();
}