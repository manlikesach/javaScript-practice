const container = document.querySelector("#container");

// Create a <div> element with text
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the textContent";
container.appendChild(content);

// <p> with red text
const redPara = document.createElement("p");
redPara.textContent = "Hi I'm red";
redPara.classList.add("redText");
container.appendChild(redPara);

// <h3> with blue text
const blueH3 = document.createElement("h3");
blueH3.textContent = "Hi I'm blue";
blueH3.classList.add("blueText");
container.appendChild(blueH3);

// <div> with pink background and black border
const divBox = document.createElement("div");
divBox.classList.add("pinkBox");

// Inner <h1> and <p>
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm a div";
const innerP = document.createElement("p");
innerP.textContent = "ME TOO";

// Append to box
divBox.appendChild(innerH1);
divBox.appendChild(innerP);
container.appendChild(divBox);
