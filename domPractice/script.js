// Get reference for the existing container in HTML
const container = document.querySelector("#container");
// Create a <div> element with text
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the textContent";
container.appendChild(content);
console.log(content);
// Create a <p> element with red text
const redPara = document.createElement("p");
redPara.textContent = "Hi im red";
redPara.style.color = "red";
container.appendChild(redPara);
console.log(redPara);
// Create a <h3> element with blue text
const blueH3 = document.createElement("h3");
blueH3.textContent = "Hi im blue";
blueH3.style.color = "blue";
container.appendChild(blueH3);
console.log(blueH3);
// Create a <div> with border & color
const divBox = document.createElement("div");
divBox.style.border = "1px solid black";
divBox.style.backgroundColor = "pink";
console.log(divBox);
// Create <h1> & <p> elements
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm a div";
console.log(innerH1);
const innerP = document.createElement("p");
innerP.textContent = "ME TOO";
console.log(innerP);
// Append to parent
divBox.appendChild(innerH1);
divBox.appendChild(innerP);
container.appendChild(divBox);
