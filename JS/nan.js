console.log(NaN==NaN);//only number which is not equal to itself
console.log(NaN===NaN);//only number which is not equal to itself

/**
 * how to check if a function returns NaN?
 */

let a=NaN,b="10",c="abc";
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));// this should give false but it is giving true
/**
 * isNaN() coersices the value of any thing you give it, number inconvertible strings give NaN
 * therefore it is not optimal
 */

if(typeof(a)=="number"&&isNaN(a)) console.log("NaN");//approach 1

console.log(Number.isNaN(a));//approach 2
console.log(Number.isNaN(c));

//extra
//console.log(9.toString()); can't use because 9 is a constant literal
let x=10;
console.log(x.toString());
console.log(9..toString());//(9).toString(),Number(9).toString)() BOXING