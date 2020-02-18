var button = document.getElementById("calculate")
console.log("Basic Calculator");
button.onclick=
function calculate(event){
event.preventDefault();



let indexFinal = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let indeX = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let oddValues = [1,0,5,7,9,13,15,17,19,21,1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23]
let evenValues = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let finalCharater = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var months = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
var comune = ["A271", "A345", "A944", "B519", "D612", "F205", "G237", "G942", "L219", "L424", "Z236"];
var name = document.getElementById("firstName").value.toUpperCase()
var lastname = document.getElementById("lastName").value.toUpperCase()
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
    let lname = disemvowel(lastname);
    let dob1 = disemChar(dob)

     var fnameFinal = fname.substring(3, 0);
     var lnameFinal = lname.substring(3, 0);
     var yearFinal = dob1.substring(6, 8);
     var month = dob1.substring(2, 4);
     Number(month)
     var monthLeter  =  months[month-1];
     var day = dob1.substring(0, 2);
     var comunNumber = comune[comun]
     let lnameFinal1
     
    
    if(lnameFinal.length<3) {
        lnameFinal = addX(lnameFinal)
     }
    else  {
        lnameFinal = lnameFinal  }
    
        
        if(fnameFinal.length<3) {
           fnameFinal = addX(fnameFinal)
        }
       else {
           fnameFinal = fnameFinal  }

      result = lnameFinal + fnameFinal + yearFinal + monthLeter + day + comunNumber


function getEvenCharacters() {
  let evenCharacters = [];
  for (let i = 1; i < 15; i += 2) {
      evenCharacters.push(result.substring(i, i+1));
  }
  return evenCharacters;
}
    

function getOddCharacters() {
  let oddCharacters = [];
  for (let i = 0; i < 16; i += 2) {
      oddCharacters.push(result.substring(i, i+1));
  }
  return oddCharacters;
}

function findIndex(character) {
  for (let i = 0; i < indeX.length; i++) {
      if (indeX[i] === character) {
          return i;
      }
  }
  return -1;
}

function getNumber(character, isEven) {
  let index = findIndex(character);
  return isEven ? evenValues[index] : oddValues[index];
}

function getSumOfOddNumbers() {
  let sum = 0;
  let oddCharacters = getOddCharacters();
  for (let i = 0; i < oddCharacters.length; i++) {
      sum += getNumber(oddCharacters[i], false);
  }
  return sum;
}

function getSumOfEvenNumbers() {
  let sum = 0;
  let evenCharacters = getEvenCharacters();
  for (let i = 0; i < evenCharacters.length; i++) {
      sum += getNumber(evenCharacters[i], true);
  }
  return sum;
}

function getRemainder() {
  let oddNumber = getSumOfOddNumbers();
  let evenNumber = getSumOfEvenNumbers();
  return (oddNumber + evenNumber) % 26;
}
let remainder = getRemainder()



let finalword = ""
function findIndexOfFinalCharacter(character) {
  
  for (let i = 0; i < indexFinal.length; i++) {
      if (indexFinal[i]  == character  ) {
        finalword += finalCharater[i]  
          return finalword;
      }
      
  }
  return -1;
}




let taxCode = findIndexOfFinalCharacter(remainder)



result = lnameFinal + fnameFinal + yearFinal + monthLeter + day + comunNumber + finalword
let finalResult = result.toUpperCase(result)
 document.getElementById("output").value = finalResult;
}

