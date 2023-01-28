import Shape from "./AbstractShape";

export default class Circle extends Shape {
    constructor(radius){
        super(this);
        this.radius = radius;
        this.field = null;
        this.circumference = null;
    }
    set dimensions({ radius }) {
        this.radius = radius;
    }
    get dimensions() { return{ radius: this.radius };}
    get field() { return this.field }
    get circumference() { return this.circumference }
    accept(visitor) { visitor.visit(this) }
}
