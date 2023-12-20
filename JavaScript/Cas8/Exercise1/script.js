// console.log("---------- Part 1 ----------");
// let varObject = [1,2,3];
// let varNumber = 123;
// let varString = "String";
// let varBool = true;
// let varUndefined;
// let varTrueObject = 
// {
//     name: "Ime",
//     surname: "Surname"
// };

// console.log(`Object: ${typeof(varObject)}\n
// Number: ${typeof(varNumber)}\n
// String: ${typeof(varString)}\n
// Bool: ${typeof(varBool)}\n
// Undefined: ${typeof(varUndefined)}\n
// True Object: ${typeof(varTrueObject)}`);


// console.log("---------- Part 2 ----------");
// function typeReturn(input)
// {
//     return typeof input;
// }

// // Object
// console.log(typeReturn([1,2,3]));

// // Boolean
// console.log(typeReturn(true));

// // Number
// console.log(typeReturn(1));

// // String
// console.log(typeReturn("String"));

// // Undefined
// console.log(typeReturn());

// //TrueObject
// console.log(typeReturn(varTrueObject));


// console.log("---------- Part 3 ----------");

// let number = prompt("Enter number:");
// let parsedNumber = parseInt(number);

// greaterThan13(parsedNumber)
// function greaterThan13(number)
// {
//     let result;
    
//     if(isNaN(number))
//     {
//         console.log("Enter valid data.");
//     }
//     else
//     {
//         if(number > 13)
//         {
//             let difference = number - 13;
//             result = difference * 2;
//             console.log(`The double difference is ${result}`);
//         }
//         else
//         {
//             console.log("The number is not greater than 13");
//         }
//     }
// }


// console.log("---------- Part 4 ----------");

// let number1 = prompt("Enter number 1:");
// let number2 = prompt("Enter number 2:");

// let parsedNumber1 = parseInt(number1);
// let parsedNumber2 = parseInt(number2);

// function closerTo100(num1, num2)
// {
//     if(isNaN(num1) || isNaN(num2))
//     {
//         console.log("Enter valid data.");
//     }
//     else if(num1 < 0)
//     {
//         alert(`Number ${num1} is negative.`);
//     }
//     else if(num2 < 0)
//     {
//         alert(`Number ${num2} is negative.`);
//     }
//     else
//     {
//         let difference1 = 100 - num1;
//         let difference2 = 100 - num2;

//         if(difference1 > difference2)
//         {
//             alert(`Input 1: ${num1}\nInput 2: ${num2}\nCloser to 100 is ${num1}`);
//         }
//         else if (difference1 < difference2)
//         {
//             alert(`Input 1: ${num1}\nInput 2: ${num2}\nCloser to 100 is ${num2}`);
//         }
//         else
//         {
//             alert(`Input 1: ${num1}\nInput 2: ${num2}\nThey are equal.`);
//         }
//     }
// }

// closerTo100(parsedNumber1, parsedNumber2);


// console.log("---------- Part 5 ----------");

// function bobsExpenses()
// {
//     const salary = 1000;
//     const rent = 375;
//     const bills = 250;

//     let expenses = rent + bills;
//     let moneyLeft = salary - expenses;
//     document.getElementById("result").innerHTML = `Bob's money left each month is: ${moneyLeft} eur<br>
// Bob's total expenses (rent and bills) are: ${expenses} eur`;
// }

// bobsExpenses();


// console.log("---------- Part 6 ----------");

// function hasPassed()
// {
//     const grades = [10, 6, 8, 9, 6];
//     let sum = 0;

//     for(let i = 0; i < grades.length; i++)
//     {
//         sum += grades[i];
//     }

//     let result = sum / grades.length
    
//     if(result >= 8)
//     {
//         return `You have PASSED the course with an average grade of: ${result}`;
//     }
//     else
//     {
//         return `You have FAILED the course with an average grade of: ${result}`;
//     }
// }

// console.log(hasPassed());


// console.log("---------- Part 7 ----------");

// let userInput = prompt("Enter number to check if it is divisible by 3 or 7: ")
// let parsedUserInput = parseInt(userInput);

// function checkDivisionBy3or7(number)
// {
//     if(isNaN(number))
//     {
//         return "enter valid data.";
//     }
//     else
//     {
//         if(number % 3 === 0 && number % 7 === 0)
//         {
//             return `your number ${number} is divisible by 3 AND 7 FIZZBUZZ`;
//         }
//         else if(number % 3 === 0 || number % 7 === 0)
//         {
//             if(number % 3 === 0)
//             {
//                 return `your number ${number} is divisible by 3 FIZZ`;
//             }
//             if(number % 7 === 0)
//             {
//                 return `your number ${number} is divisible by 7 BUZZ`;
//             }
//         }
//         else
//         {
//             return `your number ${number} is NOT divisible by 3 or 7`;
//         }
//     }
// }

// console.log(checkDivisionBy3or7(parsedUserInput));


// console.log("---------- Part 8 ----------");

// let sampleArray = ["a", 1, true, "f", 3];

// function joinArray(array)
// {
//     let joinToString = "";

//     for(let i = 0; i < array.length; i++)
//     {
//         joinToString += array[i] + " ";
//     }

//     return joinToString;
// }
// let vrednost = joinArray(sampleArray);
// console.log(vrednost);


console.log("---------- Part 9 ----------");

let arrayOf10 = [null, NaN, undefined, "", false, 2, "asd", 4, "dddd", "sss"]

function removeFalsyValues(array)
{
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        // if(array[i] == "NaN" || array[i] === null || array[i] == "undefined")
        // {
        //     continue;
        // }
        // else
        // {
        //     newArray.push(array[i]);
        // }

        if((array[i]))
        {
            newArray.push(array[i]);
        }
        
    }
    return newArray;
}
let resultArray = removeFalsyValues(arrayOf10);
console.log(resultArray);

console.log("---------- Part 10 ----------");


let buttonClicked = document.getElementById("btnStory")
buttonClicked.addEventListener("click", function storyTell()
{
    let who = document.getElementById("txtWho").value;
    let what = document.getElementById("txtWhat").value;
    let when = document.getElementById("txtWhen").value;
    
    let story = document.getElementById("tdResult");
    story.innerText = `${who} ${what} ${when}`;
});

// storyTell(who, what, when);