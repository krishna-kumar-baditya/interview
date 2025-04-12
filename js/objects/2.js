// // shallow copy

// let user = {
//     name : "krishna",
//     age : 24,
//     fullname : {
//         first : "krishna",
//         last : "baditya"
//     }
// }

// let user2 = user
// console.log(user);
// console.log(user2);

// deep copy
let user = {
    name : "krishna",
    age : 24,
    fullname : {
        first : "krishna",
        last : "baditya"
    }
}

// const cloneObj = Object.assign({},user)
// cloneObj.name = "jai"
// const cloneObj = JSON.parse(JSON.stringify(user))
const cloneObj = {...user}
console.log(cloneObj);
console.log(user);

