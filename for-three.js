// for odd numbers sum between 91 and 129
// let sum = 0;
// for(let i = 91; i <= 129; i=i+2){
//     console.log(i);
//     sum = sum + i;
// }
// console.log("Sum of numbers from 91 to 129:", sum);



// for even numbers sum between 51 and 85
let sum = 0;
for(let i = 51; i <= 85; i=i+1){
    if(i % 2 === 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log("Sum of even numbers from 51 to 85:", sum);