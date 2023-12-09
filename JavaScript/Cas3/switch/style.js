console.log("============= CONTROL STRUCTURES ==============");

 // 1. Conditional statements (if, else if, else)
 // 2. Switch statement
 // 3. Looping structures
 // *** Purpuse: Control the flow of the prigram ***

 console.log();
 console.log("============= SWITCH STATEMENT ==============");
 // useful when you have multiple conditions to check against SINGLE variable

 // ------------------------------------------------------------------------
 //base syntax

//  let switchValue = "value";

//  if(switchValue === "value1")
//  {
//     // code to be executed if value is "value1"
//  }
//  switch (switchValue)
//  {
//     case "value1":
//         // code to be executed if value is "value1"
//         break;
//     case "value2":
//         // code to be executed if value is "value2"
//         break;
//     case "value3":
//         // code to be executed if value is "value3"
//         break;
//     default:
//         // code to be executed if value is none of the above
//         break;
//  }
//------------------------------------------------------------------------

let userPrompt = prompt("Enter number from 1-7");
let parsedInputDay = parseInt(userPrompt);
//  switch (parsedInputDay)
//  {
//     case 1:
//         console.log("The day is Monday");
//         break;

//     case 2:
//         console.log("The day is Tuesday");
//         break;

//     case 3:
//         console.log("The day is Wednesday");
//         break;

//     case 4:
//         console.log("The day is Thursday");
//         break;

//     case 5:
//         console.log("The day is Friday");
//         break;

//     case 6:
//         console.log("The day is Saturday");
//         break;

//     case 7:
//         console.log("The day is Sunday");
//         break;

//     default:
//         console.log("Invalid data entered");
//         break;
//  }

 // "fall trough"
 switch (parsedInputDay)
 {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("The day is Workday");
        break;
    case 6:
    case 7:
        console.log("The day is Weekend");
        break;

    default:
        console.log("Invalid data entered");
        break;
 }