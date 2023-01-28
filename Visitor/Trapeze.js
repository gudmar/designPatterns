import Shape from "./AbstractShape";

export default class Trapeze extends Shape {
    constructor({ height, a, b, c, d }){
        super(this);
        this.dimensions = { height, a, b, c, d }
        this.field = null;
        this.circumference = null;
    }
    set dimensions({ height, a, b, c, d }) {
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    get dimensions() { return { height, a, b, c, d };}
    get field() { return this.field }
    get circumference() { return this.circumference }
}
