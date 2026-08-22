const name = "aashish"
const repoCount = 50

//console.log(name + repoCount);
// console.log (`hello my name is ${name} and my rpocount is ${repoCount}`);

const gameName = new String('killer-bot-chal')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('l'));

const newString=gameName.substring(0,4);//no negative values 0 as starting pont and 4 an size or number of characters.
console.log (newString);

const anotherString = gameName.slice(-9,3);
console.log(anotherString);

const newStringOne = "   AASHish  ";
console.log(newStringOne);
console.log(newStringOne.trim());
///trim deletes the starting paces and end spaces .

//replace('element to be replaced','element at replaecd place').
const url= "https://aashish.com/aashish%237gupta"

console.log(url.replace('%23','_'));

console.log(url.includes("0"));

console.log(gameName.split('-'));





