let randomNumber = parseInt(Math.random()*10 +1);
console.log(randomNumber);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const gusseSlot = document.querySelector(".guesses");
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGusse = []
let numGusse = 1;

let playGame = true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const gusse = parseInt(userInput.value)
        console.log(gusse);
        
        validateGusse(gusse);   
    })
}

function validateGusse(gusse){
    if(isNaN(gusse)){
        alert("please enter number");
    }else if(gusse < 1){
        alert("please enter correct number");
    }else if(gusse > 10){
        alert("please enter correct number");
    }
    else{
        prevGusse.push(gusse);
        if(numGusse == 5){
            displayGusse(gusse);
            displayMessage(`Game Over, random number was ${randomNumber}`);
            endGame();
        }
        else{
            checkGusse(gusse);
            displayGusse(gusse);
        }
    }
}

function checkGusse(gusse){
    if(gusse == randomNumber){
        displayMessage(`You Win ,${gusse} is right gusse`);
        endGame();
    }else if(gusse < randomNumber){
        displayMessage(`${gusse} is tooo low`);
    }else if(gusse > randomNumber){
        displayMessage(`${gusse} is tooooo high`);
    }
}

function displayGusse(gusse){
    userInput.value = '';
    gusseSlot.innerHTML += ` ${gusse} |`;
    numGusse++;
    lastResult.innerHTML = `${6-numGusse}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="button">start new game</h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#button");
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*10 +1);
        prevGusse = [];
        numGusse = 1;
        lastResult.innerHTML = `${6-numGusse}`;
        gusseSlot.innerHTML = ``;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = ``;
         playGame = true;
    });
}