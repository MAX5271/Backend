function fun(x,fn){
    /**
     * x -> number
     * fn -> callback function
     */
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();//calling the callback function passed.
    // some more logic
}

fun(10,function log(){
    console.log("Custom Logger");
});