// console.log("start");
// function importantAction(username) {
//     setTimeout(() => {
//         return `subscribe to ${username}`;
//     }, 1000);
// }
// const message = importantAction("roadsidecoder");

// console.log(message);
// undefined , to solve this we use callback

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`subscribe to ${username}`);
//     }, 1000);
// }
// function likeVideo(video, cb) {
//     setTimeout(() => {
//         cb(`like the ${video} video`);
//     }, 1000);
// }
// function shareVideo(video, cb) {
//     setTimeout(() => {
//         cb(`share the ${video} video`);
//     }, 1000);
// }
// const message = importantAction("roadsidecoder", function (message) {
//     console.log(message);
//     // subscribe to roadsidecoder
//     likeVideo("js interview questions", (action) => {
//         console.log(action);
//         // like the js interview questions video
//         shareVideo("js interview questions", (action) => {
//             console.log(action);
//             // share the js interview questions video
//         });
//     });
// });
// console.log(message); //undefined

// this is callback hell and its solution is promise
// const sub = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = false
//         if (result){
//             resolve("Subscribe to krishna")
//         }
//         else{
//             reject(new Error("why are not you subscribed yet"))
//         }
//     },1000)
// })

// sub
// .then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);

// })

// Q1
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// });
// promise1.then((res) => {
//     console.log(res);
// });
// console.log("stop");

// start
// 1
// stop
// 2

// Q2
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
// });
// promise1.then((res) => {
//     console.log(res);
// });
// console.log("stop");
// start
// 1
// 2
// stop

// Q3
// console.log("start");
// const fn = () =>
//     new Promise((resolve, reject) => {
//         console.log(1);
//         resolve("success");
//     });
// console.log("middle");
// fn().then((res) => {
//     console.log(res);
// });

// console.log("stop");

// start
// middle
// 1
// stop
// success

// Q4
// function fn() {
//     return new Promise((res, rej) => {
//         rej();
//     });
// }
// let promise = fn();
// promise
//     .then(function () {
//         console.log("success 1");
//     })
//     .then(function () {
//         console.log("success 2");
//     })
//     .then(function () {
//         console.log("success 3");
//     })
//     .catch(function () {
//         console.log("Error 1");
//     })
//     .then(function () {
//         console.log("success 4");
//     });
// Error 1
// success 4

// Q5
// const firstPromise = new Promise((resolve,reject)=>{
//     resolve("First")
// })
// const secondPromise = new Promise((resolve,reject)=>{
//     resolve(firstPromise)
// })
// secondPromise
// .then((res)=>{
//     return res
// })
// .then((res)=>{
//     console.log(res);
     
// })
// First
