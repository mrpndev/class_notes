// Classes
/*
Templates for creating objects. They encapsulate data with code. As JS is not a class-based objected-oriented-language, it utilizes prototypes to behave like an object-oriented-programming (OOP) language.

Classes considered special functions and therefore can be defined as:
    - Class declaration
    - Class Expression
*/

// let teacher = {
//     name: "Ms. Lockhart",
//     subject: "Coding",
//     tenure: 1,
//     isPolyglot: true,
// }

// console.log(teacher)

// let Paul = {
//     name: "Paul",
//     subject: "Coding",
//     tenure: 2,
//     isPolyglot: true,
// }

// console.log(Paul)

// Class Declaration

class Teacher {
    // constructor - a class method for creation and initialization of a class object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }
}

// shows that a Class is just a special Function
// console.log(typeof Teacher)

// instantiates an empty class object
// console.log(new Teacher())

let kLockhart = new Teacher("Kate Lockhart", "Coding", 1, true)
// console.log(kLockhart)
kLockhart.name = "Kate Louise Lockhart"
// console.log(kLockhart)

// Hoisting
/*
Function declarations are hoisted. Class declarations are not.
*/

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        }

        // Method
        whatHouse() {
            return `Welcome to ${this.address}. Beautiful ${this.bedrooms} bed, ${this.bathrooms} bath house!`
        }
    }

// console.log(new House)

let myHouse = new House("430 N Park Ave", 1, 1)
console.log(myHouse)
console.log(myHouse.whatHouse())

let Garage = class extends House {
    constructor(address, bedrooms, bathrooms, cars, width, height) {
        super(address, bedrooms, bathrooms)
        this.cars = cars
        this.width = width
        this.height = height
    }
}

console.log(new Garage().whatHouse())

// Challenge

/*
Create a Car class that takes make and model.
Instantiate new class object named Porsche with same make and model of 911
7:54 PM
*/

let Car = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    whatCar() {
        return `Your ${this.model} is running.`
    }
}

let Porsche = new Car("Porsche", "911 Carrera")
console.log(Porsche)

console.log(Porsche.whatCar())
// Challenge
/*
Create an Options class that inherits Car parent function. Give it a property of transmission.
Give your 911 a manual or a PDK
*/

let Options = class extends Car {
    constructor(make, model, transmission) {
        super(make, model)
        this.transmission = transmission
    }

    startCar() {
        return `Your ${this.model} is running.`
    }
}

// console.log(new Options("Porsche", "911", "manual"))

// Challenge
// Modify above class and create startCar method that returns string interpolated result of 'Your 911 is running'. 8:27

let myPorsche = new Options("Porsche", "911", "PDK")

console.log(myPorsche.startCar())

