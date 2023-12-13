console.log("== 1 ==");
let firstDiv = document.getElementById("first");
console.log(firstDiv);

console.log("== 2 ==");
let allParagraphs = document.getElementsByTagName("p");
console.log(`All paragraphs length: ${allParagraphs.length}`);

console.log("== 3 ==");
let allDivs = document.getElementsByTagName("div").length;
let lastDiv = document.getElementsByTagName("div")[allDivs-1];
console.log(lastDiv);

console.log("== 4 ==");
let headerThree = lastDiv.getElementsByTagName("h3")[0];
console.log(headerThree);

console.log("== 5 ==");
let headerOne = lastDiv.getElementsByTagName("h1")[0];
console.log(headerThree);

console.log("== 6 ==");
let firstParagraphFromSecondDiv = document.getElementsByTagName("div")[1];
let textFromParagraph = firstParagraphFromSecondDiv.getElementsByTagName("p")[0];
console.log(textFromParagraph.innerText);

console.log("== 7 ==");
let textElement = document.getElementsByTagName("text")[0];
textElement.innerText = "Text";
console.log(textElement);

console.log("== 8 ==");
headerOne.innerText = "Changed text h1";
console.log(headerOne);

console.log("== 9 ==");
headerThree.innerText = "Changed text h3";
console.log(headerThree);