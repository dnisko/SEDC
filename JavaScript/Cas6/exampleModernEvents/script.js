let myInput = document.getElementById("input");
let myButton = document.getElementById("myButton");

function focusGreet()
{
    alert("Focus on input");    
}

function blurGreeting()
{
    alert("Focus on input on lost focus");    
}

function buttonClicked()
{
    alert("button clicked");    
}

function secondButtonClicked()
{
    alert("second button clicked");    
}

myInput.addEventListener("focus", focusGreet);
// myInput.addEventListener("blur", blurGreeting);
// myButton.addEventListener("click", buttonClicked);
// myButton.addEventListener("click", secondButtonClicked);
// myButton.addEventListener("click", function()
// {
//     alert("ANONYMOUS FUNCTION");
// });

// myButton.addEventListener("click", function()
// {
//     buttonClicked();
//     secondButtonClicked();
//     alert("HELLO FROM INNER ANONYMOUS FUNCTION.")
// });

myButton.addEventListener("click", function(event)
{
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
})

// myButton.removeEventListener("click", secondButtonClicked);