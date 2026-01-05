//primitive
//7 types:string,number, boolean, null, undefined, symbol, BigInt
const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; //null does not means zero it just means its empty
let userEmail;
//use of symbol type data
const id =Symbol('123');
const anotherId =Symbol('123');
console.log(id === anotherId);//they are different evrn is they have same value
//use of BigInt
//const bigNUmber = 454875869487584583445778n //the n in last means that its a bigInt


//non-primitive or refrences
//array,objects,functions
const heros = ["shaktiman" , "batman" , "spiderman"];
//objects
let myObj = {
    name: "swosti",
    age: "16",
}
//function
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp); //even if it carries null the type is object cuz its aready in js documentation 
console.log(typeof myFunction); //returns function cuz its a function