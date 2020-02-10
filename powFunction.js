function powerFunction(x, y){
    let ans=1
    for(let i = 1; i<=y; i++)
    {
       
        ans *=x
        

    }

    return ans;
}

let a=powerFunction(2, 5);
console.log(a);