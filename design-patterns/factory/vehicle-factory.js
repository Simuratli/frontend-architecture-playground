class Car {
    constructor(brand,speed){
        this.type = 'car';
        this.brand = brand;
        this.speed = speed;
    }
}

class Bike {
    constructor(brand,speed){
        this.type = 'bike';
        this.brand = brand;
        this.speed = speed;
    }
}


class VehicleFactory {
    static create(type,brand,speed){
        if(type === 'car') return new Car(brand,speed);
        if(type === 'bike') return new Bike(brand,speed);
    }
}

const myCar = VehicleFactory.create("car", "BMW", 250);
const myBike = VehicleFactory.create("bike", "Yamaha", 120);

console.log(myCar); // Car { type: 'car', brand: 'BMW', speed: 250 }
console.log(myBike); // Bike { type: 'bike', brand: 'Yamaha', speed: 120 }