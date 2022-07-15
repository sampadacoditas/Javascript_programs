//map method
 const numbers=[3,4,6,1,8];
// const square=function(number)
// {
//     return number*number;
// }
// const squarenumber=numbers.map(square);
// console.log(squarenumber);

//  const square=function(number)
// {

//     console.log(number*number);
// }

const squareNumber=numbers.map((number)=>
{
    return number*number;
});
console.log(squareNumber);

const users=[
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:21},
    {firstName:"nitish",age:20},
    {firstName:"garima",age:22}
]
const userNames=users.map((user)=>
{
    return user.firstName;
});