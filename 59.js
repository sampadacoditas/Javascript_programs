// //reduce method
// //aim:sum of all the numbers in array
// const numbers=[1,2,3,4,5,10];
// const sum=numbers.reduce((accumulator,currentvalue)=>
// {
//     return accumulator+currentvalue;
// },100);
// console.log(sum);
// // accumulator, currentvalue, return 
// // 1              2            3
// //3               3             6
// //6                 4            10
// //10                5               15
// //15                10              25

const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:1,productName:"mobile",price:15000},
    {productId:1,productName:"mobile",price:20000},

]
const totalAmount=userCart.reduce((totalPrice,currentProduct)=>
{
    return totalPrice+currentProduct.price;
})
console.log(totalAmount);
//totalprice    currentvalue    return
//0                 {}              12000
//12000             22000           34000
//34000             15000           49000
