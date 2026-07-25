//Imediate invoked function expression(iife)
//syntax     (defination)(execution)
//it is used when we have to execute any function imediately 
//when function is execute normally then due to the globle variables we can have polluted so to resolve this we using this expression 

(function user(name){
    //named iife
    console.log(`${name}`);
})("harsh");  //in this semicolen is must otherwise this function is not stop

((name) =>{
    //unnamed iife
    console.log(`${name}`)
})("sanjay");