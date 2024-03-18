//4.Write a class to calculate Uber price

class Uber {
    constructor(distance, vehicle) {
        this.distance = distance;
        this.vehicle = vehicle;
    }
}

Uber.prototype.priceCalculation = function() {
    let basePrice = 40;

    if (this.vehicle === "SUV") {
        basePrice += 20;
    } else if (this.vehicle === "Sedan") {
        basePrice += 10;
    } else if (this.vehicle === "Auto") {
        basePrice += 5;
    }
    const total = basePrice + (15 * this.distance); 
    return total;
}

let ride1 = new Uber(15, "SUV");
console.log("The cost of the SUV ride is: " + ride1.priceCalculation());

let ride2 = new Uber(10, "Sedan");
console.log("The cost of the Sedan ride is: " + ride2.priceCalculation());

let ride3 = new Uber(20, "Auto");
console.log("The cost of the Auto ride is: " + ride3.priceCalculation());
