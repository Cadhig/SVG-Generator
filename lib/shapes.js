import fs, { writeFile } from 'fs'

class Shape {
    constructor() {
    }
    textColor = ''
    shapeColor = ''
    letters = ''
    svgContent = ''
    setShapeColor(color) {
        this.shapeColor = color
    }
    setTextColor(color) {
        this.textColor = color
    }
    setLetters(letters) {
        this.letters = letters
    }
    setSvgContents(content) {
        this.svgContent = content
    }
    generateSvg() {
        fs.writeFile('./logo.svg', this.svgContent, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        })
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    render() {
        const svg = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="150" cy="100" fill="${this.shapeColor}" />
        <text x="90" y="120" fill="${this.textColor}" font-size="60">${this.letters}</text>
        </svg>`
        this.setSvgContents(svg)
        return svg
    }
}

class Square extends Shape {
    constructor() {
        super()
    }
    render() {
        const svg = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />
            <text x="40" y="100" fill="${this.textColor}" font-size="45">${this.letters}</text>
        </svg>`
        this.setSvgContents(svg)
        return svg

    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }
    render() {
        const svg = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 200,190 0,190" fill="${this.shapeColor}" />
            <text x="65" y="140" fill="${this.textColor}" font-size="35">${this.letters}</text> </svg>`
        this.setSvgContents(svg)
        return svg
    }
}

export function makeFile(answers) {
    if (answers.shape == "Square") {
        const shape = new Square();
        shape.setShapeColor(answers.shapeColor)
        shape.setTextColor(answers.textColor)
        shape.setLetters(answers.characters)
        shape.render()
        shape.generateSvg()
    }
    if (answers.shape == "Circle") {
        const shape = new Circle();
        shape.setShapeColor(answers.shapeColor)
        shape.setTextColor(answers.textColor)
        shape.setLetters(answers.characters)
        shape.render()
        shape.generateSvg()
    }
    if (answers.shape == "Triangle") {
        const shape = new Triangle();
        shape.setShapeColor(answers.shapeColor)
        shape.setTextColor(answers.textColor)
        shape.setLetters(answers.characters)
        shape.render()
        shape.generateSvg()
    }

}