

console.log('***Menu***\n')

console.log('Press 1 to Login with Existing User\n')

console.log('Press 2 to Register a new User\n')

console.log('Press 3 to exit from program')
var choice = prompt("Enter\n");
while (choice!=3)
{
if (choice == 1)
{

var username = prompt("Enter you name in capital letters");
var password = prompt("Enter your Password");
if(password==12345)
{

if (username == "NOOR")
{
    console.log('you logged in');

}
else if  (username == "SHAHZAIB" )

{

    console.log('you logged in');
}

else if  (username == "ANTONY")

{

    console.log('you logged in');
}


else 
{
    console.log('your name is not matched');
}
}
else
 {
console.log('User and Password You Entred is Wrong');
}

}

else
{
var username = prompt("Enter you name in capital letters");
var password = prompt("Enter your Password");
if(username !=null && password !=null)
{
    console.log('New User Added to system succesfully.')
}
else {
    console.log('These Feilds cannot be empty')
}
}
}
