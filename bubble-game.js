var timer = 60
var scoreis = 0
var rn;

function makebubble() {
var clutter = "";

for (let i = 1; i < 217; i++) {
    let rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`;  
}

document.querySelector('#pbottom').innerHTML = clutter
}


function runtimer() {
    var timerVal = setInterval(function (){
        if ( timer > 0) {
            timer--
            document.querySelector('#timer').textContent = timer;
        }
         else {
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timerVal)
        }
    }, 1000)
}

function hitRun() {
    rn = Math.floor(Math.random()*10)
    document.querySelector("#hit").innerHTML = rn
}

function incscore(){
    scoreis += 10;
    document.querySelector("#score").innerHTML = scoreis
}

function score(){
     
    document.querySelector("#pbottom").addEventListener("click" , function(details){
    let targetValue = Number(details.target.textContent)
    if (targetValue === rn ) {
    incscore()  
    makebubble()
    hitRun()  
    }    
    })

}
score()
makebubble()
hitRun()
runtimer()