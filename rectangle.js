
for (let num = 2; num <= 10; num++) {
for (let divisor = 2; divisor < num; divisor++) {
    
        if(num%divisor==0) {
            isPrime = false;
            break;
        }
        if (num % divisor === 0)    {
            console.log(num+' is not a Prime Number');
        }
        else {
             console.log(num+' is a Prime Number');

}

}
}