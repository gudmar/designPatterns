import Shape from "./AbstractShape";

export default class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
        this._field = null;
        this._circumference = null;
    }
    set dimensions({ radius }) {
        this.radius = radius;
    }
    get dimensions() { return{ radius: this.radius };}
    get field() { return this._field }
    set field(v) {this._field = v}
    set circumference(v) {this._circumference = v}
    get circumference() { return this._circumference }
    accept(visitor) { visitor.visit(this) }
}
