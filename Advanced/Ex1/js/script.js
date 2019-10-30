let testarr = [];
class Vehicles {
    constructor(seats, color, hasMotor, fuelType, price, yearofProduction) {
        this.seats = seats;
        this.color = color;
        this.hasMotor = hasMotor;
        this.fuelType = fuelType;
        this.price = price;
        this.yearofProduction = yearofProduction;
    }
}
class landvehicles extends Vehicles {
    constructor(seats, color, hasMotor, fuelType, price, yearofProduction, gear) {
        super(seats, color, hasMotor, fuelType, price, yearofProduction);
        this.gear = gear;
    }
    landvehicle() {
        console.log(this.seats, this.color, this.hasMotor, this.fuelType, this.price, this.yearofProduction, this.gear);
    }
}
class watervehicles extends Vehicles {
    constructor(seats, color, hasMotor, fuelType, price, yearofProduction, gear) {
        super(seats, color, hasMotor, fuelType, price, yearofProduction);
        this.gear = gear;
    }
    watervehicle() {
        console.log(this.seats, this.color, this.hasMotor, this.fuelType, this.price, this.yearofProduction, this.gear);
    }
}
class airvehicles extends Vehicles {
    constructor(seats, color, hasMotor, fuelType, price, yearofProduction, gear) {
        super(seats, color, hasMotor, fuelType, price, yearofProduction);
        this.gear = gear;
    }
    airvehicle() {
        console.log(this.seats, this.color, this.hasMotor, this.fuelType, this.price, this.yearofProduction, this.gear);
    }
}
let vehicle1 = new landvehicles(5, "blue", true, "gasoline", 500000, 1989, "chainwheel");
let vehicle2 = new landvehicles(2, "red", true, "gasoline", 200000, 1999, "chainwheel");
let vehicle3 = new landvehicles(3, "purple", false, "gasoline", 10000, 1979, "wheel");
testarr.push(vehicle1);
testarr.push(vehicle2);
testarr.push(vehicle3);
