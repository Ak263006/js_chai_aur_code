//datatype is categorized into two types based on their memoey allocation.
//javascript is dynamically typed language.

// const score = 100;
// const scoreValue = 100-.443
// const id = Symbol('123')
// const anotherId= Symbol('123')

// console.log(id==anotherId)

//primitive(called by value)
//  7  Types: string, Number, Boolean, null, undefined, Symbol(to make a value unique), BigInt(to handle very large values).

//Non-Primitive(reference type)
// Array , Objects, Functions

// const heroes =["shaktiman", "makkadmanav","halku"]
// let myObj = {
//     name:"aashish",
//     age:20,
// }

// const myFunction = function(){
//     console.log("Hello World!")
// }

// console.log(typeof myFunction)//function
// console.log(typeof myObj)//object
// console.log (typeof heroes)//object
// console.log(typeof null)//object
// console.log(typeof undefined)//undefined
// console.log (typeof "hitesh")//string





/// ************************************* MEMORY ALLOCATION ************************************  ////

//primitive type =>stack memory(copy is passsed)
//non primitive => Heap memory (reference is passed)

// let myName = "Aashish"
// let anotherName = myName

// anotherName="kumar"
// console.log(anotherName)//kumar
// console.log(myName)//aashish

/// copy ofvmyName is passed to anotherName  so change in anotherName  is not visible in myName.

let userOne = {
    Email : "ajlhdajr56@",
    upi : "u76h@ybl",
}

let userTwo= userOne;
userTwo.Email = "asjgshh@"
console.log(userOne.Email)
console.log(userTwo.Email)

///reference is passed so change done in userTwo is implemented in userOne as well.


