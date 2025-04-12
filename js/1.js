// Q.1
// function fruit(){
//     console.log(name); // undefined
//     console.log(price);// Reference error before initialization
//     var name = "apple"
//     let price = 20
// }
// fruit()

// Q.2
// for(var i =0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }
// 3 times 3

// Q.3
// for(var i =0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }
// 0
// 1
// 2

// Q.4
// console.warn(+true);    //  1
// console.warn(typeof +true); //  number

// Q.5
// console.warn(!"anil")   //  false
// console.warn("anil")    //  anil
// console.warn(typeof("anil"));   //  string

// Q.6
// let data = "size"
// const bird = {
//     size : "small"
// }
// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);
// small
// small
// small
// undefined



// Q.7
// let c = {name : "peter"}
// let d;
// d = c
// c.name = "anil"
// console.log(d.name);
// anil

// Q.8
// var x;
// var x=10
// console.log(x);
// 10


// Q.9
// var x;
// var x=10
// console.log(x);
// x already declared

// Q.10
// let a = 3
// let b = new Number(3)
// console.log(typeof b);  //  object
// console.log(a == b);    //  true, 
// console.log(a === b);   //  false

// Q.11
// let name
// nmae = {}
// console.log(name);

// Q.12
// function fruit(){
//     console.log("woof");    
// }
// fruit.name = "apple"
// console.warn(fruit());
// woof
// undefined

// Q.13
// function sum(a,b){
//     return a +b
// }
// console.warn( sum(1,"12"))
// 12

// Q.14
// let number = 0
// console.log(number++);  //  0
// console.log(++number);  //  2
// console.log(number);    //  2

// Q.15
// function getAge(...args){
//     console.log(typeof args);
    
// }
// getAge(21)
// object

// Q.16
// function getAge(){
//     "use strict"
//     age = 21
//     console.log(age);
// }
// getAge()
// reference error, age is not defined

// Q.17
// const sum = eval("10*10+5")
// console.warn(sum);
// 105

// Q.18
// Hw long is cool_secret accessible?
// sessionStorage.setItem("cool_secret",123)

// Q.19
// const obj = {1 : "a", 2 : "b", 3 : "c"}
// console.log(obj.hasOwnProperty("1"))    //  true
// console.log(obj.hasOwnProperty(1))  //  true

// Q.20
// const obj = {a : "one",b : "two",a : "three"}
// console.log(obj);
// { a: 'three', b: 'two' }
// for(let i = 1 ; i< 5 ; i++){
//     if (i === 3) {
//         continue
//     }
//     console.log(i);
    
// }
// 1
// 2
// 3

// const foo = ()=>console.log("first");
// const bar = ()=>setTimeout(()=>console.log("second"))
// const baz = ()=>console.log("third");

// bar()
// foo()
// baz()
// first
// third
// second

// Q.21
// see in html

// Q.22
// const person = {name : 'Lydia'}
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21)());
// Lydia is 21
// Lydia is 21

// Q.23
// function sayHi(){
//     return (()=>0)()
// }
// console.log(typeof sayHi());
// console.log(sayHi());
// number
// 0
// function abc(){}
// console.log(typeof abc);
// console.log(typeof abc());
// function
// undefined

// Q.24
// function sayHi(){
//     return ()=>0
// }
// console.log(typeof sayHi());
// function
// console.log(sayHi());
// arrow function
// console.log(sayHi()());
// 0
// console.log(typeof sayHi()());
// number

// Q.25
// console.log(typeof typeof 1);
// string

// Q.26
// const numbers = [1,2,3]
// numbers[9]= 11
// console.log(numbers);
// [ 1, 2, 3, <6 empty items>, 11 ] in node
// [1, 2, 3, empty × 6, 11] in browser

// Q.27
// const numbers = [1,2,3]
// numbers[3]= numbers
// console.log(numbers);
// After 3rd position in the array gives infinite Array

// Q.28
// Everything in js is either a...
// A.primitive or object ans
// B.function or object
// C.tricky question! only object
// D.number or object

// Q.29
// console.log(!null);
// true
// console.log(!!null);
// false
// console.log(!!"");
// false
// console.log(!!1);
// true

// Q.30
// console.log(setInterval(()=>console.log('Hi')),1000);
// console.log(setInterval(()=>console.log('Hi')),1000);
// console.log(setInterval(()=>console.log('Hi')),1000);
// 1
// 2
// 3
// 1,2,3 are id of setInterval
// Hi
// Hi
// Hi
// Hi
// Hi
// Hi
// Hi
// Hi
// .
// .
// .

// Q.31
// console.log([..."Anil"]);
// [ 'A', 'n', 'i', 'l' ]

// Q.32
// let data = 3 + 4 + "5"
// 75
// console.log(typeof data);
// string

// Q.33
// console.log(typeof 3 + 4 + "5");
// number45

// Q.34
// console.log(typeof (3 + 4 + "5"));
// string

// Q.35
// console.log(typeof (3 + 4 + +"5"));
// number

// Q.36
// console.log(typeof []);
// Object

// Q.37
// console.log([] == []);
// false

// Q.38
// let data = [1,2,3].map((num)=>{
//     if(typeof num === 'number') return;
//     return num * 2;
// })
// console.warn(data);
// [ undefined, undefined, undefined ]

// Q.39
// function getInfo(member){
//     member.name = "Anil"
// }
// const person = {name : "Krishna"}
// getInfo(person)
// console.log(person);
// { name: 'Anil' }

// Q.40
// function Car(){
//     this.make = 'tata'
//     return {make : 'Kia'}
// }
// const mycar = new Car()
// console.log(mycar.make);
// Kia

// Q.41
// (()=>{
//     let x = (y = 10)
// })()
// console.log(typeof x);
// undefined

// Q.42
// (()=>{
//     let x = y = 10
// })()
// console.log(typeof y);
// Number
// console.log(y);
// 10

// Q.43
// (()=>{
//     let x = 10
// })();
// (()=>{
//     let x = 10
// })()
// console.log(typeof x);
// undefined

// Q.44
// (()=>{
//     let x = y = 10
// })();
// (()=>{
//     let x = y = 10
// })()
// console.log(y);
// 10
// console.log(typeof y);
// Number

// Q.45
// let x = 100;
// (()=>{
//     var x = 20
// })();
// console.log(x);
// 100

// Q.46
// console.log(!true - true);
// -1
// console.log(true + +"10");
// 11

// Q.47
// console.log(typeof (1 + +"2" + "2"));
// string
// console.log(typeof 1 + +"2" + "2");
// number22

// console.log("a" - "b" + "2");
// NaN2
// console.log("a" - "b" + +"2");

// Q.48
// var a = 0
// function b(){
//     a = 10
//     return ;
//     var a = function(){}
// }
// b()
// console.warn(a);
// // 0


// Q.49
// var a = {}
// var b = a
// console.log(a === b);

// Q.50
// function test(){
//     function foo(){
//         return 100
//     }
//     return foo()
//     function foo(){
//         return 10
//     }
// }
// console.log(test());
// 10

// Q.51
// console.log(!!10+20);
// 21
let x = 0
console.log(x++);
// 0
console.log(3+4+'5');

// Q.52
const obj = {
    a : "one",
    b : "two",
    a : "three"
}
console.log(obj);
// { a: 'three', b: 'two' }

// Q.53
// let person = {name : "Krishna"}
// const members = [person]
// person = null
// console.log(members);
// console.log(person);
// [ { name: 'Krishna' } ]
// null

// Q.54
function getAge(...args){
    console.log(typeof args);
    
}
getAge(21)
// object