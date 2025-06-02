// const property = "firstname"
// const name = "krishna kumar baditya"

// dynamic property
// dynamic key in objects
// const user = {
//     [property] : name
// }
// console.log(user);
// console.log(user.firstname);

//
// const person = {
//     name : "krishna kumar",
//     age : 24,
//     isSingle : true
// }
// for(let key in person){
//     console.log(person[key]);

// }

// Q1
// const obj = {
//     a : "one",
//     b : "two",
//     a : "three",
// }
// console.log(obj);
// {a: 'three', b: 'two'}

// Q2   create a function that multiplies all numeric property values of nums by 2
// let nums = {
//     a : 100,
//     b : 200,
//     title : "My nums"
// }
// multiplyByTwo(nums)
// function multiplyByTwo(obj){
//     for(let key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] = obj[key] * 2
//         }
//     }
// }
// console.log(nums);

// Q3 output of the following code
// const a = {}
// const b = {key : "b"}
// const c = {key : "c"}

// a[b] = 123
// a[c] = 456
// console.log(a);
// {[object Object]: 456}
// console.log(a[b]);
// 456

// Q4
// console.log([..."krishna"]);
// ['k', 'r', 'i', 's', 'h', 'n', 'a']

// Q5
// const user = {name : "krishna",age : 23}
// const admin = {admin : true , ...user}
// console.log(admin);

// Q6
// const settings = {
//     username : "krishna",
//     level : 19,
//     health : 40
// }
// const data = JSON.stringify(settings,["level","health"])
// console.log(data);
// {"level":19,"health":40}

// Q7
// const shape = {
//     radius : 10,
//     diameter(){
//         return this.radius * 2
//     },
//     perimeter : ()=> 2 * Math.PI * this.radius

// }

// console.log(shape.diameter());//20
// console.log(shape.perimeter());//NaN

// Q8
// destucturing
// let user = {
//     name : "krishna",
//     age : 24,
//     fullname : {
//         first : "krishna",
//         last : "baditya"
//     }
// }
// const name = "roadside coder"
// const {name : myname,age } = user
// console.log(myname);
// console.log(age);
// console.log(name);
// const {fullname : {first}} = user
// console.log(first);

// Q9
// function getItem(fruitList,favoriteFruit,...args){
//     return [...fruitList,...args,favoriteFruit]
// }
// console.log(getItem(["banana","apple"],"peer","orange"));

// Q10
// let c = {greeting : "hi"}
// let d = c
// c.greeting = "hello"
// console.log(d.greeting);
// hello

// Q11
// console.log({a : 1} == {a : 1});//false
// console.log({a : 1} === {a : 1});//false

// Q12
// let person = {name : "krishna"}
// const members = [person]
// person.name = null
// console.log(members);
// [ { name: 'krishna' } ]
// [ { name: null } ]

// Q13
// const value = {number : 10}
// const multiply = (x = {...value})=>{
//     console.log((x.number *=2));

// }

// multiply()//20
// multiply()//20
// multiply(value)//20
// multiply(value)//40

// Q14
// function changeAgeAndReference(person){
//     person.age = 20
//     person = {
//         name : "jedi",
//         age : 50
//     }
//     return person

// }
// const person1 = {
//     name : "krishna",
//     age : 30
// }
// const person2 = changeAgeAndReference(person1)
// console.log(person1); //{ name: 'krishna', age: 20 }
// console.log(person2); //{ name: 'jedi', age: 50 }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(`Hi, I'm ${this.name}`);
//     };
// }

// const user1 = new Person("Alice", 25);
// const user2 = new Person("Bob", 32);

// user1.sayHello(); // Hi, I'm Alice
// user2.sayHello(); // Hi, I'm Bob

// function Student(fname,lname,age,cls){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.cls = cls;
//     return this
// }
// let std1 = new Student("krishna","baditya",10,5)
// console.log(std1);
// std1.greet = function(){
//     console.log('Hello');
// }
// std1.nationality = "Indian"
// console.log(std1);

