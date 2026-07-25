let arr = [3,4,6,"abc",10,true]; //array is just collaction of same or different type of datatype 
console.log(arr);   //[ 3, 4, 6, 'abc', 10, true ]

console.log(typeof arr);  //object

// Once changed its original value will also change beacause it is non primitive (refrence) type.
arr[5]=false;
console.log(arr[5]);


//**methods**//
let newarr =new Array();

newarr.push(4,5,6,7);
console.log(newarr);
newarr.pop();
console.log(newarr);

newarr.unshift(20);  // adds value at first of an array
console.log(newarr);

newarr.shift(40);
console.log(newarr);  //removes first value of an array

console.log(newarr.includes(50));  //it gives booleen value for the particular element  we have to check
console.log(newarr.indexOf(5));    //it gives the index of element 

console.log(newarr.join()); //now its converted into string
console.log(typeof newarr.join());

console.log(newarr.length);



let myarr = new Array(1,25,3,6,7,9,1,5,3,85,3);
console.log(myarr.slice(0,8));  //slice in [i,j]  from i to j-1  
console.log(myarr);  //slice is not change in original value is use pass by value or copy

console.log(myarr.splice(0,8));  //splice is same as slice
console.log(myarr);  // but it passes by referece so the element which are splice are removd and change in original arr



 



