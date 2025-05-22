
/**
 * Since the function is not executed untill it is called.
 * In phase 1 the formal declaration occurs
 * Therefore when during phase 2 when the function is called before it is declared, js already knows that there is a function
 *      with that given name, so it will execute the function.
 * 
 * Hoisting is the direct consequence of Lexical scoping
 */

gun();
function gun(){
    console.log("Hello World");
}


function fun( x , y ){// x and y will be given the scope of the function, not global scope
    
}