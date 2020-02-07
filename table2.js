let number;
let result;
let line='';
for (let number=1; number<=10; number++ )   {



for (let multiplier=1; multiplier<=10; multiplier++ ) {

result= multiplier*number;

if(result.toString().length < 2)
{
   result= " "+result;
   
}

line+=result+'    '



if(multiplier==10)  {
    line+='\n'
}



}

console.log('\n')
console.log(line)
}
