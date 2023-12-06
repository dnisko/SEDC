// console.log("SEDC " + "2023");

// let firstName = "John";
// console.log("Your name is " + firstName);
// console.log(`Your name is ${firstName}!`);

// console.log(4 - "g");

// let firstNumber = 10;
// let secondNumber = "5";
// console.log(firstNumber + secondNumber);

// let sumResult = firstNumber + secondNumber;
// console.log("the result is", sumResult);
// console.log("the type is", typeof(sumResult));


// let qoute = "It's really nice to be a programmer";
// console.log(qoute);

// let qoute1 = 'It\'s really nice to be a programmer';
// console.log(qoute1);


// let guestMessage = "The guest said \\\\\\\\\"HELLO\" to all guests";
// console.log(guestMessage);

//-------------------------SPECIAL NUMBERS-----------------------------------
// let result = 2 / "two";
// console.log(result);
// console.log(typeof result === "number");

// // Losa proverka na varijabli
// console.log(result == NaN);
// console.log(result === NaN);
// console.log(isNaN(result));

// // Vaka da se proveruva varijabla
// let randomText = "Hello world";
// console.log(isNaN(randomText));
// console.log(!isNaN(randomText));

// //NaN example
// const myNum1 = 5;
// const myNum2 = "5";
// const myNum3 = "foo";
// const myResult1 = myNum1 * myNum2;
// const myResult2 = myNum1 * myNum3;
// console.log("myNum1=", myNum1, "type:", typeof(myNum1));
// console.log("myNum1=", myNum2, "type:", typeof(myNum2));
// console.log("myNum1=", myNum3, "type:", typeof(myNum3));

// console.log("myResult1 =", myResult1, "type:", typeof(myResult1));
// console.log("myResult2 =", myResult2, "type:", typeof(myResult2));


// let infinityValue = Infinity;
// console.log(infinityValue);
// console.log(typeof(infinityValue));


//-------------------------LOGICAL OPERATORS-----------------------------------
// let pass = 50;
// let score = 90;
// let hasPassed = score >= pass;
// // let hasNotPassed = !(score >= pass);
// console.log(hasPassed);
// // console.log(hasNotPassed);


// console.log("Logical AND");

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// console.log("Logical OR");

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// console.log("Negation");
// console.log(!true);
// console.log(!false);


// console.log("---------------");
// let comperison1 = 5 < 10;
// let comperison2 = 10 != "10";
// let comperison3 = 10 !== "10";
// console.log(comperison1);
// console.log(comperison2);
// console.log(comperison3);

// console.log("---------------");
// console.log(comperison1 && comperison2);
// console.log(comperison2 || comperison3);

// console.log("Truthy / Falsy values");
// console.log(false && (5 == 6));
// console.log("cat" && 50);
// console.log(0 && "cat");
// console.log();
// console.log(false || (5 == 6));
// console.log("cat" || 50);
// console.log(0 || "cat");


//-------------------------CONTROL STRUCTURES-----------------------------------
let string = "Dino";

if (string == "Dino")
{
    console.log(true);
}
else
{
    console.log(false);
}

let score = 100;

if (score > 100) 
{
    console.log("YOU WIN!!");
}
else
{
    console.log("YOU LOSE!");
}

// let points = 55;
let points = 50;
if (points > 60)
{
    console.log("You passed the exam!");
}
else
{
    console.log("Study more!");
}

let scorePoints = prompt("Enter your score");
const parsedUserInput = parseInt(scorePoints);

if (parsedUserInput <= 60) {
    console.log("You failed!");
} 
else if (parsedUserInput <= 70) 
{
    console.log("Your grade is D");
}
else if (parsedUserInput <= 80) 
{
    console.log("Your grade is C");
}
else if (parsedUserInput <= 90) 
{
    console.log("Your grade is B");
}
else
{
    console.log("Your grade is A");
}

// let userNumber = prompt("Enter your score");