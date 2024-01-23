class BoundingBox {
    constructor(x, y, width, height) {
        Object.assign(this, { x, y, width, height });

        this.left = x;
        this.top = y;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    };

    collide(oth) {
        if (this.right > oth.left && this.left < oth.right && this.top < oth.bottom && this.bottom > oth.top) return true;
        return false;
    };

    overlap(oth) {
        let a_half = {x: this.width / 2, y: this.height / 2};
        let b_half = {x: oth.width / 2, y: oth.height / 2};

        let a_center = {x: this.right - a_half.x, y: this.bottom - a_half.y};
        let b_center = {x: oth.right - b_half.x, y: oth.bottom - b_half.y};

        let ox = a_half.x + b_half.x - Math.abs(a_center.x - b_center.x);
        let oy = a_half.y + b_half.y - Math.abs(a_center.y - b_center.y);

        return {x: ox, y: oy};
    };
};