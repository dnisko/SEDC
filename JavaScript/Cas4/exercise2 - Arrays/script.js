console.log();
console.log("==== Creating an Array =====");

let emptyArray = [];
// console.log(emptyArray);
// console.log(typeof emptyArray);


let fruits = ["Orange", "Apple", "Pear", "Strawberry"];
// console.log(fruits);
// console.log(typeof fruits);


let days = 
[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

// console.log(days);

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(digits);

let mixedArray = 
[
    1, 
    2, 
    3, 
    true, 
    "Wow this is possible?", 
    false, 
    null, 
    500, 
    "Yes it is, it's JavaScript :)"
]
// console.log(mixedArray);
console.log();
console.log("==== Accessing items in an Array =====");
// console.log(days[2]);

// let someDay = days[5];
// console.log(someDay); //saturday
// console.log(days[10]); // undefined
console.log(days[days.length]);
console.log(days[days.length-1]);


console.log();
console.log("==== Changind items values =====");

// console.log(fruits[2]);
// fruits[2] = "Peach";
// console.log(fruits[2]);


// days[3] = "Someday";
// console.log(days);

console.log();
console.log("==== Adding items values =====");
// console.log(fruits[10]);
// fruits[10] = "Fig";
// console.log(fruits[10]);
// console.log(fruits);
// DONT DO THIS

// 1. push() // adds at the end
// console.log(fruits);
// fruits.push("Fdig");
// console.log(fruits);
// console.log(fruits.length);

// fruits.push("Banana", "Mango", "Pineapple");
// console.log(fruits);
// console.log(fruits.length);

// 2. unshift() adds at the start
// console.log(fruits);
// fruits.unshift("Pear");
// console.log(fruits);


// fruits.unshift("Olive", "Hazelnut");
// console.log(fruits);

console.log();
console.log("==== Removing items values =====");
// 1 pop()
// console.log(fruits);
// fruits.pop(1);
// console.log(fruits);

// let lastItem = fruits.pop();
// console.log(`The ${lastItem} has been removed`);
// console.log(fruits);

// 2 shift()
// console.log(fruits);
// fruits.shift();
// console.log(fruits);


// 3 splice()
console.log(days);
let removedDays = days.splice(2, 2);
console.log(`The ${removedDays} has beed removed`);


console.log(days);
days.splice(1);
console.log(days);