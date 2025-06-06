let prompt = require("prompt-sync")();

let answer = parseInt(prompt("Enter number: "));

for (let i = 1; i <= answer; i++) {
  if (i % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
