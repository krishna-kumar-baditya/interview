// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
// let arr = [7, 9, 0, -2]
// console.log(arr.slice(0,6));

function last(arr,n){
    if(arr == null){
        return void 0
    }
    if(n == null){
        // return arr[arr.length - 1]
        return arr.at(-1)
    }
    return arr.splice(Math.max(arr.length - n,0))
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

