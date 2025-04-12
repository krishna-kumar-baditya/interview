// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

let array = [2, "11", 3, "a2", false, 5, 7, 1]
function sum(arr){
    return arr.reduce((total,value)=>{
        return typeof value === "number" ? total + value : total
    },0)
}
console.log(sum(array));
