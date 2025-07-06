const Timer = function () {
    const output = document.getElementById("timer")
    if (output.textContent != 0) {
        output.textContent -= 1;
    }
    
    if (output.textContent == 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(TimerID);
    }

}

const TimerID = setInterval(Timer, 500);