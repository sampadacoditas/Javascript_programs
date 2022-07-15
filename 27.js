//array push and pop
//array shift and unshift
let fruits=["apple","mango","grapes"];
console.log(fruits);
//push
fruits.push("banana");
console.log(fruits);
//pop
let poppedfruit=fruits.pop();
console.log(fruits);
console.log("popped fruits is",poppedfruit);
//unshift
fruits.unshift("banana");
fruits.unshift("myfruits");
console.log(fruits);
//shift
let removedfruit=fruits.shift();
console.log(fruits);
console.log("removedfruits is",removedfruit);