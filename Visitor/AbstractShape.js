
export default class Shape {
    set dimensions(obj) {};
    get dimensions() {};
    get field() {};
    get circumference() {};
    accept(visitor) { visitor.visit(this) }
}