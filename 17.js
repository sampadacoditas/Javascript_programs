//nested if else
//winning number 19
//19 is your guess is right
//17 too low
//20 too high

let winningNumber=19;
let userGuess=+prompt("Guess a number");
//prompt takes input in string ="12"
console.log(typeof userGuess,userGuess);
if(userGuess===winningNumber)
{
    console.log("yours guess is right!!!");
}
else
{
    if(userGuess<winningNumber)
    {
        console.log("too low");
    }
    else
    {
       console.log("too high");
    }
}