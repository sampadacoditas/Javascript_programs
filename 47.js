//hoisting
//so we can declare function before initilazation also the function will execute
// hello();
// function hello()
// {
//     console.log("hello world");
// } 
//hello world
//but not  in the case of function we can't do it
//function expression
const hello=function()
{
    console.log("hello world");
}
console.log(hello);
 //hello="hello world";
console.log(hello);