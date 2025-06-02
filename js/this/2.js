// const obj = {
//     regularFn: function () {
//         console.log(this);
//     },
//     arrowFn: () => {
//         console.log(this);
//     },
// };
// obj.regularFn();
// obj.arrowFn();

// const obj ={
//     name : 'Alice',
//     greet : function(){
//         console.log(this.name);
//         console.log(this);

//     }
// }
// obj.greet()

// const person = {
//     firstname: "krishna",
    // greetFn :()=>{
    //     console.log(this);
    //     console.log(this.firstname);

    // }
// };
// person.greetFn = function () {
//         console.log(this);
//         console.log(this.firstname);
// };
// person.greetFn();
// person.greetFn = () => {
//     console.log(this);
//     console.log(this.firstname);
// };
// person.greetFn();
// console.log(person);

// const obj = {
//     value : 42,
//     getValue : function(){
//         function innerFunction(){
//             console.log(this.value);
//             console.log(this);            
//         }
//         innerFunction()
//     }
// }
// obj.getValue()
const obj = {
    value : 42,
    getValue: function () {
        const innerFunction = () => {
            console.log(this.value); // ✅ 42
            console.log(this);
        };
        innerFunction();
    }
    
}
obj.getValue()




