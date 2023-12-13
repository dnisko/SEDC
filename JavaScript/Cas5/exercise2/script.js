function weightInChicken(weight, weightInKg = 0.5)
{
    
    // let weightInKg = weight * weightInKg;
    // return weightInKg;
    return  weight/weightInKg;

}

let weight = prompt("Enter your weight in kg:");
let parsedWeight = parseInt(weight);
let result = weightInChicken(parsedWeight);
let paragraph = document.getElementById("result");
paragraph.innerText = `Your weight ${weight}kg in chickens is ${result} chickens`;