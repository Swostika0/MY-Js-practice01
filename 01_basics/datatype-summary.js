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

//type of memory
//Stack memory(used in primitive) ,Heap memory(used in non primitive data  type)

//use of stack
let myYoutubeName ="swostikabajagain";
let anotherName = myYoutubeName;
anotherName = "pihu"
console.log(myYoutubeName);
console.log(anotherName);

//use of heap
let userOne = {
    email : " pihu@gmail",
    nid : "01234"
}

let userTwo =userOne;
userTwo.email ="damian@gmail.com"

console.log (userOne.email);
console.log (userTwo.email);