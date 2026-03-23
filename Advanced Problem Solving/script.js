//     ### 1️⃣ Task — Log Compression System
// 📖 **Story:**
// A system logs user events, but the data became too large due to repeated consecutive actions. The company wants to compress the logs by grouping consecutive identical events and counting how many times they occurred.
// [
//   { event:"click", time:1 },
//   { event:"click", time:2 },
//   { event:"scroll", time:3 },
//   { event:"scroll", time:4 },
//   { event:"click", time:5 }
// ]
// 🎯 **Task:**
// Transform the data into:
// [
//   { event:"click", count:2 },
//   { event:"scroll", count:2 },
//   { event:"click", count:1 }
// ]
function LogCompression(logs){
    let count=1;
    let result=[];
    for(let i=0;i<logs.length;i++){
        if(logs[i].event===logs[i+1]?.event){
            count++;}
            else{
                result.push({event: logs[i].event, count: count});
                count=1;
            }
        }
        return result;
    }
console.log(LogCompression([
  { event:"click", time:1 },
  { event:"click", time:2 },
  { event:"scroll", time:3 },
  { event:"scroll", time:4 },
  { event:"click", time:5 }
]));

// ### 2️⃣ Task — Subarray with Given Sum
// 📖 **Story:**
// A finance system records daily expenses. The management wants to know if there is a continuous period where the total expense equals a specific target.
// [1,4,20,3,10,5],target=33
// 🎯 **Task:**
// Return the start and end indices of the subarray
// If not found → return `-1`
// ### ✅ Result:
// start=2
// end=4
function SubarrayWithSum(arr,target){
    let sum=0;
    let start=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        while(sum > target){
            sum -= arr[start];
            start++;
        }
        if(sum===target)
            return {Start: start, End:i};
    }
    return -1;
}
console.log(SubarrayWithSum([1,4,20,3,10,5],33));

// ### 3️⃣ Task — Maximum Profit
// 📖 **Story:**
// You are tracking stock prices over time. You can buy once and sell once (after buying). Your goal is to maximize profit.
// [7,1,5,3,6,4]
// 🎯 **Task:**
// Return the maximum possible profit
function MaxProfit(arr){
    let minPrice=arr[0];
    let maxProfit=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]<minPrice) {
            minPrice=arr[i];
        } 
        else{
            let profit=arr[i]-minPrice;
            if(profit>maxProfit)
                maxProfit=profit
        }     
    }
    return maxProfit;
}
console.log(MaxProfit([7,1,5,3,6,4]));

// ### 4️⃣ Task — Trap Rain Water 💀
// 📖 **Story:**
// Buildings have different heights, and when it rains, water gets trapped between them. You need to calculate how much water is stored.
// [0,1,0,2,1,0,1,3,2,1,2,1] ===>"0 هي الارض "
// 🎯 **Task:**
// Return total trapped water
function TotalWater(arr){
    let total=0;
    for(let i=1;i<arr.length;i++){
        let height=arr[i];
        let maxleft=arr[i-1];
        let maxright=arr[i+1];
    total+=min(maxleft,maxright)-height;
    if(total<1)
        continue;
    
    }
    return total;
}

// ### 5️⃣ Task — Longest Unique Subarray
// 📖 **Story:**
// A user browsing log is recorded. You need to find the longest continuous period where no value is repeated.
// [1,2,3,1,2,3,4,5]
// 🎯 **Task:**
// Return the longest subarray with unique values
// **Output:**
// [1,2,3,4,5]
function LongestUniqueSubarray(arr){
    let longestArr=[];
    let 
    for(let i=0;i<arr.length;i++){
        if(longestArr[i]!=arr[i]){
            longestArr.push(arr[i]);
        }else{
            
        }
    }
}

// ### 6️⃣ Task — Product of Array Except Self
// 📖 **Story:**
// Each number should be replaced by the product of all other numbers in the array (excluding itself). Division is not allowed.
// [1,2,3,4]
// 🎯 **Task:**
// [24,12,8,6]

function  ProductOfArrayExceptSelf(arr){
        let result=[];
        for(let i=0;i<arr.length;i++){
        let product=1;
        for(let j=0;j<arr.length;j++){
            if(j===i)
                continue;
             product*=arr[j];
        }
        result+=product+",";
        }
        return result;
}
console.log(ProductOfArrayExceptSelf([1,2,3,4]));

// ### 7️⃣ Task — Spiral Matrix Traversal
// 📖 **Story:**
// A robot moves in a spiral path inside a grid and collects numbers along the way.
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// 🎯 **Task:**
// [1,2,3,6,9,8,7,4,5]

function SpiralMatrixTraversal(arr){
let result=[];
let top=0;
let bottom=arr.length-1;
let left=0;
let right=arr[0].length-1;
    while (top<=bottom && left<=right){

        for(let i=left;i<=right;i++){//--->
            result.push(arr[top][i]);
        }top++;
        
        for(let i=top;i<=bottom;i++){//to bottom
            result.push(arr[i][right]);
        }right--;

        if(top <= bottom){
            for (let i = right; i >= left; i--) {
                result.push(arr[bottom][i]);
            }bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(arr[i][left]);
            }left++;
        }
    }
return result;
}
console.log(SpiralMatrixTraversal([ [1,2,3],
  [4,5,6],
  [7,8,9]]));

//   ### 8️⃣ Task — Minimum Window Subarray
// 📖 **Story:**
// You have a list of purchased items, and a target list of required items. Find the smallest continuous part that contains all required items.
// arr= [1,2,2,3,1,2,3]
// target= [1,2,3]
// 🎯 **Task:**
// Return the smallest subarray containing all target elements

// ### 9️⃣ Task — Detect Cycle in Array 💀
// 📖 **Story:**
// You are playing a game where each position tells you how many steps to move. You need to detect if you will get stuck in an infinite loop.
// [2,-1,1,2,2]
// 🎯 **Task:**
// Return whether a cycle exists or not

// ### 🔟 Task — Reconstruct Queue 💀💀
// 📖 **Story:**
// Each person tells you how many taller people are standing in front of them. You must reconstruct the correct queue order.
// [
//   { height:7, inFront:0 },
//   { height:4, inFront:4 },
//   { height:7, inFront:1 },
//   { height:5, inFront:0 },
//   { height:6, inFront:1 },
//   { height:5, inFront:2 }
// ]
// 🎯 **Task:**
// Reconstruct the correct queue