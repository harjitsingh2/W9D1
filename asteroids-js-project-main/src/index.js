import MovingObject from "./moving_object.js";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    window.MovingObject = MovingObject;
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#9D9D9D"
    });

    mo.draw(ctx);
});