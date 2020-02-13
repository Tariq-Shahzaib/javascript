var button = document.getElementById("calculate")
button.onclick=


function calculate() {
    console.log('click work')
    var fn = document.getElementById("num1").value;
    var op = document.getElementById("option").value;

var sn = document.getElementById("num2").value;

fn=Number(fn);
sn=Number(sn);

        /*var fp = prompt("Please enter first number");
        var op = prompt("Please enter the oprand +, -, *, /");
        var sp = prompt("Please enter second number"); 
        
        var rs=0;
        var fn=Number(fp);
        var sn=Number(sp);*/
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
            var result = document.getElementById("output");
            result.value = rs;
           
        }
        else 
        {
            console.log ('You must have to enter number');
        }
        
        
        
        
        

}

