// Q1
// const user = {
//     name : "Krishna",
//     getName (){
//         const name = "Rahul"
//         return this.name
//     }
// }
// console.log(user.getName());
// Krishna

// Q2
// function makeUser(){
//     return{
//         name : "John",
//         ref : this
//     }
// }
// let user = makeUser()
// console.log(user);//object which it returns
// console.log(user.ref);//window
// how we fix this
// function makeUser(){
//     return{
//         name : "John",
//         ref (){
//             console.log(this);
            
//             return this
//         }
//     }
// }
// let user = makeUser()
// console.log(user.ref().name);

// Q3
const user = {
    name : "Krishna",
    logMessage(){
        console.log(this.name);
        
    }
}
// setTimeout(user.logMessage,2000)
// it display nothing
// how to fix
setTimeout(function () {
    user.logMessage();
}, 2000);
