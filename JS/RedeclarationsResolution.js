var x=20;
/**
 * Now suppose we have a very big code base and someone has to do another part in the code.
 * Most porbably they won't read or see what variables are already declared.
 * so if they use the same variable it will cause errors.
 * 
 * 
 * 
 *              CODE
 * 
 * 
 * 
 */

// To resolve this use block scope.
{
    //new code start
    let x=200;
    //new code end
}

/**
 * 
 * 
 * 
 *                Rest of the code
 * 
 * 
 * 
 */


// OR WE USE IIFE-> imediately invoked function expression


