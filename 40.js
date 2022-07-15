//spread operator(...)
const array1=[1,2,3];
const array2=[5,6,7];
//const newarray=[...array1,...array2,89,69];
// const newarray=[..."123456789"];
// console.log(newarray);
//spread operator in objects
const obj1={
    key1:"value1",
    key9:"value2",
    key3:"value3",
};
console.log(obj1);

const obj2=
{
    key4:"value3",
    key5:"value",
    key6:"valueunique"
};
const newobject={...obj1,...obj2};
console.log(newobject);
