var i = 0;
var speed = 75;
var loop = null;
var textBox = document.getElementById("animatedText");
const txtArray = ["You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.",
"Argh, what time is it?".italics() + " you wonder to yourself. You roll over and click your alarm off. The time reads 7:57 am.",
"…", "OH CRAP!", "You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door."]
txt = txtArray[0];

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

var index1 = 1;

function stopAnimation() {
    clearInterval(loop);
    i = 0;
    first = 0;
    textBox.innerHTML = txt;
    txt = txtArray[index1];
    index1 += 1;
}
