// let myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function()
// {
//     let name = prompt("enter your name:");
//     alert(`Hello ${name}`);

// });

let myButton = document.getElementById("myButton");
let paragraph = document.getElementById("paragraph");

myButton.addEventListener("click", function()
{
    paragraph.style.color = "red";
    paragraph.style.background = "black";
    paragraph.style.fontSize = "15px";
});

