const balloonContainer = document.getElementById("balloon-container");

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `background-color: rgba(${r}, ${g}, ${b}, 1);
    color: rgba(${r}, ${g}, ${b}, 1);
    box-shadow: inset -7px -3px 10px rgba(${r - 10}, ${g - 10}, ${b - 10}, 1);
    margin: ${mt}px 0 0 ${ml}px;
    opacity: 0;
    animation: float ${dur}s 4s ease-in infinite`;
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    setTimeout(() => {
        balloonContainer.remove();
    }, 1500);
}

window.addEventListener("load", () => {
    createBalloons(30);
});