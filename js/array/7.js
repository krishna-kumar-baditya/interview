// Write a JavaScript program to sort the items of an array.

// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1.sort((a,b)=>{
//     return a-b
// }));
// let temp = 0
// for(let i = 0;i < arr1.length;i++){
//     for(let j = 0;j<arr1.length;j++){
//         if(arr1[i] <= arr1[j]){
//             temp = arr1[j]
//             arr1[j] = arr1[i]
//             arr1[i] = temp
//         }
//     }
// }
// console.log(arr1);

let sortedArray = arr1.reduce((acc,curr)=>{
    let index = acc.findIndex(num => num > curr)
    console.log(index);
    
    if(index === -1){
        acc.push(curr)
    }
    else{
        acc.splice(index,0,curr)
    }
    return acc
},[])

console.log(sortedArray);
