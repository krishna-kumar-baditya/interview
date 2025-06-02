// let arr = [3, -1, -4, 2, -7, -3]

// let neg = arr.reduce((acc,curr)=>{
//     return curr < 0 && curr > acc ? curr : acc
// },-Infinity)
// console.log(neg);

// const users = [
//     { name: "Alice", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Bob", age: 25 },
// ];

// Sort by age (ascending)
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// Sort by name (alphabetical)
// users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(users);

// const obj = { a: 1, b: 2, c: 3 };

// const reversedEntries = Object.entries(obj).reverse();
// console.log(reversedEntries);

// const reversedObj = Object.fromEntries(reversedEntries);

// console.log(reversedObj); // { c: 3, b: 2, a: 1 }

// const obj = { a: 1, b: 2, c: 3 };
// const reversedValues = Object.values(obj).reverse();

// console.log(reversedValues); // [3, 2, 1]
// console.log(obj);


// const obj = { a: 1, b: 2 };
// obj.reverse(); // ❌ TypeError: obj.reverse is not a function


// const arr = [1, 2, [3, 4]];
// console.log(arr.flat()); 
// Output: [1, 2, 3, 4]

// const arr = [1, 2, [3, [4, 5]]];
// console.log(arr.flat()); 
// console.log(arr.flat(2)); 
// // Output: [1, 2, 3, 4, 5]

// const arr = [1, , 2, [3, , 4]];
// console.log(arr.flat());
// console.log(arr.flat(Infinity));
// // Output: [1, 2, 3, 4]

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);

// const arr = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr); // [0, 1, 2, 3, 4]

const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 2);
console.log(arr); // [4, 5, 3, 4, 5]



