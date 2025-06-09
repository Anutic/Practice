class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);

console.log("Ширина:", rect.width);      
console.log("Высота:", rect.height);     
console.log("Площадь:", rect.getArea());       
console.log("Периметр:", rect.getPerimeter()); 