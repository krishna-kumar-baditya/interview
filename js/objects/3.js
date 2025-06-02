// const animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walks");
//     },
// };

// const rabbit = Object.create(animal);
// rabbit.jumps = true;

// rabbit.walk(); // "Animal walks"
// console.log(rabbit.eats); // true (inherited)
// console.log(rabbit.jumps); // true (own property)

// const tinderUsers = {
//     id : 123,
//     Uname : "krishna",
//     isLoggedIn : false
// }
// Object.keys(tinderUsers).forEach(key=>{
//     console.log(`${key} : ${tinderUsers[key]}`);

// })

// const user = {
//     name: "Krishna",
//     age: 24,
//     address: {
//         city: "Delhi",
//         pin: 110001,
//     },
// };

// Basic
// const { name, age } = user;
// console.log(name); // "Krishna"

// Nested
// const { address } = user;
// console.log(address);
//   const { address: { city } } = user;
//   console.log(city); // "Delhi"

// With alias
//   const { name: userName } = user;
//   console.log(userName); // "Krishna"

//   // With default
//   const { gender = "Not specified" } = user;
//   console.log(gender); // "Not specified"

const arr = [10, 20, 30];

// Basic
const [a, b] = arr;
console.log(a, b); // 10 20

// Skipping values
const [, , third] = arr;
console.log(third); // 30

// Default values
const [x, y, z = 100, w = 200] = [1];
console.log(x);
console.log(y);
console.log(z); // 100
console.log(w); // 200

const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
];

for (const { id, name } of users) {
    console.log(id, name);
}

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = { name: "Ravi", age: 30 };
greet(person);
