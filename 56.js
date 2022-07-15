//importanat array method
//for each
//map
//filter
//reduce
 const numbers=[4,2,5,8];
// function myfunc(number,index)
// {
//     console.log(`index is ${index}number is ${number}`);
// }
// numbers.forEach(myfunc);

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`)
});

numbers.forEach(function(number,index)
{
    console.log(number*3);
})

const users=[
    {firstName:"harshit",age:23},
    {firstName:"mohit",age:21},
    {firstName:"nitish",age:20},
    {firstName:"garima",age:22}
]
//whenever we are usinng map function we need to use return
users.forEach(function(user)
{
    console.log(user.firstName);
});

for(let user of users)
{
    console.log(user.firstName);
}

users.forEach((user)=>
{
console.log(user.age);
})