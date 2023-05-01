document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
});

class MovingObject {
    constructor(option_obj) {
        this.pos = option_obj.pos,
        this.vel = option_obj.vel,
        this.radius = option_obj.radius,
        this.color = option_obj.color
    };

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);
        // ctx.strokeStyle = "white";
        // ctx.lineWidth = 1;
        // ctx.stroke();
        ctx.fill();
    }

    move(pos, vel) {
        this.pos += pos;
        this.vel += vel;
    }
};


// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#9D9D9D"
// });

export default MovingObject;