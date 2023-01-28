import Shape from "./AbstractShape";

export default class Square extends Shape {
    constructor(edge){
        super();
        this.edge = edge;
        this._field = null;
        this._circumference = null;
    }
    set dimensions({ edge }) {
        this.edge = edge;
    }
    get dimensions() { return{ radius: this.edge };}
    get field() { return this._field }
    get circumference() { return this._circumference }
    set field(v) {this._field = v}
    set circumference(v) {this._circumference = v}

}
