var i = 0;
var speed = 75;
var loop = null;
var textBox = document.getElementById("animatedText");
const txtArray = ["You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.",
"<i>Argh, what time is it?</i> you wonder to yourself. You roll over and click your alarm off. The time reads 7:57 am.",
"…", 
"OH CRAP!", 
"You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door."]
txt = txtArray[0];

var first = 0;
var italicized = false;

function startAnimation() {
    if (first == 0) {
        first = 1;
        textBox.innerHTML = "";
        loop = setInterval(
            function textAnimation() {
                if (i < txt.length) {
                    if(txt.charAt(i) == '<' && txt.charAt(i + 1) == 'i' && txt.charAt(i + 2) == '>') {
                        italicized = true;
                        i += 2;
                    } else if (txt.charAt(i) == '<' && txt.charAt(i + 1) == '/' && txt.charAt(i + 2) == 'i' && txt.charAt(i + 3) == '>') {
                        italicized = false;
                        i += 3;
                    } else if (!italicized) {
                        textBox.innerHTML += txt.charAt(i);
                    } else {
                        textBox.innerHTML += "<i>" + txt.charAt(i) + "</i>";
                    }
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

var index = 1;

function stopAnimation() {
    clearInterval(loop);
    i = 0;
    first = 0;
    textBox.innerHTML = txt;
    txt = txtArray[index];
    index++;
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

