const accountId = 14453 //cant change now
let accountEmail ="pihu@google.com"
var accountPassword = "134" //use it less
accountCity="tikabhairab" // can reserved memory for variable without using var or let but should not do this
let accountState;


//accountId = 9 //not allowed
accountEmail = "hi@google"
console.log(accountId);
console.log(accountEmail = "hi@google")

/*
prefered not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])