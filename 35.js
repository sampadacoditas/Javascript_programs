//array destructing
const MyArray=["value1","value2","value3","value4"];
//let myvar1=MyArray[0];
//let myvar2=MyArray[1];
console.log("value f myvar1",myvar1);
console.log("value of myvar2",myvar2);
let [myvar1,myvar2,...mynewarray]=MyArray;
console.log("value of myvar",myvar1);
console.log("value of myvar2",myvar2);
console.log(mynewarray);