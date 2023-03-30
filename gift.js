window.onload = function () {
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [500, 500, 200, 200];
    function init() {
        box.addEventListener("click", openBox, false);
    }
    function reveal() {
        document.querySelector("body").style.background = "url(rabbit.png)";
        document.querySelector(".merrywrap").style.cursor = "default";
        document.querySelector(".birthday").style.display = "flex";
    }
    function stepClass(step) {
        merrywrap.className = "merrywrap";
        merrywrap.className = "merrywrap step-" + step;
    }
    function openBox() {
        if (step === 1) {
            box.removeEventListener("click", openBox, false);
        }
        stepClass(step);
        if (step === 3) {
        }
        if (step === 4) {
            reveal();
            return;
        }
        setTimeout(openBox, stepMinutes[step - 1]);
        step++;
    }
    init();
}