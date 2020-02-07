
for(let num=2; num<=50;num++)   {

let div=2;
while(div<num && num%div!=0)
{
    if(div+1==num)
    {
    console.log(num)
}
    div++; 

}


}

for (let num = 2; num < 50; num++) {
    let isPrime = true;
    for (let previous = 2; previous < num; previous++) {
        if (num%previous === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}