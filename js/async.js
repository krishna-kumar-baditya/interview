async function show() {
    console.log("inside fb before await");
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("resolve done"), 7000);
    });
    let result = await promise;
    console.log("result of promise ", result);
    console.log("inside fn after await");
}
console.log("before function called");
show();
console.log("outside function ");
