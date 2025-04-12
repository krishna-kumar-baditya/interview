// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data:

// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

function test(arr){
    return arr.map((item,index)=>{
        if(isNaN(item)){
            return index
        }
        return false
    })
    .filter((item)=>item)
}
console.log(test([2, NaN, 8, 16, 32]));
console.log(test([2, 4, NaN, 16, 32, NaN]));
console.log(test([2, 4, 16, 32]));
