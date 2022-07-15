//how to iterate object
const person={
name:"harshit",
age:22,
person_hobbies:["guitar","sleeping","listening"]
};
//for in loop
//object.keys
for (let key in person)
{
    console.log(`${key}:${person[key]}`)//backticked
    console.log(key,":",person[key]);
}