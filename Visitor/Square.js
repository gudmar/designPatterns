import Shape from "./AbstractShape";

export default class Square extends Shape {
    constructor(edge){
        super(this);
        this.edge = edge;
        this.field = null;
        this.circumference = null;
    }
    set dimensions({ edge }) {
        this.edge = edge;
    }
    get dimensions() { return{ radius: this.edge };}
    get field() { return this.field }
    get circumference() { return this.circumference }
}
