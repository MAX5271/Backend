// When we use var inside a function the variable gets function scope. You can access it before even declaring it.
// When we use var outside a function no matter if it is inside a block, that variable will get global function.

function  hello(){

    console.log(a);//No error due to lexical scoping.
    var a="Hello World";
}

if(true){
    var c=20;
}

//lexical scoping and also js is not interpreted language therefore it reads the whole code atleast one.
if(false){
    var d=30;
}

{
    var b="Hello World";
}

console.log(d);
console.log(c);
console.log(b);
console.log(a);

//redeclarations are allowed here

var g=40;
var g=35;