const accountId = 14534
let accountEmail= "asshas365@gmail.com"
var accountPassword = "243"
accountCity="Ghaziabad"
let accountState ;
//accountId=2 //not allowed

accountEmail= "hsd@hdg"
accountPassword="122243"
accountCity="Gopalganj"

/*
prefer not to use var 
because of issue in block scope and functional scope.
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
