import Shape from "./AbstractShape";

export default class Rectangle extends Shape {
    constructor(width, height){
        super(this);
        this.width = width;
        this.height = height;
        this.field = null;
        this.circumference = null;
    }
    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
    get dimensions() { return{ height: this.height, width: this.width };}
    get field() { return this.field }
    get circumference() { return this.circumference }
}
