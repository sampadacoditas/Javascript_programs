//how to create objcts
//const person={name:"harhit",age:23};
const person={
    name:"harshit",
    age:22,
    hobbies:["guitar","sleeping","listening"]
};
console.log(person);
//how to acess data from object
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
//how to add key value pairs to object
person.gender="male";
console.log(person);
//in javavcsipt the key is string by default
console.log(person["name"]);
console.log(person["age"]);
person["person"]="male";