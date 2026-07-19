/* there are two way to declare object 1) by constructor. 2)object lterrals
Object Literal: Directly uses curly braces {} to create a new, independent instance every time (Not a Singleton).

Constructor Method: Uses methods like Object.create() to enforce a structural setup that implements a strict Singleton pattern (ensuring only one unique instance exists). 
*/ 


//object literal

const mysym = Symbol("key1");
 
const student ={
    name : "harsh",      // object=={key:value}  here key is already an string or stores as string
    "user id": "haRsh15200",
    email_id : "harsh@gmail.com",
    branch : "CE",
    mobile_number : 5552525825,
    ispresent : false,
    [mysym] : "mykey",  //for storing and accese symbole we put key in []
}

console.log(student.name);   //we can accese objects by .  or ["key"] because key is string  
console.log(student["ispresent"]);
console.log(student["email_id"]);
console.log(student[mysym]);  //symbol can only accese by [key] 
console.log(typeof student[mysym]); //output -String  because it give datatype of stored value "mykey"


student.email_id = "harsh@microsoft.com";
console.log(student.email_id); //harsh@microsoft.com
//Object.freeze(student);
student.email_id = "karishna@microsoft.com";
console.log(student.email_id);//harsh@microsoft.com
console.log(student);
/*{
  name: 'harsh devera',
  'user id': 'haRsh15200',
  email_id: 'harsh@microsoft.com',
  branch: 'CE',
  mobile_number: 5552525825,
  ispresent: false,
  Symbol(key1): 'mykey'        <<---//////
}*/


student.greeting = function(){
    console.log("heelo students");
}
student.greeting2 =function(){
    console.log(`hello ${this.name} namste`);
}

console.log(student.greeting());
console.log(student.greeting2());



//constructor

const user = Object();

user.name="harsh";
user.Id="harsh23"
console.log(user);//{ name: 'harsh', Id: 'harsh23' }

const costumer = {
    fullname:{
        username:{
            firstname:"Harsh",
             lastname:"Devera"
        }
    }
}

console.log(costumer.fullname);//{ username: { firstname: 'Harsh', lastname: 'Devera' } }
console.log(costumer.fullname.username.firstname);//Harsh
console.log(costumer.fullname.username.lastname);//Devera


const obj1 = {1:"A",2:"B"}
const obj2 = {3:"A",4:"B"}
const obj3 = {5:"A",6:"B"}

//const obj4 ={obj1,obj2,obj3}
//console.log(obj4);        //{obj1: { '1': 'A', '2': 'B' },obj2: { '1': 'A', '2': 'B' },obj3: { '1': 'A', '2': 'B' }}

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);          //{ '1': 'A', '2': 'B', '3': 'A', '4': 'B', '5': 'A', '6': 'B' }

const obj5 = {...obj1,...obj2,...obj3} //spread operator
console.log(obj5);      //{ '1': 'A', '2': 'B', '3': 'A', '4': 'B', '5': 'A', '6': 'B' }



console.log(Object.keys(user)); //[ 'name', 'Id' ]
console.log(Object.values(user)); //[ 'harsh', 'harsh23' ]
console.log(Object.entries(user)); //[ [ 'name', 'harsh' ], [ 'Id', 'harsh23' ] ]
console.log(user.hasOwnProperty("name"));//true


const job =[
    {
        jobname:"worker",
        jobid:1236
    },
    {
        jobname:"worker",
        jobid:1236
    },
    {
        jobname:"worker",
        jobid:1236
    }   
]  //it's used in database etc
job[1].jobid;





//destructure

let Bank ={
    bankname:"SBI",
    bankID:"fsbvbjk2456efsremtn",
    bankbranch:"delhi-main branch"
}

console.log(Bank.bankID); // normal way

const {bankname : name} = Bank
console.log(name); //SBI
const {bankID}= Bank;
console.log(bankID);  //fsbvbjk2456efsremtn