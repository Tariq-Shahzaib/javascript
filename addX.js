// let lnameFinal = "";
// let lnameFinal1
// if(lnameFinal.length<2)
// {
//    lnameFinal1 = addX(lnameFinal)
// }
// console.log(lnameFinal1)

// function addX(str){
    
//     while(str.length<3)
//     {
//         str +=  'X'
//     }
//     return str;
// }

let indeX = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let oddValues = [1,0,5,7,9,13,15,17,19,21,1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23]
let evenValues = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

let result = "TRQSHZ95T08A271"

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

console.log(getRemainder())


