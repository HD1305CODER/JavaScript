let a = 20;
var b = 30;
const c = 50;

if(true){
    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);

    let x = 20;
    var y = 30;
    const z = 50;
}
//console.log("x :",x);  //ReferenceError: x is not defined 
//console.log("z :",z);   //ReferenceError: z is not defined
console.log("y :",y);  // y:30

console.log("a :",a);
console.log("b :",b);
console.log("c :",c);

//Scope in JavaScript is the set of rules governing the accessibility and visibility of variables, functions, and objects within a program, determining where they can be referenced during execution.
//Here as we can see that we can access a,b,c any where in the code but we can not access x and z which are in the block of if but "y (declared with var) can be accessed."that can create some type of error while writing code that's why we generally use let .



function first(){
    const student_name = "harsh"

    function second(){
        const student_id = 25858;
        console.log(`students name ${student_name} and his id is ${student_id}`);
    }

    //console.log(student_id);
    second();
}

//console.log(student_name);  //ReferenceError: student_name is not defined
first();


//$$$$$$$$$$$$$$$$$$$???///

console.log(addone(5)); //6
function addone(num){  //it can access anywhere
    return num +1;
}

//console.log(addtwo(5));  //ReferenceError: add is not defined
const addtwo = function(num){   //here function is defined in an variable so it can not access anywhere 
    return addtwo(5);
}