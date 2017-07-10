var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polygon = (function () {
    function Polygon(sides) {
        this.sides = sides;
    }
    Polygon.prototype.calcSize = function () {
        return this.sides.width * this.sides.length;
    };
    return Polygon;
}());
var sides = {
    length: 5,
    width: 2
};
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super.call(this, sides) || this;
    }
    return rectangle;
}(Polygon));
var rec = new rectangle();
console.log(rec.calcSize());
