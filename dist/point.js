"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(b) {
        let dx = this.x - b.x;
        let dy = this.y - b.y;
        return Math.hypot(dx, dy);
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map