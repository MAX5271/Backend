//returns a unique id.
let id1=setTimeout(function execute(){
    // some task
    console.log("Task Completed 1");
},10000);

let id2=setTimeout(function execute(){
    // some task
    console.log("Task Completed 2");
    //clear timeout is used to stop the timer of the id passed.
    clearTimeout(id1);
},4000);