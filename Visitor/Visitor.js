import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Trapeze from "./Trapeze";
import Triangle from "./Triangle";

export const PI = 3.41;

export class Visitor {

    throwIfNotType(instance, desiredClass){
        if (!(instance instanceof desiredClass)) {
            throw `Not ${desiredClass.constructor.name}`
        }
    }

    calculateTriangleField(triangleInstance) {
        // It would be a great idea to replace all tirangleInstance, squareInstance... names with a generic figureInstance
        this.throwIfNotType(triangleInstance, Triangle);
        const field = triangleInstance.a * triangleInstance.height * 0.5;
        triangleInstance.field = field;
    }
    calculateTriangleCircumference(triangleInstance) {
        this.throwIfNotType(triangleInstance, Triangle);
        const circumference = triangleInstance.a + triangleInstance.b + triangleInstance.c;
        triangleInstance.circumference = circumference;
    }

    calculateSquareField(squareInstance) {
        this.throwIfNotType(squareInstance, Square);
        const field = squareInstance.edge * squareInstance.edge;
        squareInstance.field = field;
    }
    calculateSquareCircumference(squareInstance) {
        this.throwIfNotType(squareInstance, Square);
        const circumference = squareInstance.edge * 4;
        squareInstance.circumference = circumference;
    }

    calculateCircleField(circleInstance) {
        this.throwIfNotType(circleInstance, Circle);
        const field = circleInstance.radius * circleInstance.radius * PI;
        circleInstance.field = field;
    }
    calculateCircleCircumference(circleInstance) {
        this.throwIfNotType(circleInstance, Circle);
        const circumference = circleInstance.radius * 2 * PI;
        circleInstance.circumference = circumference;
    }

    calculateTrapezeField(trapezeInstance) {
        this.throwIfNotType(trapezeInstance, Trapeze);
        const field = trapezeInstance.a * trapezeInstance.height * 0.5 * trapezeInstance.c;
        trapezeInstance.field = field;
    }
    calculateTrapezeCircumference(trapezeInstance) {
        this.throwIfNotType(trapezeInstance, Trapeze);
        const circumference = trapezeInstance.a + trapezeInstance.b + trapezeInstance.c + trapezeInstance.d;
        trapezeInstance.circumference = circumference;
    }  


    calculateRectangleField(rectangleInstance) {
        this.throwIfNotType(rectangleInstance, Rectangle);
        const field = rectangleInstance.width * rectangleInstance.height;
        rectangleInstance.field = field;
    }
    calculateRectangleCircumference(rectangleInstance) {
        this.throwIfNotType(rectangleInstance, Rectangle);
        const circumference = rectangleInstance.width * 2 + rectangleInstance.height * 2;
        rectangleInstance.circumference = circumference;
    }

    get circumferenceMethods() {
        return [
            this.calculateTriangleCircumference.bind(this),
            this.calculateCircleCircumference.bind(this),
            this.calculateRectangleCircumference.bind(this),
            this.calculateTrapezeCircumference.bind(this),
            this.calculateSquareCircumference.bind(this),
        ]
    }

    get fieldMethods() {
        return [
            this.calculateCircleField.bind(this),
            this.calculateRectangleField.bind(this),
            this.calculateTriangleField.bind(this),
            this.calculateTrapezeField.bind(this),
            this.calculateSquareField.bind(this),
        ]
    }

    calculateIfDefined() {}

    calculateCicrumference(figureInstance){
        this.circumferenceMethods.forEach((method) => {
            try {
                method(figureInstance)
            } catch (e) {}
        }
        )
    }

    calculateField(figureInstance) {
        this.fieldMethods.forEach((method) => {
            try {
                method(figureInstance)
            } catch (e) {}
        }
        )
    }

    visit(figureInstance) {
        this.calculateCicrumference(figureInstance);
        this.calculateField(figureInstance);
    }
}
