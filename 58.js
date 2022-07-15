//filter method
//will return T or F callback function
//To filter Even or Odd

const numbers=[1,3,2,6,4,8];
const isEven=function(number)
{
    return number%2===0;
}
const Evennumbers=numbers.filter(isEven);
console.log(Evennumbers);
//if true is return then value will get stored in evenNumber
