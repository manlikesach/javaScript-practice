function filteredRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 6, 2, 4, 8, 1, 9];
let filtered = filteredRange(arr, 2, 6);

console.log(arr);
console.log(filtered);

// Filter range in place

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
