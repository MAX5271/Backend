/**
 * Step - 1,  Parsing
 *      we will do scope resolution first.
 *      whenever we declare a function or a variable using var/let or const, it is a formal declaration.
 *      we only declare not assigning the values.
 *      when we go inside a function, js will start to maintain the scope of that function also.
 *      inside fun() when student is first time declared, student will be given the scope of fun()
 * Step - 2, Execution
 *      Now the value Nitigya is assigned to student on the first line of the code.
 *      Then we go to the line where fun() is used directly, function is ran when it is called, 
 *      Now we are inside fun(), so we will only use the scope of fun()
 *      Now for newStudent, first we check in the scope of fun(), no formal declaration is found
 *      Then we check in the golbal scope, no fomal declaration is found.
 *      If we keep on searching the scopes of the variable and no where find it, we automatically assign it a global scope.
 */


var student="Nitigya";
// console.log(newStudent);

function fun(){
    var student =  "Nikhil";
    newStudent =  "Naman"; // infomal declaration.
    console.log(student);
    console.log(newStudent);
}

fun();
console.log(student);
console.log(newStudent);// autoglobal => this happens during execution phase not parsing phase, so eventhough it has a global scope, can't use before assiging or target execution is not done.