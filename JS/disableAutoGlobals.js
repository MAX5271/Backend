"use strict";
// put this line to disable auto globals. This disable auto globals for the code after it.

function fun(){
    student = "Nitigya";// throws error in target reference when it is before source reference.
    console.log(student);
}

fun();