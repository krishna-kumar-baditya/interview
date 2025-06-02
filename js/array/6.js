// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

let num = "025468"
console.log(-10 > -100);

let result = [num[0]]

for(let i=1;i<num.length;i++){
    if(num[i - 1] % 2 == 0 && num[i] % 2 ==0){
        result.push('-',num[i])
    }
    else{
        result.push(num[i])
    }
}
console.log(result.join(''));
