let positive_nu = [1,2,3,4,5,6,7,8,9];
let negative_nu = [-1,-2,-3,-4,-5,-6,-7,-8,-9];


//positive_nu.push(negative_nu); //by this the whole negative number arr will get stored in index of positive number like an normal element means array inside array but as an index 
// console.log(positive_nu);   //[1,2,3,4,5,6,7,8,9,[-1, -2, -3, -4, -5,-6, -7, -8, -9]]
// console.log(positive_nu[9]);
//console.log(positive_nu[9][5]);  //-6


//let whole_nu = positive_nu.concat(negative_nu);  //[1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9]
//console.log(whole_nu);  now it look better and concatinat will give an new array for ex here whole_nu arr 

//let whole_nu = [...positive_nu,...negative_nu] //one more way same output as concatinat but more usefull we can add muiltiple arr in it
//console.log(whole_nu);

let new_arr = ["harsh","mansi",["rohan","krishna","ram"],["parth","rudra","sanjay","shivansh"]];
console.log(new_arr.flat(Infinity));




console.log(Array.isArray("harsh"));  //false
console.log(Array.from("harsh"));
console.log(Array.from({name : "harsh"}));  //*?*//unique case gives empty array


score1=100;
score2=200;
score3=300;
console.log(Array.of(score1,score2,score3));