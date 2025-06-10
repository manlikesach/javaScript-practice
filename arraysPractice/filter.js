function filteredRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 6, 2, 4, 8, 1, 9];
let filtered = filteredRange(arr, 2, 6);

console.log(arr);
console.log(filtered);
