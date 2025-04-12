// let var const 
// scope

// function scope
function name(){

}
// block scope
{

}

// {
//     var a = 10
//     console.log(a);
    
// }
// console.log(a);
// o/p
// 10
// 10 bcz var is function scoped not block scoped

// {
//     let a = 10
//     console.log(a);
    
// }
// console.log(a);

// {
//     const a = 10
//     console.log(a);
    
// }
// console.log(a);

// var a = "krishna"
// function test(){
//     var a = "hello"
//     if(true){
//         var a = "hi"
//         console.log(a);
        
//     }
//     console.log(a);
// }
// test()
// console.log(a);

// let a = "krish"
// function test(){
//     let a = "hello"
//     if(true){
//         let a = "hi"
//         console.log(a);
        
//     }
//     console.log(a);
// }
// test()

// let a = 10

// function myFunction() {
//     var localVariable = "I'm in local scope";
//     console.log(localVariable);
// }

// myFunction();
// console.log(localVariable);

// function myFunction() {
//     let localVariable = "I'm in local scope";
//     console.log(localVariable);
// }

// myFunction();
// console.log(localVariable);

{
    const hello = "krish"
    console.log(hello);
    
}
console.log(hello);