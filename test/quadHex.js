let prompt = require("prompt-sync")();

let answer = parseInt(prompt("Enter number: "));

for (let i = 1; i <= answer; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log("HexQuad");
  } else if (i % 4 === 0) {
    console.log("Quad");
  } else if (i % 6 === 0) {
    console.log("Hex");
  } else {
    console.log(i);
  }
}
