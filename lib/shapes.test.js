import { Shape } from "./shapes";

describe("testing shape", () => {
    test("When setShapeColor() is called, it sets shapeColor property.", () => {
        const shape = new Shape()
        shape.setShapeColor("red")
        expect(shape.shapeColor).toEqual("red")
    })
    test("When setTextColor() is called, it sets textColor.", () => {
        const shape = new Shape()
        shape.setTextColor("blue")
        expect(shape.textColor).toEqual("blue")
    })
    test("When setLetters() is called, it sets letters.", () => {
        const shape = new Shape()
        shape.setLetters("SVG")
        expect(shape.letters).toEqual("SVG")
    })
})

