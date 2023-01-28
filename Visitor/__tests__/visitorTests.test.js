import Circle from '../Circle.js';
import Triangle from '../Triangle.js';
import Trapeze from '../Trapeze.js'
import Rectangle from '../Rectangle.js'
import Square from '../Square.js';
import { PI, Visitor} from '../Visitor.js'

/**
 * NOTE: 
 * Figures may not be valid. For instance it may not be feasable to construct a trapeze or a triangle
 * of the given instance. It is not checked nore important here.
 * Just the illustration and test of visitor pattern is relevant
 */

const circleA = { class: Circle, input: 3, field: 9*PI, circumference: 2*PI*3 }
const circleB = { class: Circle, input: 5, field: 25*PI, circumference: 2*PI*5 }
const rectangleA = { class: Rectangle, input: {width: 2, height: 3}, field: 6, circumference: 10}
const rectangleB = { class: Rectangle, input: {width: 10, height: 8}, field: 80, circumference: 36 }
const trapezeA = { class: Trapeze, input: {height: 5, a: 8, b: 4, c: 5, d: 4}, circumference: 21, field: 100}
const triangleA = { class: Triangle, input: { height: 4, a: 4, b: 5, c: 5}, circumference: 14, field: 8}
const squareA = { class: Square, input: 8, circumference: 32, field: 64}
const squareB = { class: Square, input: 7, circumference: 28, field: 49}

const calculate = (testInstance) => {
    const visitor = new Visitor;
    const figure = new testInstance.class(testInstance.input)
    figure.accept(visitor);
    return {
        circumference: figure.circumference,
        field: figure.field,
    }
}
const calculateArray = (testSet) => {
    const visitor = new Visitor;
    testSet.map((testInstance) => {
        const figure = new testInstance.class(testInstance.input)
        figure.accept(visitor);
        const received = {
            circumference: figure.circumference,
            field: figure.field,
        }
        const expected = {
            circumference: testInstance.circumference,
            field: testInstance.field,
        }
        return { expected, received }
    })
}


describe('Testing visitor', () => {
    it('Should calculate circle field and circumstance properly', () => {
        const input = circleA;
        const { circumference: expectedCircum, field: expectedField } = input;
        const { circumference: calculatedCircum, field: calculatedField } = calculate(input);
        expect(calculatedCircum).toBe(expectedCircum);
        expect(calculatedField).toBe(expectedField);
    })
    it('Should calculate rectangle field and circumstance properly', () => {
        const input = rectangleA;
        const { circumference: expectedCircum, field: expectedField } = input;
        const { circumference: calculatedCircum, field: calculatedField } = calculate(input);
        expect(calculatedCircum).toBe(expectedCircum);
        expect(calculatedField).toBe(expectedField);
    })
    it('Should calculate trapeze field and circumstance properly', () => {
        const input = trapezeA;
        const { circumference: expectedCircum, field: expectedField } = input;
        const { circumference: calculatedCircum, field: calculatedField } = calculate(input);
        expect(calculatedCircum).toBe(expectedCircum);
        expect(calculatedField).toBe(expectedField);
    })
    it('Should calculate triangle field and circumstance properly', () => {
        const input = triangleA;
        const { circumference: expectedCircum, field: expectedField } = input;
        const { circumference: calculatedCircum, field: calculatedField } = calculate(input);
        expect(calculatedCircum).toBe(expectedCircum);
        expect(calculatedField).toBe(expectedField);
    })
    it('Should calculate square field and circumstance properly', () => {
        const input = squareA;
        const { circumference: expectedCircum, field: expectedField } = input;
        const { circumference: calculatedCircum, field: calculatedField } = calculate(input);
        expect(calculatedCircum).toBe(expectedCircum);
        expect(calculatedField).toBe(expectedField);
    })
    it('Should process many requests with single instance of the visitor', () => {
        const testSet = [circleA, rectangleA, trapezeA, squareA, triangleA, circleB, rectangleB, squareB]
        const result = calculateArray(testSet);
        for(let test in result) {
            expect(test.received).toEqual(test.expected)
        }
    })
})