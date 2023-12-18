function animalSpeak(animalType, animalBreed)
{
    if(animalType === "cat")
    {
        console.log(`The ${animalType} of greed ${animalBreed} meows`);
    }

    if(animalType === "dog")
    {
        console.log(`The ${animalType} of greed ${animalBreed} barks`);
    }

    if(animalType === "tiger")
    {
        console.log(`The ${animalType} of greed ${animalBreed} roars`);
    }
}

let cat = 
{
    type: "cat",
    breed: "ragdoll",

    speak: function()
    {
        // console.log("the cat meows");
        console.log(`The animal of ${this.type} and of breed ${this.breed}, meows`);
    }
};

let dog = 
{
    type: "dog",
    breed: "retreiver",

    speak: function()
    {
        // console.log("the dob barks");
        console.log(`The animal of ${this.type} and of breed ${this.breed}, barks`);
    }
};

let tiger = 
{
    type: "tiger",
    breed: "bengal",

    speak: function()
    {
        // console.log("the tiger roars");
        console.log(`The animal of ${this.type} and of breed ${this.breed}, roars`);
    }
};

cat.speak();
console.log(cat.breed);

let person = new Object();
person.name = "Petko";
person.age = 23;
console.log(person);

let personTwo = {};
personTwo["height"] = 180;
personTwo["gender"] = "male";
personTwo["hobbies"] = ["hiking", "swimming", "gaming"];
console.log(personTwo);

console.log(personTwo.hasOwnProperty("gender"));
console.log(personTwo.hasOwnProperty("salary"));


// let output = ""
// for(let i = 1; i <= 20; i++)
// {
//     if(i % 2 === 0)
//     {
//         output += i + "\n"; 
//     }
//     else
//     {
//         output += i + " ";  
//     } 
// }

// console.log(output);