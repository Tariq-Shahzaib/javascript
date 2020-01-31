
console.log("Basic Calculator");
do{

var fp = prompt("Please enter first number");
var op = prompt("Please enter the oprand +, -, *, /");
var sp = prompt("Please enter second number"); 

var rs=0;
var fn=Number(fp);
var sn=Number(sp);
//if((Number.isnumber(fn) == true) && (Number.isInteger(sn) == true ))
if((Number.isNaN(fn) === false) && (Number.isNaN(sn) === false ))
{

    
    switch (op)
    {
        case '+':
            rs = fn + sn;
            console.log (rs);
            break;
            
            case '-':
            rs = fn - sn;
            console.log (rs);
            break;

            case '*':
            rs = fn * sn;
            console.log (rs);
            break;

            case '/':
            rs = fn / sn;
            console.log (rs);
            break;
        default:
            console.log('You Entered a invalid Operand...');
            break;
    }    
   var ex = prompt("press 1 for Continue Or press any other key to Exit the Program...");
}
else 
{
    console.log ('You must have to enter number')
}
} while (ex==1);



