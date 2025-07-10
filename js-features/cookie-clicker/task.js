const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie")

function changeCounter() {

    if (image.width == 200) {
        image.width = 150;
    } else {
        image.width = 200;
    }

    counter.textContent = Number(counter.textContent) + 1;
}

image.onclick = changeCounter;