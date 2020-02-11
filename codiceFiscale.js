var button = document.getElementById("calculate")
console.log("Basic Calculator");
button.onclick=
function calculate(event){
event.preventDefault();

var indeX = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var evenValues = ["1","0","5","7","9","13","15","17","19","21","1","0","5","7","9","13","15","17","19","21","2","4","18","20","11","3","6","8","12","14","16","10","22","25","24","23"]
let oddValues = ["0","1","2","3","4","5","6","9","0","1","2","3","4","5","8","9","10","11","12","13","14","17","18","19","20","21","22","23"]
var months = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
var comune = ["A271", "A345", "A944", "B519", "D612", "F205", "G237", "G942", "L219", "L424", "Z236"];
var name = document.getElementById("firstName").value

var lastname = document.getElementById("lastName").value

var dob = document.getElementById("Day").value
var comun = document.getElementById("comune").value

function addX(str){
    
    while(str.length<3)
    {
        str +=  'X'
    }
    return str;
}


function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
  
  function disemChar(str) {
    var vowels = ['-'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }
  let comuneCode





    let fname =disemvowel(name);
    let lname =disemvowel(lastname);
      let dob1 =disemChar(dob)

     var fnameFinal = fname.substring(3, 0);
     var lnameFinal = lname.substring(3, 0);
     var yearFinal = dob1.substring(6, 8);
     var month = dob1.substring(2, 4);
     Number(month)
     var monthLeter  =  months[month-1];
     var day = dob1.substring(0, 2);
     var comunNumber = comune[comun]
     let lnameFinal1
     
    
    if(lnameFinal.length<3)
     {
        lnameFinal = addX(lnameFinal)
     }
    else
    {
        lnameFinal = lnameFinal  }
    
        
        if(fnameFinal.length<3)
        {
           fnameFinal = addX(fnameFinal)
        }
       else
       {
           fnameFinal = fnameFinal  }










 result = lnameFinal + fnameFinal + yearFinal + monthLeter + day + comunNumber
 
 
           

 let evenNumbers =""
           function addEvenvalues(){


            for (let i=0; i<15; i+=2)    {

                evenNumbers += result.substring(i, i+1);
                }
               
                return evenNumbers
           }
      


           let oddNumbers =""
           function addOddValues(){


            for (let i=1; i<16; i+=2)    {


                oddNumbers += result.substring(i, i+1);
                 }
                
               return oddNumbers
           }
          let evennumbers1 =  addEvenvalues()
          let oddnumbers1 =  addOddValues()
 
          
           



 let finalResult = result.toUpperCase(result)
 document.getElementById("output").value = finalResult;
}
