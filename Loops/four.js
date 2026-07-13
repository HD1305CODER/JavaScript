//for each \
//syntax
// arr_name.forEach( calback function )
//callback function -> means no name and  by for each eachindex of arr the value at that index will pass as parametere 


let engineering_branch = ["computer engineering","elctric engineering","mechanical engineering","chemical engineering","aerospace engineering"]

engineering_branch.forEach(function (item){
    // console.log(item);
})
//or
engineering_branch.forEach((item) => {
    // console.log(item);
})

function print_arr(item){
    // console.log(item);
}
engineering_branch.forEach(print_arr); //it not function call

//

engineering_branch.forEach( (item,index,engineering_branch) =>{
    console.log(item,index,engineering_branch);
});

///
// accesing object incide arr
let language =[
    {
        languageName : "javascript",
        languageFile : "js"
    }
    ,
    {
        languageName : "python",
        languageFile : "py"
    }
    ,
    {
        languageName : "C++",
        languageFile : "cpp"
    }
    ,
    {
        languageName : "java",
        languageFile : "java"
    }
]

language.forEach( (item) =>{
    console.log(item.languageName);
});

//in for each it can not return any vlaue it can be its disadvantage 