const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const additem = document.querySelector(".additem")

const randomColor = function (){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i <6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
    
start.addEventListener("click",(e)=>{
    e.preventDefault();
    set_color();
})
stop.addEventListener("click",(e)=>{
     e.preventDefault();
    stop_color();
})

let interval;
function set_color(){
    if(!interval){
        interval = setInterval(display,2000)
}
}
function display(){
    document.body.style.backgroundColor = randomColor();
}

function stop_color(){
    clearInterval(interval);
    interval = null;
}