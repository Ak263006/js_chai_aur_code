// answer comes in boolean values

// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
//the reason is that equality check and comparision works differently.
//comparision converts null to a number(0)that's why >= shows true and > shows false
//Avoid such converisions and try to write a clean code.

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);

/// strict check(===): checks  data type as well.

console.log("2"===2)

