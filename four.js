let num = 206;
let sum = 0;
while(num <= 311){
    if(num % 2 === 0){
        console.log('even number : ',num);
        sum += num;
        console.log('Total : ',sum);
    }
    num++;
}
console.log('Sum of even numbers between 206 and 311:', sum);