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
