
for (let num = 1; num <= 10; num++) {
    for (let divisor = 2; divisor <= num/2; divisor++) {
        if (num % divisor == 0) {
            console.log(num+' is Even Number');
        } else {
            console.log(num+' is a Odd Number');
    }

}
}