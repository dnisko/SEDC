// Example 1
function localScope(number)
{
    let localNumber = 100;
    let result = localNumber + number;
    console.log(result);
}

// console.log(localNumnber); //ERROR
localScope(50);


// Exemple 2
let greeting = "Hello from Qunshift Academy";
function printGreeting()
{
    let greeting = "Happy holidays!";
    console.log(greeting);
}
console.log(greeting); // Hello from Qunshift Academy
printGreeting(); // Happy holidays


// Example 3
function outerFunction()
{
    let outerFunction = "I'm from the outer function";

    function innerFunction()
    {
        let innerVariable = "I'm from the inner function";
        console.log(outerFunction);
        console.log(innerVariable);
    }

    // console.log(innerVariable); //ERROR

    innerFunction();
}

outerFunction();
// innerFunction(); //ERROR


// Exemple 4
if(50 < 100)
{
    let blockNumber = 50 + 150;
    console.log(blockNumber);
}

// console.log(blocknumber); //Error