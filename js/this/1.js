// let person = {
//     firsname : "Krishna",
//     lastname : "Baditya",
//     sayHello(){
//         console.log('Hello : i am '+this.firsname+" and i have a "+car.brand+" car");
//         console.log(this);

//     }
// }
// let car = {
//     brand : "Tata",
//     model : "Safari"
// }
// person.sayHello()
// console.log(this);

// function show() {
//     let name = "krishna";
//     console.log(this);
//     console.log(this.name);
// }
// show(); // 🖥️ In browser: Window
// or
// const show = function(){
//     let name = "krishna";
//     console.log(this);
//     console.log(this.name);

// }
// show()
// or
// const show = ()=>{
//     let name = "krishna";
//     console.log(this);
//     console.log(this.name);

// }
// show()

// function User(name) {
//     console.log(this);
//     this.name = name;

// }
// const u = new User("Ravi");
// console.log(u.name); // ✅ Ravi

// function sayHi() {
//     console.log(this);

//     console.log(this.name);
// }
// const person = { name: "Jai" };
// sayHi.call(person); // ✅ Jai

// "use strict";
// function show() {
//     console.log(this);
//     // console.log(this.name);
// }
// show(); // ❌ undefined

// console.log(this);
