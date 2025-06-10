// // Take input strings(eg: “border-left-width”).
// let str = "border-left-width";

// // Split the string into an array.
// let parts = str.split("-");

// // Capitalise first letter of words excluding frist.
// for (let i = 1; i < parts.length; i++) {
//   parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
// }

// // Join all letters back together into one string.
// let camelCaseStr = parts.join("");

// // Print output
// console.log(camelCaseStr);

// Turning to reusable function
function toCamelCase(str) {
  let parts = str.split("-");

  for (let i = 1; i < parts.length; i++) {
    parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
  }
  return parts.join("");
}

console.log(toCamelCase("list-style-image"));
