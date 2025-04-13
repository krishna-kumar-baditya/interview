// falseyvalues - In JavaScript, a value is considered "falsey" if it translates to false when evaluated in a Boolean context. Here are the primary falsey values in JavaScript:
// false: The Boolean value false.
// 0: The number zero.
// -0: The number negative zero.
// 0n: The BigInt zero.
// "": An empty string.
// null: The absence of any value.
// undefined: A variable that has been declared but not assigned a value.
// NaN: The special "Not-a-Number" value.

let value = NaN;
// console.log(typeof value);

if (value) {
  console.log("true");
} else {
  console.log("false");
}

function test() {}

if (test) {
  console.log("This function is truthy!");
}
