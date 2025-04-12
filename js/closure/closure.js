// lexical scope
// function subscribe(){
//     var name = "krishna kumar"
//     function displayName(){
//         alert(name)
//     }
//     displayName()
// }
// subscribe()

// closure scope
// 1
// function subscribe() {
//     var name = "krishna kumar"; // Local variable within the subscribe() function
//     function displayName() {
//         alert(name); // Accesses the variable `name` from the outer scope
//     }
//     return displayName; // Returns the inner function
// }

// // var sub = subscribe(); // Executes subscribe() and stores the returned function in `sub`
// // sub(); // Calls the returned function
// // or
// subscribe()()

// 2
// function subscribe(){
//     var name = "krishna kumar"
//     function displayName(num){
//         console.log(name,num)
//     }
//     return displayName
// }
// subscribe()(5)

// closure scope chain
// let e = 10
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a + b + c + d + e
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4));//20

// Q1
// let count = 0;
// (function print(){
//     if(count === 0){
//         let count = 1
//         console.log(count);//1

//     }
//     console.log(count);//0
// })();
// let count = 0;
// (function (){
//     if(count === 0){
//         let count = 1
//         console.log(count);//1

//     }
//     console.log(count);//0
// })()

// Q2
// function createBase(base){
//     return function(num){
//         return num + base
//     }
// }
// let addSix = createBase(6)
// addSix(10)//returns 16
// addSix(21)//returns 27
// console.log(addSix(10));
// console.log(addSix(21));

// Q5 create a private counter  using closure
// function counter(){
//     var _count = 0
//     function add(inc){
//         _count += inc
//     }
//     function retrive(){
//         return "Counter = " + _count
//     }
//     return{
//         add,
//         retrive
//     }
// }
// const c = counter()
// c.add(2)
// console.log(c.retrive());

// Q7 make this run only once
// let view
// function likeVideo(){
//     view = "krishna"
//     console.log("subscribe to krishna ",view);

// }
// likeVideo()
// soln
// let view;
// function likeVideo() {
//     let called = 0;
//     return function () {
//         if (called > 0) {
//             console.log("already subscribed");
//         } else {
//             view = "krishna";
//             console.log("subscribe to ", view);
//             called++;
//         }
//     };
// }
// let issubscribed = likeVideo();
// issubscribed();
// issubscribed();

// function x(){
//     var i = 1
//     setTimeout(function(){
//         console.log(i);
//     },1000)
//     console.log("Hello Krishna");

// }
// x()
// Hello Krishna
// 1

// function x(){
//     for(var i = 1 ; i<=3;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000)

//     }
// }
// x()
// 4
// 4
// 4
// soln 1
// function x(){
//     for(let i = 1 ; i<=3;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000)

//     }
// }
// x()
// 1
// 2
// 3
// soln 2
// function x() {
//     for (var i = 1; i <= 3; i++) {
//         function closure(variable) {
//             setTimeout(function () {
//                 console.log(variable);
//             }, variable * 1000);
//         }
//         closure(i);
//     }
// }
// x();
// 1
// 2
// 3
// soln 3
function x() {
    for (var i = 1; i <= 3; i++) {
        (function (variable) {
            setTimeout(function () {
                console.log(variable);
            }, variable * 1000);
        })(i);
    }
}
x();
