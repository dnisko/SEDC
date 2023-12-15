let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");

function btnClick()
{
    alert("you clicked the button!");
}

function greeting()
{
    alert("happy new year!");
}

function goodBye()
{
    alert("POZZZZ");
}

function hiGreeting()
{
    alert("HI");   
}

myButton.onclick = btnClick;
mySecondButton.onclick = btnClick;

mySecondButton.onclick = goodBye;
myDiv.onmouseover = greeting;