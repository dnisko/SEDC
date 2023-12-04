const convertToMeters = 0.3048;

let feet = 262.4671916010499;
let feetToMeters = feet * convertToMeters;
console.log("Feet =", feet, "\nto meters =", feetToMeters);


let meters = 80;
let metersToFeet = meters / convertToMeters;
console.log("Meters =", meters, "\nto feet =", metersToFeet);


console.log("----------------------------------------")

let sideA = 5;
let sideB = 10;

let area = sideA * sideB;

console.log("The area of A: ", sideA, " and B: ", sideB, " is: ", area);