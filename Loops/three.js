//for in loop

//object
let student={
    name:'harsh devera',
    university:'GTU',
    enrollment_num:1234234567
}
for (const key in student) {
    console.log(`${key} of student is ${student[key]}` );
}

//arr
let arr = [10,20,30,40,50,60];
for (const key in arr) {
    console.log(key)   //in for in this key is give the key and in for of the key will give the value here key of arr is 0,1,2,3,4,5
}

//map
let fruits = new Map();
fruits.set('fruit1',"apple");
fruits.set('fruit2',"mango");

for (const key in fruits) {
    console.log(key)   //it will don't give any output 
}