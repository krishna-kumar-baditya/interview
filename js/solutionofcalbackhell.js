// first using promise
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched User");
            if (userId <= 0) {
                reject("Invalid user ID");
            } else {
                resolve({ id: userId, name: "John Doe" });
            }
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched orders for User");
            if (Math.random() < 0.3) {
                reject("Failed to fetch orders");
            } else {
                resolve([
                    { id: 101, total: 300 },
                    { id: 102, total: 150 },
                ]);
            }
        }, 1000);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched order details");
            if (orderId !== 102) {
                reject("Order details not available");
            } else {
                resolve({ id: orderId, item: "Laptop", price: 300 });
            }
        }, 1000);
    });
}

function processOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance of success
            if (success) {
                console.log("Order processed");
                resolve({ status: "success", order });
            } else {
                reject("Order processing failed");
            }
        }, 1000);
    });
}
getUser(1)
    .then((user) => {
        console.log("User:", user);
        return getOrders(user.id);
    })
    .then((orders) => {
        console.log("Orders:", orders);
        return getOrderDetails(orders[1].id);
    })
    .then((details) => {
        console.log("Order Details:", details);
        return processOrder(details);
    })
    .then((results) => {
        console.log("Processed Order:", results);
        console.log("Final result:", results);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
// second using async/await
