function sum(num1, num2)
{
    return num1 + num2;
}

function substract(num1, num2)
{
    return num1 - num2;
}

function multiplies(num1, num2)
{
    return num1 * num2;
}

function divides(num1, num2)
{
    return num1 / num2;
}

let userInput1 = prompt("Enter number 1")
let userInput2 = prompt("Enter number 2")

if(isNaN(userInput1) || isNaN(userInput2))
{
    console.log("Invalid data");
}
else
{
    let number1 = parseInt(userInput1);
    let number2 = parseInt(userInput2);

    let summation = sum(number1, number2);
    let substraction = substract(number1, number2);
    let multiplication = multiplies(number1, number2);
    let dividion = divides(number1, number2);

    console.log(`The sum of the numbers is ${summation}\nThe substraction is ${substraction}\nThe multiplication is ${multiplication}\nThe dividion is ${dividion}`);
}
