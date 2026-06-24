function hello_world(){
    console.log("Hello world");
}

 hello_world //function reference
 hello_world()  //function execution



 function addNumber(number1,number2){
    console.log(number1+number2);  
}
//in java script we don't give datatype in function parameters so it can create any error if we give wrong argument so we have to resolve it by conditional statement
addNumber(5,6);
addNumber(3,"a");  //3a

function addThreeNumber(num1,num2,num3){
    return num1+num2+num3;
}
let ans = addThreeNumber(50,50,64465);
console.log(ans);


//login user message
function loginUserMessage(username = "user"){
    if(!username){
        console.log("please enter your name");
        return;
    }
    return `${username} is just loged in`;
}

console.log(loginUserMessage(" ")); // (  is just loged in)
console.log(loginUserMessage("Harsh Devera"));//Harsh Devera is just loged in
console.log(loginUserMessage());  //user is just loged in


//any condition in which we don't know how much parameter we required
//EX-: any user buying adding in cart how don't know how much item userr will store but we have to continusouly store add the value of items
//for that we use rest operator its same as sperad but just differnt name for different usecase

function calculateCartValue(...num1){
    return num1;
}
console.log(calculateCartValue(20,25,35,94,6485,25,15,2,54,5,56)); //it will give an array of all the items so by this we can now easily canculate the value
// [20, 25, 35, 94,  6485, 25, 15,  2, 54,  5, 56]



//object and array pass on function
// object 
const user ={
    username:"Harsh",
    userId : 152583
}

function handelObj(anyobject){
        return `name of user is ${anyobject.username} and id is ${anyobject.userId}`
}
console.log(handelObj(user)); //name of user is Harsh and id is 152583



//ARRAY
const number = [5,35,35,18,15,6,9,1,69,5,66];
function findThirdDigit(anyarr){
    return anyarr[2];
}
console.log(findThirdDigit(number));  //35