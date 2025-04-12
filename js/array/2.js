// Write a JavaScript function to clone an array.

// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// 1st way
// const array_Clone = (arr)=>{
//     return arr.slice()
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// 2nd way
// let x = [1, 2, 4, 0]
// let y = [1, 2, [4, 0]]

// let z = [...x]
// console.log(z);
// z = [...y]
// console.log(z);

// 3rd way 
let x = [1, 2, 4, 0]
let y = [1, 2, [4, 0]]

console.log(Array.from(x));
console.log(Array.from(y));

