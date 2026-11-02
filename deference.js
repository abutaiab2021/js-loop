// odd numbers 1 - 20
// way no 1

// for(let i=1; i<=20; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// way no 2
// for(let i=1; i<=20; i+=2){
//     console.log(i);
// }

// way no 3
// for(let i=1; i<=20; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

//for even numbers 1 - 20
// way no 1
// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// way no 2
// for(let i=1; i<=20; i++){
//     if(i % 2 !== 1){
//         console.log(i);
//     }
// }

// way no 3
// for(let i=2; i<= 20; i+=2){
//     console.log(i);
// }

// give me the list of numbers between 1 to 30 which are divisible by 5

// for(let i=1; i<=30 ; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }
// for(let i=1; i<=30 ; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=100 ; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=30 ; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }

// give me sum of numbers between 1 to 100 which are divisible by 3

let sum = 0;
for(let i=1; i<=100 ; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
    }  
}
console.log("Sum of numbers between 1 to 100 which are divisible by 3 is: ", sum);