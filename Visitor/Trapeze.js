import Shape from "./AbstractShape";

export default class Trapeze extends Shape {
    constructor({ height, a, b, c, d }){
        super();
        this.dimensions = { height, a, b, c, d }
        this._field = null;
        this._circumference = null;
    }
    set dimensions({ height, a, b, c, d }) {
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    get dimensions() { return { height, a, b, c, d };}
    get field() { return this._field }
    get circumference() { return this._circumference }
    set field(v) {this._field = v}
    set circumference(v) {this._circumference = v}

}
