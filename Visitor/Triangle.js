import Shape from "./AbstractShape";

export default class Triangle extends Shape {
    constructor({ height, a, b, c }){
        super(this);
        this.dimensions = { height, a, b, c }
        this.field = null;
        this.circumference = null;
    }
    set dimensions({ height, a, b, c }) {
        this.height = height;
        this.a = a;
        this.b = b;
        this.c = c;
    };
    get dimensions() { return { height, a, b, c };}
    get field() { return this.field }
    get circumference() { return this.circumference }
}
