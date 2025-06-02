// problem with callback, that is callback hell
// solution for it is promise and asyn/await
function getuser(userId, callback) {
    setTimeout(() => {
        console.log("Fetched User");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}
function getorders(userId, callback) {
    setTimeout(() => {
        console.log("Fetched orders for Users");
        callback([
            { id: 101, total: 300 },
            { id: 102, total: 150 },
        ]);
    }, 1000);
}
function getorderdetails(orderId, callback) {
    setTimeout(() => {
        console.log("Fetched order details");
        callback({ id: orderId, item: "Laptop", price: 300 });
    }, 1000);
}
function processorder(order, callback) {
    setTimeout(() => {
        console.log("order processed");
        callback({ status: "success", order });
    }, 1000);
}

getuser(1, (user) => {
    console.log(user);
    getorders(user.id, (orders) => {
        console.log(orders);
        getorderdetails(orders[1].id, (details) => {
            console.log(details);
            processorder(details, (results) => {
                console.log(results);
                console.log("Final result", results);
            });
        });
    });
});
