// {
//     let x=10;
// }
// console.log(x);

// if(false){
//     let y=20;
// }
// console.log(y);

function fun(){
    console.log(z); // z is not getting function scope. z is getting block scope.
    let z=30;
    console.log(z);
}

fun();

//re-declarations not allowed here.

// let a=10;
// let a=9;