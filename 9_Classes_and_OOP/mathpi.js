const descriptor = Object.getOwnPropertyDescriptor(Math,"PI"); //we can get the property used on this PI
console.log(descriptor)
console.log(Math.PI);  //this math.pi is can not be change iterate and more same way we can also create this type of things


const student = {
    name:"harsh",
    enrollment:22225252,
    course:"CE"
}

console.log(Object.getOwnPropertyDescriptor(student,"name"))

Object.defineProperty(student,"name",{
    writable : false,
    enumerable : false,
})
student.name = "devera"
console.log(student.name);

for (let [key,value] of Object.entries(student)) {
    console.log(`${key}:${value}`)
}
