let myButton = document.getElementById("myButton");

//console.log(firstName.value);

myButton.addEventListener("click", function()
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let array = [];
    array.push(firstName);
    array.push(lastName);
    array.push(email);
    array.push(password);
    
    let str = array.join(" ");

    document.getElementById("printParagraph").innerText = str;
});