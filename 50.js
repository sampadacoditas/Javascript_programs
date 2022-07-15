//Block scope vs function scope
//let and const are block scope
//var is function scope
//let and const are only accessible inside the class
// {
//     let firstName="harshit";
//     console.log(firstName);
// }
// {
//     const firstName="mohit";
//     console.log(firstName);
// }
// //console.log(firstName);//error
// const firstName="garima";
// console.log(firstName);

//but var variables can be accesible outside the block

// {
//     var firstName="harshit";
//     console.log(firstName);
// }
// {
//     console.log(firstName);
// }
// if(true)
// {
//     var firstName="harshit";
//     console.log(firstName);
// }

function myapp()
{
    if(true)
    {
        var firstName="harshit";
        console.log(firstName);
    }
}
myapp();
