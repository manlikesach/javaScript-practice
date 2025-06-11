// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10

// Sorted copy method

let arr = [
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "Python",
  "Go",
  "Assembly",
  "Rust",
  "C",
  "C++",
  "Ruby",
];

function copySorted(arr) {
  return arr.slice().sort();
}

sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
