const button = document.querySelectorAll(".buttons button");
const screen = document.querySelector('#display');

button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.className == 'number'){
            display(e.target.innerText);
        }
        if(e.target.id == 'Clear'){
            clearDisplay();
        }
        if(e.target.id == 'equal'){
            const ans = evaluate(screen.innerText);
            clearDisplay();
            display(ans);
        }
        if(e.target.id == 'back'){
            back();
        }
        if(e.target.className == 'operator'){  
            display(e.target.innerText);
        }
        
    })
})

function evaluate(expression){
   try{
     return eval(expression);
   }
   catch(e){
    return "wrong input";
   }
}
function back() {
    screen.innerText = screen.innerText.slice(0, -1);
}
function clearDisplay(){
    screen.innerText = "";
}

function display(num){
    if(screen.innerText == 'Display'){
        clearDisplay();
    }
    screen.innerText += num;   
}

