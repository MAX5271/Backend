/*
Coersion is type inter-conversion

In cpp types exists for the variables

In JS types exists for the values

Everythis in JS is an object-> False

Abstract operations are not a part of ECMA Script, they are just here to aid the semantics of the script.
Read documentation of abstract operations.
*/

/**
 * if primitive is number: valueOf() then toString()
 * if primitibe is string: toString() then valueOf()
 */

console.log(10-{"a":10});
console.log(10-{"a":10, valueOf(){ return 5;}});
console.log(10-{"a":10,valueOf(){return {};}});
console.log(10-{"a":10,valueOf(){return {};},toString(){return "5";}});// if value of does not return primitive then toString is called.
console.log(10-{"a":10, valueOf(){ return "2";}});

console.log(12+{"x":23});//first valueOf the toString
console.log({}+10);//when you use parantheses as the first character of the line(in repl or browser console), JS treats if as a code block, otherwise normal
console.log(10+{});