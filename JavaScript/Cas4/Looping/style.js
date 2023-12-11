console.log("====== Looping structures =====");

console.log("====== While loop =====");
//executes a block of code as long as a specified condition is true


// let counter = 1;
// while (counter < 5)
// {
//     console.log(counter);
//     counter++;    
// }

// let students = ["Bob Bobsky", "John", "Petko"];
// let studentCounter = 0;

// while (studentCounter < students.length)
// {
//     console.log(`Student ${studentCounter + 1}: ${students[studentCounter]}`);
//     studentCounter++;
// }

// console.log("====== Do-while loop =====");
// let students = ["Bob Bobsky", "John", "Petko"];
// let studentCounter = 10;

// do
// {
//     console.log(`Student ${studentCounter + 1}: ${students[studentCounter]}`);
//     studentCounter++
// } 
// while (studentCounter < students.length);


//let numberArray = [0, 2, 3, 5, 1, 6, 8, 9, 4, 7]

// function findLargestNumber(array)
// {
//     let index = 0;
//     let max = -Infinity;
//     while (index < array.length)
//     {
//         if(array[index] > max)
//         {
//             max = array[index];
//         }
//         index++; 
//     }
//     console.log(`The largest number is ${max}`);
// }
// findLargestNumber(numberArray);


console.log("====== For loop =====");

// for (let i = 0; i < 5; i++) {
//     console.log(i);
    
// }
// console.log();
// for (let i = 5; i > 0; i--) {
//     console.log(i);
    
// }


let cities = ["Skopje", "Miami", "Tokyo", "Prilep"]

for(let i = 0; i < cities.length; i++)
{
    let cityInfo = `City #${i + 1}: ${cities[i]}`;

    if(cities[i] === "Miami")
    {
        cityInfo += ` => I want to go there.`;
    }

    console.log(cityInfo);
}


console.log("====== For Of loop =====");

for( let city of cities)
{
    console.log(city);
}


console.log("====== Break & Continue =====");

let numbers = [1, 3, 654, 324, 34, 40, 245];

for(let j = 0; j < numbers.length; j++)
{
    if(numbers[j] === 40)
    {   
        console.log(`Found ${numbers[j]} at index ${j}! Exeting the loop`);
        break;
    }
    console.log(`The number ${numbers[j]} is not 40`);
}
console.log();

for(let number of numbers)
{
    if(number % 4 === 0)
    {
        console.log(`The number ${number} is divisible by 4`);
        continue;
    }
    console.log(`The number ${number} is NOT divisible by 4`);
}