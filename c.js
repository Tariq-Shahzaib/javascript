    
    for(num=2; num <= 10; num++) {
        isPrime = true; 

        for(divisor = 2; divisor <= num-1; divisor++) {
            if(num%divisor==0) {
                isPrime = false;
                break;
            }
        }
           if(isPrime==true) {
            console.log(num +' is Prime')
             }
             else
             {
                 console.log(num+' is not a prime')
             }
    }
