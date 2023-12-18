let person = new Object();
person.name = "Dino";
person.height = 175;
person.gender = "male";
person.hasHair = true;
person.age = 34;

console.log(`The persons name is ${person.name}
persons height is ${person.height}
persons gender is ${person.gender}
persons hasHair is ${person.hasHair}
persons age is ${person.age}`);


let person1 = 
{
    name: "Dino",
    height: 175,
    gender: "male",
    hasHair: true,
    age: 34,

    output: function()
    {
        // console.log("the cat meows");
        console.log(`The persons name is ${this.name}
persons height is ${this.height}
persons gender is ${this.gender}
persons hasHair is ${this.hasHair}
persons age is ${this.age}`);
    }
};

person1.output();

person1.name = "Davor";
person1.height = 188;
person1["gender"] = "male";
person1.hasHair = false;
delete person1.age;
person1.description = "testest";
// person1.output();

person1.getFullInfo = function ()
{
    console.log(`The persons name is ${this.name}
    persons height is ${this.height}
    persons gender is ${this.gender}
    persons hasHair is ${this.hasHair}
    persons description is ${this.description}`);
}

person1.getFullInfo();

// let car = 
// {
//     make: "Honda",
//     model: "Civic",
//     fuel: "petrol",
//     productionYear: 2023,

//     move: function()
//     {
//         console.log("The car is moving");
//     },

//     start: function()
//     {
//         console.log("The car starts");
//     },

//     stop: function()
//     {
//         console.log("The car starts");
//     }

// }
// console.log(car);

// delete car.productionYear;
// console.log(car);

// car.model = "Jazz";
// car["fuel"] = "diesel";
// console.log(car);


// Creating constructor function

function vehicleCreator(vehicleType, vehicleMake, vehicleModel, vehicleYear, vehicleFuel)
{
    this.type = vehicleType,
    this.make = vehicleMake,
    this.model = vehicleModel,
    this.year = vehicleYear,
    this.fuel = vehicleFuel,

    this.getInfo = function()
    {
        return `The vehicle of type ${vehicleType}, make ${vehicleMake}, model ${vehicleModel}, production ${vehicleYear} uses fuel ${vehicleFuel}.`;
    }
}

let fico = new vehicleCreator("Car", "Zastava", "Fico", 1965, "Petrol");
let BeEmVe = new vehicleCreator("Car", "BE EM VE", "M5 CS", 2020, "PLIN");
let yugo = new vehicleCreator("Car", "Zastava", "Yugo", 1965, "Petrol");
console.log(fico.getInfo());
console.log(BeEmVe.getInfo());
console.log(yugo.getInfo());


let furstName = "bob";
let person2 = {firstname: "Jill"};

function printName()
{
    console.log(this.firstName);
}

printName();
person2.printName = printName;
printName();
person2.printName();