// shallow copy

// let user1 = {
//     name : "krishna",
//     age : 24,
//     fullname : {
//         first : "krishna",
//         last : "baditya"
//     }
// }

// let user2 = user1
// console.log("user1 ",user1);
// console.log("user2 ",user2);
// user2.name = "jai"
// user2.fullname.first = "rohit"
// console.log("user1.name ",user1.name);
// console.log("user1.fullname.first ",user1.fullname.first);
// console.log("user1 ",user1);
// console.log("user2 ",user2);

// const original = {
//     name: "Alice",
//     address: {
//         city: "Delhi",
//     },
// };

// const copy = { ...original }; // shallow copy

// copy.name = "Bob";
// copy.address.city = "Mumbai";

// console.log(original.name); // "Alice" ❌ not affected
// console.log(original.address.city); // "Mumbai" ❗ affected!

// let user = {
//     name : "krishna",
//     age : 24,
//     fullname : {
//         first : "krishna",
//         last : "baditya"
//     }
// }

// const cloneObj = Object.assign({},user)
// cloneObj.name = "jai"
// cloneObj.fullname.first = "rohit"
// console.log("cloneObj ",cloneObj);
// console.log("user ",user);
// const cloneObj = {...user}
// console.log(cloneObj);
// console.log(user);

// deep copy
// let user = {
//     name : "krishna",
//     age : 24,
//     fullname : {
//         first : "krishna",
//         last : "baditya"
//     }
// }
// const cloneObj = JSON.parse(JSON.stringify(user))
// cloneObj.name = "jai"
// cloneObj.fullname.first = "rohit"
// console.log(user.name);
// console.log(user.fullname.first);

// console.log("cloneObj ",cloneObj);
// console.log("user ",user);

const user1 = {
    name: "krishna",
    age: 24,
    fullname: {
        first: "krishna",
        last: "baditya",
    },
};

const user2 = structuredClone(user1);

user2.name = "jai";
user2.fullname.first = "rohit";

console.log(user1.name); // "krishna" ✅
console.log(user1.fullname.first); // "krishna" ✅
console.log("user1 ",user1);
console.log("user2 ",user2);
