// Q1 cut array length
let data = [4,4,1,2,5,5,6,9]
// data.length = 3
// console.log(data);
// or using splice
// data.splice(3)
// console.log(data);



// Q2 sum of array elements
// let sum = data.reduce((acc,curr)=> acc + curr,0)
// console.log(sum);

// Q3 remove duplicate values from array
// let unique = new Set(data)
// console.log(unique);
// or
// let unique = data.filter((item,index)=> data.indexOf(item) === index)
// console.log(unique);


// Q4 comma operator
// let x = 10
// x = (x++,x+2)
// let y = 40
// x = (x+=20,y)
// console.log(x);

// Q5 value swap using destructuring
let x = 20, y = 30;
[x, y] = [y, x];
console.log(x, y);
