import Sprite from "./base/Sprite.js";

let canvas = document.getElementsByClassName(
    "mainWindow"
)[0];
let c = canvas.getContext("2d");



let player = new Sprite(c, { x: 100, y: 100 }, 50, 50)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c?.fillRect(0, 0, canvas.width, canvas.height);
animate();

function animate() {
    window.requestAnimationFrame(animate);
    player.update();
}