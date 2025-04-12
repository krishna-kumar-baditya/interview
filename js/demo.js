// let data = [1,2,3,4]

// const mulby3 = data.map((num)=>(
//      num * 3
// ))

// console.log(data);
// console.log(mulby3);

// const sum = data.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue
// })
// console.log(sum);

// polyfill for Map()
// Array.map((num,i ,arr)=>{})

// let data = [1, 2, 3, 4];
// Array.prototype.myMap = function (callback) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(callback(this[i], i, this));
//     }
//     return temp;
// };
// const mulby3 = data.myMap((num, i, arr) => {
//     return num * 3;
// });
// console.log(mulby3);

// polyfill for filter
// let data = [1, 2, 3, 4];
// Array.prototype.myFilter = function (callback) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) temp.push(this[i]);
//     }
//     return temp;
// };
// let sort = data.myFilter((num, i, arr) => {
//     return num * 2;
// });
// console.log(sort);

// polyfill for reduce
// arr.reduce((acc,curr,i arr)=>{},initialvalue)
// let data = [1, 2, 3, 4];
// Array.prototype.myReduce = function (callback, initialvalue) {
//     var accumulator = initialvalue;
//     let length = this.length;
//     for (let i = 0; i < length; i++) {
//         accumulator = accumulator
//             ? callback(accumulator, this[i], i, this)
//             : this[i];
//     }
//     return accumulator
// };
// let sum = data.myReduce((acc,curr,i,arr)=>{
//     return acc + curr
// })
// console.log("sum ",sum);


// let arr = ['one','two','three']
// let str = "Hello"

// let res = arr.includes(`on`)
// let anotherVar = arr.includes(`onetwo`)
// let newvar = str.includes('ll')
// console.log(res);
// console.log(anotherVar);
// console.log(newvar);

// console.log(true == '');
// console.log(true == ' ');
// console.log(typeof true);
// console.log(typeof '');
// console.log(typeof ' ');
// console.log('1' == 1);

// let a = 10 
// let b = new Number(10)
// console.log(a == b);
// console.log(a === b);
// console.log(typeof b);

// let c = 10
// console.log(a == c);
// console.log(a === c);

// let a = {name : "Adarsh"}
// let z = {...a}
// z.name = "adil"
// console.log(a.name);

console.log(+true);
console.log(!"abc");
console.log(+"abc");

