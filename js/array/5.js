// Write a simple JavaScript program to join all elements of the following array into a string.

// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let color = ["Red","Green","White","Black"]
console.log(String(color));
console.log(color.join());
console.log(color.join("+"));
