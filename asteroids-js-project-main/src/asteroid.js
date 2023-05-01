import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "red";

    constructor(option_obj) {
        this.pos = option_obj.pos,
        this.vel = Util.randomVec(5),
        this.radius = RADIUS,
        this.color = COLOR
    };
}

export default Asteroid;