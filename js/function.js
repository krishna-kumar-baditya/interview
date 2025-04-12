var x = 5
function getName(){
    console.log("Namaste beta namaste");

    
}
getName()
console.log(x);
console.log(getName);

// getName()
// getName2()
// const getName = ()=>{
    
// }
// const getName2 = function(){

// }


// Q.1  what is function declaration or definition or statement
// function sum(a,b){
//     return a + b
// }
// Q.2 what is function expression
// const square = function(num){
//     return num * num
// }
// console.log(square);
// Q.3 what are first class function
// function square(num){
//     return num * num
// }

// function displaySquare(callback){
//     console.log("Square is ",callback(5));
// }
// displaySquare(square)
// Q.4 IIFE
// (function square(num){
//     console.log(num * num);

// })(4)
// Q.5 IIFE -O/P
// (function(x){
//     return (function(y){
//         console.log("x = ",x);

//     })(2)
// })(1)
// x = 1

// Q.6
// for(let i = 0;i < 5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 1000)
// }
/*
0
1
2
3
4
*/
// for(var i = 0;i < 5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 1000)
// }
/*
5
5
5
5
5
*/
// function call(){
//     for(let i = 0;i < 5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i * 1000)
//     }
    
// }
// call()


// Q.7 Function Hoisting
// functionName()
// function functionName(){
//     console.log("Apun seva karega");

// }
// Q.8
// var x = 21
// var fun = function(){
//     console.log(x);
//     var x = 20
// }
// fun()
// undefined
// Q.9
// function mul(...num){ // rest operator
//     console.log(num[0] * num[1]);

// }
// var arr = [5,6]
// mul(...arr) // spread operator
// 30

// Q.10
// const fn = (a,...number,x,y)=>{
//     console.log(x,y);

// }
// fn(4,5,6,8)
// SyntaxError: Rest parameter must be last formal parameter

// Q.11
// const fn = (a,x,y,...number)=>{
//     console.log(x,y,number);

// }
// fn(4,5,6,8,7,8,9,6,5)
// 5 6 [ 8, 7, 8, 9, 6, 5 ]

// Q.12
// (function(){
//     var names = "krishna"
//     console.log("inside ",names);

// })()
// console.log("outside ",names);
// function fn(){
//     var names = "krishna"
//     console.log("inside ",names);

// }
// fn()
// console.log("outside ",names);

// closures
// Q.13
// function fn(){
//     var name = "Mozilla"
//     function display(){
//         console.log(name);

//     }
//     return display
// }
// fn()()

// closures scope chain
/*
Every closures has three scopes:
1.Local(own)
2.Outer function
3.Global
*/

// Q.14
// let count = 0;
// (function print() {
//     if (count === 0) {
//         let count = 1;  //  shadowing
//         console.log(count); //  1 
//     }
//     console.log(count); //  0
// })();

// Q.15
// code
// function createBase(num){
//     console.log(num);
    
//     return function(innernum){
//         console.log(innernum);
        
//         console.log(innernum + num);
//     }

// }
// task
// var addSix = createBase(6)
// addSix(10)
// it should return 16
// addSix(21)
// it should return 27

// Q.16 time optimization
// function find(index){
//     let a = []
//     for(let i =0 ;i< 1000000;i++){
//         a[i] = i * i
//     }
//     console.log(a[index]);
    
// }
// console.time("6")
// find(6)
// console.timeEnd("6")
// console.time("12")
// find(12)
// console.timeEnd("12")
// function find(){
//     let a = []
//     for(let i =0 ;i< 1000000;i++){
//         a[i] = i * i
//     }
//     return function(index){
//         console.log(a[index]);
//     }
    
// }
// const closure = find()
// console.time("6")
// closure(6)
// console.timeEnd("6")
// console.time("12")
// closure(12)
// console.timeEnd("12")

// Q.17 create a private counter
// function counter(){
//     let _counter = 0
//     function add(increment){
//         _counter += increment
//     }
//     function retrive(){
//         return "counter " + _counter
//     }
//     return {
//         add,
//         retrive
//     }
// }
// const c = counter()
// c.add(5)
// c.add(5)
// console.log(c.retrive());

// Q.18
// test()
// var test = function(){
//     console.log("test function called");
    
// }
// TypeError: test is not a function

// test()
// let test = function(){
//     console.log("test function called");
    
// }

// ReferenceError: Cannot access 'test' before initialization
// function expresion is not hoisted