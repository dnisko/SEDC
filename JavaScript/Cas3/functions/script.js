console.log("========== FUNCTIONS ============");

console.log();
console.log("========== Function Declaration ============");

// function DECLARATION base syntax
function functionName(parametar1, parametar2)
{
    // FUNCTION BODY => the code that will be executed ehn the function name is called
    // code goes here ...
}

// function => keyword for declarating functions
// function name -> the name of the function 
// parametars => values that are used within the function

// console.log("========== Function Execution ============");
// function greetStudent(userName)
// {
//     console.log(`Hello ${userName}, Qinshift Academy wishes you happy holidays!`);
// }


// let userName = prompt("Enter name:");
// greetStudent(userName);

console.log("========== Function that returns a value ============");
function sum(num1, num2)
{
    let result = num1 + num2;
    return result;    
}

let result = sum(5, 10);
console.log(result)

//---------------------------------------------------------------------------------
// function returnNumber(number)
// {
//     // switch (number)
//     // {
//     //     case number > 0:
//     //         return "positive";

//     //     case number < 0:
//     //         return "Negative";
        
//     //     case number === 0:
//     //         return "Zero";
        
//     //     default:
//     //         return "Invalid data entered";
//     // }


//     if(number < 0)
//     {
//         return "Negative";
//     }
//     else if(number > 0)
//     {
//         return "Positive";
//     }
//     else if (number === 0)
//     {
//         return "Zero";
//     }
//     else
//     {
//         return "Invalid data";
//     }
// }

// let inputNumber = prompt("Enter a number ");
// let parsedNumber = parseInt(inputNumber);
// let answer = returnNumber(parsedNumber);
// console.log(`The number ${inputNumber} is ${answer}`);


function testReturn()
{
    console.log("Return a value");
    return 100;
}

testReturn(); //Return a value
let testReturnValue = testReturn();
console.log(testReturnValue);//100


function logNumbers(num1, num2, num3)
{
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    console.log(`Number 3: ${num3}`);
    console.log();
}

logNumbers(10, 20 ,30);
logNumbers();
logNumbers(10, 20);
logNumbers(10, 20, 30, 40);

function logData(data1, data2 = 1000, data3 = "default value")
{
    console.log(`Data 1: ${data1}`);
    console.log(`Data 2: ${data2}`);
    console.log(`Data 3: ${data3}`);
    console.log();
}

logData(10, 20 ,30);
logData();
logData(10, 20);
logData(10, 20, 30, 40);

console.log("========== JavaScript Built-in functions ============");

// alert
// prompt
// console.log
// parseInt
// parseFloat
console.log(parseInt(2.525)); //2
console.log(parseFloat(2.525)); //2.525
// Number
let parsedNumberValue = Number("234.4343");
console.log(parsedNumberValue);
// boolean
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
// newer syntax => instead of Boolean. we use !!
console.log(!!"");
console.log(!!"test");

console.log("========== Ways od parsing strings into numbers ============");
// parseInt
// parseFload
// Number
// using the + operator
console.log(Number("23432.3434")); //23432.3434
console.log(+"23432.3434"); //23432.3434