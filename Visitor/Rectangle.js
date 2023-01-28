import Shape from "./AbstractShape";

export default class Rectangle extends Shape {
    constructor({ width, height }){
        super();
        this.width = width;
        this.height = height;
        this._field = null;
        this._circumference = null;
    }
    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
    get dimensions() { return{ height: this.height, width: this.width };}
    get field() { return this._field }
    get circumference() { return this._circumference }
    set field(v) {this._field = v}
    set circumference(v) {this._circumference = v}

}
