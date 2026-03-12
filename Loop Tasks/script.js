//1
let numbers="";
for(let i=1;i<=10;i++){
    numbers+=i;
    if(i !==10){
        numbers+= "-"
    }
}
console.log(numbers);
//2
let total=0;
for(let i=0;i<=30;i++){
    total+=i;
}
console.log(total);
//3
let even="";
for(let i=0;i<=50;i++){
    if(i %2===0)
        even += i +" ";
}
console.log(even);
//4
let numbers2="";
for(let i=10;i>=1;i--){
    numbers2+=i+ " ";
}
console.log(numbers2);
//5
let letters = ["A","B","C","D","E"];
for(let i=0 ; i<5 ; i++ ){
      let row = " ";
      for(let j=0 ; j<5 ; j++){
        if(j<5-i-1)
        row+="A ";
    else
        row += String.fromCodePoint(65 + i) + ' ';
      }
      console.log(row);
}
//6
for(let i=0 ; i<5 ; i++){
        let row=" ";
for(let j=0 ; j<5 ; j++){
    if(j < 5-i-1)
        row+="1"+" ";
    else 
        row+=(1+i) + ' ';}
console.log(row);
}
//7
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (i === j) {
      row += i + " ";
    } else {
      row += "0 ";
    }
  }
  console.log(row);
}
//8
let x=5;
let fact=1;
for(let i=1;i<=x;i++){
    fact *= i;
}
console.log(fact);
//9
let a=0;
let b=1;
let fib="01";
for(let i=2;i<10;i++){
   let next=a+b;
   fib+=next ;
   a=b;
   b=next;
}
console.log(fib);
//10
let text="Orange Coding School";
let countOfChars=0;
for(let i=0;i<text.length-1;i++){
    if(text[i].toLowerCase() ==='c')
        countOfChars++;
}
console.log(countOfChars);



