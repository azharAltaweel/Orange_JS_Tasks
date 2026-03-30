//🟢 Level 1 — Array Manipulation
//Task 1 — firstAndLast(arr)
function firstAndLast(arr){
    return arr.slice(0,1).concat(arr.slice(arr.length-1));
}
console.log(firstAndLast([1,2,3,4,5]));
//Task 2 — removeMiddle(arr)
function removeMiddle(arr){
      let middle = Math.floor(arr.length / 2);
      arr.splice(middle,1)
        return arr;
}
console.log(removeMiddle([1,2,3,4,5]));
//Task 3 — swapFirstLast(arr)
function swapFirstLast(arr){
    let x=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=x;
    return arr;
}
console.log(swapFirstLast([1,2,3,4,5]));
//Task 4 — insertAtMiddle(arr,value)
function insertAtMiddle(arr,value){
      let middle = Math.floor(arr.length / 2);
      arr.splice(middle,0,value);
      return arr;
}
console.log(insertAtMiddle([1,2,3,4,5],100));
//Task 5 — duplicateArray(arr)
function duplicateArray(arr){
    return arr.concat(arr);
}
console.log(duplicateArray([1,2,3,4,5]));
//🟡 Level 2 — Filtering & Searching
//Task 6 — removeDuplicates(arr)
function removeDuplicates(arr){
let result=[];
arr.foreach(num=>{
    if(!result.includes(num))
        result.push(num);
    });
return result;
}
console.log(removeDuplicates([1,2,2,3,4,5,5]));
// ### Task 7 — `findSecondLargest(arr)`
// Return the **second largest number**.
function findSecondLargest(arr){
   let sorted= arr.sort;
    return sorted[1];
} 
console.log(findSecondLargest([4,9,2,10,6]));
// ### Task 8 — `findSecondSmallest(arr)`
// Return the **second smallest number**.
function findSecondSmallest(arr) {
  const sorted = [...arr].sort((a,b) => a - b);
  return sorted[1];
}
console.log(findSecondSmallest([4,9,2,10,6])); // 4
// ### Task 9 — `removeGreaterThan(arr,value)`
// Return a new array **without numbers greater than a given value**.
function removeGreaterThan(arr,value) {
  return arr.filter(num => num <= value);
}
console.log(removeGreaterThan([10,5,20,3,8],10)); // [10,5,3,8]
// ### Task 10 — `removeLessThan(arr,value)`
// Return numbers **greater than or equal to the value**.
function removeLessThan(arr,value) {
  return arr.filter(num => num >= value);
}
console.log(removeLessThan([10,5,20,3,8],10)); // [10,20]

// # 🔵 Level 3 — Advanced Array Logic

// ### Task 11 — `countOccurrences(arr,value)`
// Return how many times a value appears.
function countOccurrences(arr,value) {
  return arr.filter(num => num === value).length;
}
console.log(countOccurrences([1,2,3,2,4,2],2)); // 3
// ### Task 12 — `arrayIntersection(arr1,arr2)`
// Return elements that exist in **both arrays**.
function arrayIntersection(arr1,arr2){
  return arr1.filter(num=>arr2.includes(num));
}
console.log(arrayIntersection([1,2,3,4],[3,4,5,6]));
// ### Task 13 — `arrayDifference(arr1,arr2)`
// Return values that exist in **arr1 but not in arr2**.
function arrayDifference(arr1,arr2){
    return arr1.filter(num=> !arr2.includes(num));
}
console.log(arrayDifference([1,2,3,4],[3,4]));
// ### Task 14 — `uniqueMerge(arr1,arr2)`
// Merge two arrays and remove duplicates.
function uniqueMerge(arr1,arr2){
   let merged=arr1.concat(arr2);
   let uniqueArr=[];
   merged.forEach(num=>{
    if(!uniqueArr.includes(num))
      uniqueArr.push(num);
   });
   return uniqueArr;
}
console.log(uniqueMerge([1,2,3],[3,4,5]));
// ### Task 15 — `removeNegativeNumbers(arr)`
// Remove **all negative numbers**.
function removeNegativeNumbers(arr){
  return arr.filter(num=> num>=0);
}
console.log(removeNegativeNumbers([5,-2,10,-3,7]));

// 🔴 Level 4 — String & Array Combined

// ### Task 16 — `wordsLongerThan(arr,length)`
// Return words longer than a specific length.
function wordsLongerThan(arr,length){
  return arr.filter(word=>word.length>length);
}
console.log(wordsLongerThan(["alex","mohammad","ali","sara"],4));
// ### Task 17 — `countLetterInWords(arr,letter)`
// Count how many words contain a specific letter.
function countLetterInWords(arr,letter){
  return arr.filter(word=>word.includes(letter)).length;
}
console.log(countLetterInWords(["apple","banana","car","dog"],'a'));
// ### Task 18 — `removeShortWords(arr,length)`
// Remove words shorter than a specific length.
function removeShortWords(arr,length){
  return arr.filter(word=>word.length>=length);
}
console.log(removeShortWords(["alex","mohammad","ali","sara"],4));
// ### Task 19 — `findLongestWord(arr)`
// Return the longest word in the array.
function findLongestWord(arr){
  return arr.sort((a, b) => b.length - a.length)[0];
}
// ### Task 20 — `findShortestWord(arr)`
// Return the shortest word.
function findShortestWord(arr){
  return arr.sort((a, b) => a.length - b.length)[0];
}

// # 🟣 Level 5 — Complex Challenges

// ### Task 21 — `sortByLength(arr)`
// Sort words **by their length**.
function sortByLength(arr){
    return arr.sort((a, b) => a.length - b.length);
}
// ### Task 22 — `removeEverySecond(arr)`
// Remove **every second element** from the array.
function removeEverySecond(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}
// ### Task 23 — `sumEvenNumbers(arr)`
// Return the **sum of even numbers**.
function sumEvenNumbers(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}
// ### Task 24 — `sumOddIndex(arr)`
// Return the **sum of numbers in odd indexes**.
function sumOddIndex(arr) {
  return arr
    .filter((_, index) => index % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);
  }
// ### Task 25 — `reverseWithoutReverse(arr)`
// Reverse the array **without using reverse()**.
function reverseWithoutReverse(arr) {
  let result = [];
  for (let item of arr) {
    result.unshift(item);
  }
  return result;
}

// # ⚡ Level 6 — Hard Challenges

// ### Task 26 — `findMissingNumber(arr)`
// The array contains numbers from **1 to N**, but one number is missing.Return the missing number.
// ### ask 27 — `pairSum(arr,target)`
// Return two numbers that **sum to target**.
// ### Task 28 — `rotateArray(arr,steps)`
// Rotate the array **to the right by N steps**.
// ### Task 29 — `chunkArray(arr,size)`
// Split the array into **smaller arrays of size N**.
// ### Task 30 — `groupByLength(arr)`
// Group words by their length.