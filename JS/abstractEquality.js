console.log(undefined==null);
console.log(5=='5');
console.log(5=='a');
console.log(0==false);
console.log(1==true);
console.log(10==true);//true will convert to 1 and the 10==1 -> false
console.log(10=={valueOf(){return 10}});// convert object to primitive and compare