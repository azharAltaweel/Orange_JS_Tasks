//1. Concatenation
let a="Hello";
let b="World";
console.log(a.concat(b));
//2. String Length
let c="JavaScript";
console.log(c.length);
//3. Access First Character
let d="Programming";
console.log(d.charAt(0));//or d[0]
//4. Extract Part of a String
let e="coding is fun";
console.log(e.slice(0,6));
//5. Replace Characters
let f="cat";
console.log(f.replace("a","e"));
//6. Convert to Uppercase
let g="javascript";
console.log(g.toUpperCase());
//7. Split a String
let fruits="apple,banana,orange";
console.log(fruits.split(","));
//8. Join Array into String
let h=["hello", "world"];
console.log(h.join(" "));
//9. Remove Extra Spaces
let i=" hello world ";
console.log(i.trim());
//10. Check if a Word Exists
let j="hello world";
console.log(j.includes("world"));
//11. Reverse a String
let k="hello";
let Reversed=k.split("").reverse().join("");
console.log(Reversed);
//12. Count Character Occurrences
let l=elephant;
let count = l.split("e").length - 1;
console.log(count);
//13. Palindrome Check
let m="racecar";
let reversed2 = m.split("").reverse().join("");
console.log(m === reversed2);
// 14. Capitalize Each Word
let withoutCapit="hello world";
let withoutCapitArr=withoutCapit.split(" ");
let withCapit=[];
withoutCapitArr.forEach(word => {withCapit.push(word[0].toUpperCase+word.slice(1));
});
console.log(withCapit.join(" "));
// 15. Format Number
let n=1234.5678 ;
console.log(n.toFixed(2));
// 16. Extract Numbers from String
let o="There are 3 apples and 2 oranges"
console.log(o.match(/\d+/g))
//17. Email Validation
let email="example@email.com";
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(pattern.test(email)); // true
//18. Replace Word
let p="This is a bad word";
console.log(p.replace("bad","good"));
//19. Remove Duplicate Characters
let q="aabbc";
let q_set=[...new Set(q)].join("");
console.log(q_set);
//20. Sort Characters Alphabetically
let r="hello";
let reversed3=r.split("").sort("").join("");
console.log(reversed3);
//21. Check for Anagrams
let s="listen";
let t="silent";
console.log(s.split("").sort("").join("")===t.split("").sort().join(""));
//22. Reverse Words in Sentence
let words="The quick brown fox";
console.log(words.split(" ").reverse().join(" "));
//23. Find the Longest Word
let w="Web development is fascinating";
let longest=w.split(" ").sort((a,b)=>b.length-a.length);
console.log(longest[0]);
//24. Advanced Palindrome
let original="A man, a plan, a canal, Panama!";
let edit=original.toLowerCase().replace(/[^a-z0-9]/g,"");
let reversed4=edit.split("").reverse().join("");
console.log(edit===reversed4);
//25. Character Frequency
let x="mississippi";
//26. Replace Vowels with Numbers
let y="Hello World";
let WithoutVowels=y.replace(/a/gi,"1")
.replace(/e/gi,"2")
.replace(/i/gi,"3")
.replace(/o/gi,"4")
.replace(/u/gi,"5");
console.log(WithoutVowels);
//27 — startsWith
let z = "JavaScript is fun";
console.log(z.startsWith("Java"));
//28 — endsWith
let img = "image.png";
console.log(img.endsWith("png"));
//29 — repeat
let repetedtext="ha"
console.log(repetedtext.repeat(3));
//30 — indexOf
let text1 = "Hello World";
console.log(text1.indexOf("o"));