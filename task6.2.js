//2.UML:Unified Modelling Language
//Class circle(Constructors:Radius, Color)

class Circle {
    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    get radius() {
        return this._radius;
    }
    // Setter method for radius
    set radius(radius) {
        this._radius = radius;
    }

    // Getter method for color
    get color() {
        return this._color;
    }

    // Setter method for color
    set color(color) {
        this._color = color;
    }
//Area and Circumference Calculation
    areacalculation() {
        return Math.PI * this._radius ** 2;
    }

    circumferencecalculation() {
        return 2 * Math.PI * this._radius;
    }
}

let c1 = new Circle(1.0, "Red");
console.log("Area of the circle is " + c1.areacalculation().toFixed(2));
console.log("Circumference of the circle is " + c1.circumferencecalculation().toFixed(2));

// Using getters and setters
console.log("Radius of the circle: " + c1.radius);
c1.radius = 2.5; // setting new radius
console.log("New radius of the circle: " + c1.radius);

console.log("Color of the circle:" + c1.color);
c1.color = "Blue"
console.log("New color of the circle:" + c1.color)