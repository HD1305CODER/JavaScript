//for of loop
//syntex:-
// for (const element of object) {
    
// }

//arr[]
let arr = [1,3,4,2,5,6]
for(const num of arr){
    console.log(num);  //num is give the value  //1,2,3,4,5,6
}

//String
let name =  "harsh devera"
for(const char of name){
    console.log(`charactore of the name ${char}`);  //char is give the each character
}

//maps
//A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.Maps differ from standard objects in that keys can be of any data type
//map is just like object but only difference is that it store unique values only 
let fruits = new Map();
fruits.set('fruit1',"apple");
fruits.set('fruit2',"mango");
//console.log(fruits);//Map(1) { 'fruit1' => 'apple' , 'fruit2' => 'mango'  }

for (const key of fruits) {
    console.log(key);
}//[ 'fruit1', 'apple' ]  [ 'fruit2', 'mango' ]

for (const [key,value] of fruits) {
    console.log(key ,':-',value);
}//fruit1 :- apple   fruit2 :- mango



// on object
let student={
    name:'harsh devera',
    university:'GTU',
    enrollment_num:1234234567
}
// for (const key of student) {
//     console.log(key); //student is not iterable
// }
