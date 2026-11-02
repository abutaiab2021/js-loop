let num = 81;
let sum = 0;
while(num <= 131){
    if(num % 2 !== 0){
        sum += num;
        console.log('odd number : ',num);
        console.log('Total : ',sum);
    }
    num++;
}
console.log('Sum of odd numbers between 81 and 131:', sum);