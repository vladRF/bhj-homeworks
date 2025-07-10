
const Timer = function () {
    const output = document.getElementById("timer");
    if(output.textContent > 0) {
        output.textContent -= 1;
        

    }




}
setInterval(Timer, 1000);











// let i = 0;
// let id = setInterval(function() {
//    i++;
//    if (i == 10) {
//        clearInterval(id);
//    } else {
//        console.log(i);
//    }
// }, 1000);  