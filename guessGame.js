do 
{
var userNumber = prompt('Enter the number that you have guessed')
var systemNumber = (Math.floor(Math.random() * 10+1))



if(userNumber==systemNumber)
{
    
    alert('You Guessed Number '+userNumber+' is Correct')
}
else
{
alert('The Number you guessed '+ userNumber+' is Wrong. Correct Number is: '+systemNumber)
}
}
while (userNumber!=systemNumber)
