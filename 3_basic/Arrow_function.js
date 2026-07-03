// This keyword it tells us about the current context

const user = {
    username :"harsh",
    id: "dsddas4225241",
    welcome_message : function(){
        console.log(`hello ${this.username}`);
        console.log(this);
        
    }
}

user.welcome_message();
// hello harsh   it is the message 
// {
//   username: 'harsh',
//   id: 'dsddas4225241',
//   welcome_message: [Function: welcome_message]
// }                  //this from the  this means it is the current context where this this is used 
user.username = "ram"; //now the currentcontext of useris changed 
user.welcome_message();
// hello ram
// {
//   username: 'ram',
//   id: 'dsddas4225241',
//   welcome_message: [Function: welcome_message]
// }


console.log(this); //{}  an empty object $$(when this same command is run in the web console than we get and window which is known as an globle object)



// function chai(){
//     let username = "harsh"
//     console.log(this.username);  //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   ////undefined
// }

const chai =  () => {
    let username = "harsh"
    console.log(this.username);        ////undefined 
}


//  chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "harsh"});


console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()