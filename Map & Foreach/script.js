// Exercise 1
//  * Double each number in the array
function doubleNumbers(arr){
  return arr.map(num => num * 2);
}
 console.log(doubleNumbers([1,2,3]));
// Exercise 2
//  * Convert numbers to strings
function numbersToStrings(arr){
return arr.map(num=>num.toString());
}
 console.log(numbersToStrings([1,2,3]));
// Exercise 3
//  * Make all names uppercase
function upperCaseNames(arr){
return arr.map(name=>name.toUpperCase());
}
console.log(upperCaseNames(["ali","sara"]));
//  * Exercise 4
//  * Add 5 to each number
function addFive(arr){
    return arr.map(num => num + 5);
}
console.log(addFive([10,20,30]));
// * Exercise 5
//  * Get only the name from objects
function getNames(arr){
return arr.map(student=> student.name);
}
console.log(getNames([{name:"Ali",age:20},{name:"Sara",age:25}]));
// Exercise 6
//  * Return the length of each word
function wordLengths(arr){
return arr.map(word=>word.length);
}
console.log(wordLengths(["apple","dog"]));
// Exercise 7
//  * Multiply each number by its index
function valTimesIndex(arr){
return arr.map((num,index)=>num * index);
}
console.log(valTimesIndex([2,3,4]));
//  * Exercise 8
//  * Create array of usernames starting with "@"
function makeUsernames(arr){
return arr.map(name=>"@"+ name.username);}
console.log(makeUsernames([{username:"ahmad"},{username:"sara"}]));
//  Exercise 9
//  * Create array of squares
function squareNumbers(arr){
return arr.map(num=>num*num);
}
console.log(squareNumbers([2,3,4]));
// Exercise 10
//  * Convert words to their first letter
function firstLetters(arr){
return arr.map(word=>word[0]);
}
console.log(firstLetters(["Ali","Sara"]));
// * Exercise 11
//  * Count total sum using forEach
function sumNumbers(arr){
  let sum=0;
arr.foreach(num=>{num+=sum;});
return sum;
}
console.log(sumNumbers([10,20,30]));
//  * Exercise 12
//  * Count how many numbers are even
function countEven(arr){
let count=0;
arr.foreach(num=>{
  if(num%2===0)
    count++;
  });
return count;
}
console.log(countEven([1,2,3,4]));

//  * Exercise 13
//  * Create array where each number becomes number * 10
function timesTen(arr){
  return arr.map(num => num * 10);
}
console.log(timesTen([1,2,3]));
// * Exercise 14
//  * Add property "adult" depending on age
function addAdult(arr){
arr.map(user=>({
  ...user,adult:user.age>=18
}))
}
console.log(addAdult([{name:"Ali",age:20},{name:"Sara",age:15} ]));
//  * Exercise 15
//  * Create array of prices after adding 10 tax
function addTax(arr){
return arr.map( price=>price+10);
}
console.log(addTax([100,200]));
//  * Exercise 16
//  * Count how many numbers are greater than 50
function countBig(arr){
  let count;
  arr.foreach( num=>{
    if(num>50)
      count++;
});
return count;
}
console.log(countBig([20,60,80]));
// * Exercise 17
//  * Convert numbers to "Number: X"
function labelNumbers(arr){
  arr.map(num=>"Number: " + num);
}
console.log(labelNumbers([5,10]));
//  * Exercise 18
//  * Get product names
function productNames(arr){
return arr.map(item=>item.product);
}
console.log(productNames([{product:"Laptop",price:1000},{product:"Phone",price:500}]));
// * Exercise 19
//  * Create array where each number becomes number + index
function addIndex(arr){
return arr.map((num,index)=>num+index);
}
console.log(addIndex([5,5,5]));
//  * Exercise 20
//  * Create array of boolean values (true if even)
function isEvenArray(arr){
return arr.map(num=>num%2===0);
}
console.log(isEvenArray([1,2,3,4]));