// Q1
// (function(){
// var a=b=4
// it execute like this
// b = 4
// var a = b
// })();
// console.log(typeof a);
// undefined
// console.log(typeof b);
// number bcz b is attached to global scope and var is functioned scoped
// console.log( b);
// 4

// Q2
// (function(){
//     let a=b=4
//     // it execute like this
//     // b = 4
//     // let a = b
// })();
// console.log(typeof a);
// // undefined
// console.log(typeof b);
// number bcz b is attached to global scope and var is functioned scoped
// console.log(b);
// 4

// Q3
// function foo(){
//     return
//     {
//         name : "Anil"
//     }
// }
// console.log(foo());
// undefined

// Q4
// console.log(1+1);//2
// console.log(1 + "2" + "2");//122
// console.log(1 + +"2" + "2");//32
// console.log(1 + "a");//1a
// console.log(1 - "a");//NaN
// console.log(1 - "1");//0
// console.log("a" - "b");//NaN
// console.log("a" - "b" + 2);//NaN
// console.log();//

// Q5
// var a = 0
// function b(){
//     a = 10
//     return ;
//     var a = function(){}

// }
// b()
// console.log(a);//0

// Q6
// var a = 0
// function b(){
//     a = 10
//     return ;
// }
// b()
// console.log(a);//10

// Q7
var a = 0;
function b() {
    a = 10;
    return;
    a = function () {};
}
b();
console.log(a); //10
