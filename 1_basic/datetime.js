let date = new Date();

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleTimeString());
console.log(typeof date);


//let mydate = new Date(2005,4,13);
//let mydate = new Date("2005-05-13");
//let mydate = new Date("05-13-2005");
//let mydate = new Date(2005,4,13,3,5);
//console.log(mydate.toLocaleString());


let timestamp = Date.now();
console.log(timestamp);
//console.log(mydate.getTime());
//console.log(Math.floor(timestamp.getTime()/1000));

let new_date = new Date();
console.log(new_date);
console.log(new_date.getDate());
console.log(new_date.getDay());
console.log(new_date.getMonth());
console.log(new_date.getFullYear());


console.log(new_date.toLocaleString('default',{
    weekday: "narrow"
}));