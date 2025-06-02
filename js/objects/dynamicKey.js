// let keyname = 'js'
// const obj = {}
// // obj.keyname = 'Lang'
// // console.log(obj);

// obj[keyname] = 'lang'
// console.log(obj);
// obj[1] = 212
// console.log(obj);
// obj["1"] = "lang4"
// console.log(obj);

// [object object]
const myObj = {name : '1'}
const obj = {}
// obj[myObj]='val'
obj[JSON.stringify(myObj)]='val'
console.log(obj);
// console.log(JSON.stringify(obj));
