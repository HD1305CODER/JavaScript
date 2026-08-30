// Ek JavaScript language feature / design pattern hai jo kisi bhi asynchronous kaam
// (chahe network call ho, timer ho, ya file read ho) ko handle karne ke liye banaya gaya hai.


//promises create
// by storing in an variable
const promiseone = new Promise(function (resolve , reject){
    //do asyncronus task EX:
    // db calls , cryptography , network 
    setTimeout(function (){
        console.log(`async task one is completed`);
        resolve();
    },1000);
})
//promise consume 
//  .then is connected to the resolve part and resolve promise me likhna padega 
promiseone.then(function (){
    console.log(`promise is consumed`);
})


//without storing in variable
new Promise(function (resolve ,reject){
    setTimeout(() => {
        console.log(`async task two is completed`);
        resolve()
    }, 2000);
}).then(function (){
    console.log(`promise two is consumed`)
})



// chaining --> whatever the first .then will return will go to the secont .then

const  promiseThree = new Promise(function(resolve , reject){
    setTimeout(function (){
        let error = false;
    if(!error){
        resolve({username:"Harsh",userid:"har2333"});
    }else{
        reject('ERROR: somthing went wrong');
    }
    },3000)
});
promiseThree
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>
    console.log("it is finally it  will run even promise is reject or resolve")
)


//async await
// same as promiseThree but by async await
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false;
        if(!error){
            resolve({username:"javascript",userid:"har2333"});
        }else{
            reject('ERROR: js went wrong');
        }
        },4000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
///
//<--->//

async function getData(){
    try {
        const response = await fetch('https://api.github.com/users/HD1305CODER');
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E:',error);
    }
}
getData()


fetch("https://api.github.com/users/HD1305CODER")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})