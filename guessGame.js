
let userNumber = prompt('Enter the number that you have guessed')
let systemNumber = (Math.floor(Math.random() * 10))
console.log (userNumber,systemNumber);


if(userNumber==systemNumber)
{
    
    console.log('You Guesses Number '+userNumber+' is Correct')
}
else
{
console.log('The Number you guessed  is Wrong. Correct Number is: '+systemNumber)
} 