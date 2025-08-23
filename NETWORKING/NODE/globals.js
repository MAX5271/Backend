// console.log(process);
// console.log(__dirname);//This global is not always accessable, not accessable when used in REPL because it gives the address of the module
// console.log(module);

/**
 * To use a function of a js file in another js file we use module.export to export the function.
 */

function linearSearch(){};
function binarySearch(){};

// This is how we export the functions in a file, now to handle exports 
//module.exports is an object.
module.exports = {
    linear: linearSearch,
    binarry: binarySearch
};
// console.log(module);