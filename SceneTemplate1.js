var i = 0;
var speed = 75;
var loop = null;
var textBox = document.getElementById("animatedText");
var txt = "You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.";
var txt2 = "You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door.";

var first = 0;

function startAnimation() {
    if (first == 0) {
        first = 1;
        textBox.innerHTML = "";
        loop = setInterval(
            function textAnimation() {
                if (i < txt.length) {
                    textBox.innerHTML += txt.charAt(i);
                    i++;
                } else {
                    stopAnimation();
                }
            }, speed);
        }
        else if (first == 1) {
            stopAnimation();
        }
}



function stopAnimation() {
    clearInterval(loop);
    i = 0;
    first = 0;
    textBox.innerHTML = txt;
    txt = txt2;
}