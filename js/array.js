// Q.1 cut array length
// let data = [4,7,1,4,9,2,4,1]
// console.log(data);
// console.log(data.length);
// data.splice(3)
// console.log(data);
// console.log(data.length);
// or
// data.length = 3
// console.log(data);
// or
// but it does not change the original array
// let sum = data.reduce((acc,curr)=>{
//     console.log("length ",acc.length);

//     if(acc.length < 3){
//         acc.push(curr)
//     }
//     return acc
// },[])
// console.log(sum);

// Q.2 sum all elements in the array
// let data = [4,7,1,4,9,2,4,1]

// let array = data.reduce((acc,curr)=>{

//     console.log("acc = ",acc," curr = ",curr);

//     return acc = curr
// },0)
// console.log(array);
// let array = data.reduce((acc,curr)=>{

//     console.log("acc = ",acc," curr = ",curr);

//     return acc += curr
// },0)
// console.log(array);
// console.log(data);

// Question based on map,filter,reduce
let students = [
    { name: "Piyush", roolNo: 21, marks: 80 },
    { name: "Krishna", roolNo: 11, marks: 64 },
    { name: "Rahul", roolNo: 1, marks: 35 },
    { name: "Surya", roolNo: 22, marks: 45 },
];
// Q.1 Returns only name students in Capital

// 1st approach
// let names = []
// let length = students.length
// for(let i = 0;i< length;i++){
//     names.push(students[i].name.toUpperCase())
// }
// console.log(names);

// 2nd approach
// let names = students.map((item)=>{
//     return item.name.toUpperCase()
// })
// console.log(names);

// Q.2 Returns only details of those who scored more than 60 marks

// let details = students.filter((item)=>item.marks > 60)
// console.log(details);

// Q.3 More than 60 marks and roll no greater than 15
// let details = students.filter((item)=> item.marks > 60 && item.roolNo > 15)
// console.log(details);

// Q.4 sum of marks of all students
// let sum = students.reduce((acc,curr)=>{
//     return acc + curr.marks
// },0)
// console.log(sum);

// Q.5 Return only names of students who secured more than 60
// let names = students.filter((item)=>item.marks>60).map((item)=>item.name)
// console.log(names);

// wrong expectation
// let names = students.filter((item)=>{
//     if(item.marks>60){
//         return item.name
//     }
// })
// console.log(names);

// Q.6 Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// let totalMarks = 
// students.map((item)=>{
//     if(item.marks < 60){
//         item.marks += 20
//     }
//     return item
// })
// .filter((item)=>item.marks > 60)
// .reduce((acc,curr)=>acc + curr.marks,0)
// console.log(totalMarks);

// Q.7
let data = [3,1,7,12,23,45]
// console.log(data.sort());
console.log(data);

data.sort((a , b)=> b - a)
console.log(data);
