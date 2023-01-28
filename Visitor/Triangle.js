import Shape from "./AbstractShape";

export default class Triangle extends Shape {
    constructor({ height, a, b, c }){
        super();
        this.dimensions = { height, a, b, c }
        this._field = null;
        this._circumference = null;
    }
    set dimensions({ height, a, b, c }) {
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
    };
    get dimensions() { return { height, a, b, c };}
    get field() { return this._field }
    get circumference() { return this._circumference }
    set field(v) {this._field = v}
    set circumference(v) {this._circumference = v}

}
