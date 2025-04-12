// Write a JavaScript program to count the number of arrays inside a given array.

// Test Data:

// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

function test(arr) {
    console.log(arr.filter((arr) => Array.isArray(arr)));
    console.log(arr.map(arr=>arr));
    console.log(arr[2]);
    
    
    return arr.filter((arr) => Array.isArray(arr)).length
}
console.log(test([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));
console.log(test([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));
