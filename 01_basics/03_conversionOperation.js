let score ="33abc"
let score1 = "null"

console.log(typeof score);
console.log(typeof (score));

//converting score of string type to number
console.log("conversion string to number:")
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN aaucha output as NaN ni euta type ho
/*
"33" =33
"33abc" =NaN
true=1 and false = 0
null = 0
*/

//conversion to boolean
console.log("conversion to boolean:")
let isLoggedIn = 1
//let isLoggedIn = "" when leaved empty gives 0(false) after conversion
//let isLoggedIn = "swosti"when given a string or val gives 1(true) after conversion
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn)

console.log("conversion to string: ")
let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)