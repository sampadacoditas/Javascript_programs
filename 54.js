// //callback function
// function myfunc(a)
// {
//     console.log(a);
//     console.log("hello world");
// }
// myfunc([1,2,3]);
// myfunc('abc');
// myfunc({name:"harshit"});
// function myfunc(a)
// {
//     console.log(a);

// }
// function myfunc2()
// {
//     console.log("inside myfunc2");
// }
// myfunc();//undefined

function myfunc2(name)
{
    console.log("inside my func2");
    console.log("your name is ${name}");
}
function myfunc(callback)
{
    console.log("hello there I am fun and I can");
    callback("harhit");
}
myfunc(myfunc2);
