const c = el => document.querySelector(el)

let init = c('.init') 
let pause = c('.stop') 
let reset = c('.reset') 
let clock = c('.clock') 


function getSeconds(s){
    let tempo = new Date(s * 1000);
    return tempo.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

let sec = 0
let timer;

function initTimer(){
    timer = setInterval(function(){   
        sec++
        clock.innerHTML = getSeconds(sec)
    }, 1000)
    clock.style.color = 'black'
}

function pauseTimer() {
    clearInterval(timer)
    clock.style.color = 'red'
}

function resetTimer() {
    sec = 0
    clock.innerHTML = getSeconds(0)
    clock.style.color = 'black'
}


init.addEventListener('click', () =>{
    clearInterval(timer)
    initTimer()
})

pause.addEventListener('click', () =>{
    clearInterval(timer)
    pauseTimer()
})

reset.addEventListener('click', () =>{
    clearInterval(timer)
    resetTimer()
})