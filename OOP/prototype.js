//every object has a property known as prototype which has function like .toString
//prototype is also an object
//we can add properties to an object even after it has been created already, d gets the property display

function Product(n){
    this.name=n;
}

let d = new Product("Phone");

console.log(d);
Product.prototype.display = function() {
    console.log(`Name of the product is ${this.name}`);
}
//This is how we can add a property to an object 
console.log(d.display());

//d does not have prototype it has under proto

console.log(d.__proto__);


//internal js enviroment has a function name Object.
