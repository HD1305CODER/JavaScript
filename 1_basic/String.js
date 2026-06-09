const name = "Harsh"
const id = 123521

console.log("my name is "+name+" and my id is "+id); //String contacatination

console.log(`my name is ${name} and my id is ${id}`);   //string interpolation it's an new way to do this 
//and also we can use some function on the namee and id in onw go

console.log(typeof name);


const new_name= new   String(`Harsh Devera`)  //one more way to declare string now its an object which is created by new key word so we have some method which are used on it 

//some methods
console.log(new_name[2]);
console.log(new_name.length);
console.log(new_name.toUpperCase());  //not change is original because string is use stack method
console.log(new_name.charAt(3));
console.log(new_name.indexOf(`r`));
console.log(new_name.slice(2,7)); //n to n-1
console.log(new_name.split(` `));  //where we have space  is will split and make an array


let mailid ="    harsh@gmail.com    "
console.log(mailid.trim()); //removes spaces from end and start
console.log(mailid.replace(`@`,`-`));
 
