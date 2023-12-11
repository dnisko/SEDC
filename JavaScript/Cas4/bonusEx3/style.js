function calculateAge(birthYear)
{
    const date = new Date();
    let currentYear = date.getFullYear();
    let result = currentYear - birthYear;
    return result
}

function printAge(age)
{
    console.log(`You are ${age} years old`);
}


let userInput = prompt("Enter birth year:")
let parsedInput = Number(userInput);

if (!Number.isNaN(parsedInput))
{
    let age = calculateAge(parsedInput);
    printAge(age);
}