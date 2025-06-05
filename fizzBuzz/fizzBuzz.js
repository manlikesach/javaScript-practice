const prompt = require("prompt-sync")();

let answer = parseInt(prompt("Enter number for fizzBuzz: "));
for (let i = 1; i <= answer; i++) {
  console.log(i);
}
