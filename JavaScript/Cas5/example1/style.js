let ourHeader = document.getElementById("myTitle");
console.log(`Our header's text is:\n${ourHeader.innerHTML}`);


console.log(`Our header's text is:\n${ourHeader.innerHTML}`);

ourHeader.style.border = "1px solid black";
ourHeader.style.backgroundColor = "red";

ourHeader.innerText += " SUM GO MENUVAL PREKU JS!";


console.log("===========================");
let ourParagraph = document.getElementsByClassName("myParagraph");
console.log(ourParagraph);
console.log(`Our paragraphs length: ${ourParagraph.length}`);
console.log(`First paragraph text: ${ourParagraph[0].innerText}`);


console.log("========== Access by Tag ==========");
let allParagraphs = document.getElementsByTagName("p");
console.log(`length of all paragraphs: ${allParagraphs.length}`);


console.log("========== Access by Selector ==========");
let firstDivWithClass = document.querySelector(".myDiv");
console.log(firstDivWithClass);
let ourDivs = document.querySelectorAll(".myDiv")
console.log(`ourDivs length: ${ourDivs.length}`);

console.log(ourDivs[1]);
console.log(ourDivs[0]);
console.log(ourDivs);


console.log("========== Siblings ==========");
let header = document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);


console.log("========== Children ==========");
let children = document.getElementById("main").children;
console.log(children);