//java script follows the prototyple behaviour 
//means any method or somthing is required then by this behaviour is checks the every method untill it get null
//and at the top of it we have object above object we get null that means every property and method of object can also acces by the other like array,string,function etc.

function mulByTwo(numb){
    return numb*2;
}

mulByTwo.power = 2;  //here we can use this dot which is usedd in object

console.log(mulByTwo(5));
console.log(mulByTwo.power);
console.log(mulByTwo.prototype);



//we can also inject property and its functionality in the prototype
function player(name,score){
    this.name = name;
    this.score = score;
}

player.prototype.increment = function(){
    this.score++;
}
player.prototype.printMe = function(){
    console.log(`${this.score}`);
}

let player1 = new player("Dhoni",500);   //by this new keyword it will get the this property means this prorperty is injected but this player1  will not get this if we define this extra property in directly main player function then its ok !!
let player2 = new player("Sachin",1000);

console.log(player1);
player1.increment()
player1.printMe()
console.log(player2);



/* SOME NOTES OF NEW KEYWORD FUNCTIONALITY

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/