var i = 0;
var speed = 25;
var loop = null;
var textBox = document.getElementById("animatedText");
var button = document.getElementById("Textbox");
var options = document.getElementById("Options");
const txtArray = ["You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.",
"<i>Argh, what time is it?</i> you wonder to yourself. You roll over and click your alarm off. The time reads 7:57 am.",
"…", 
"OH CRAP!", 
"You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door."]
txt = txtArray[0];

var choiceNumber = 0;
const choices = ["1", "2", "3", "4",
                 "5", "6", "7", "8",
                 "9","10","11","12"];

var first = 0;
var italicized = false;
var makeChoice = false;

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
    } else if (first == 1) {
        stopAnimation();
    } else;

}

var index = 1;

function stopAnimation() {
    clearInterval(loop);
    i = 0;

    textBox.innerHTML = txt;
    italicized = false;
    first = 0;
    if (index < txtArray.length) {
        txt = txtArray[index];
        index++;
        
    } else {
        options.style.display = "block";
        index = 0;
        first = 20;
        makeChoice();

    }
}



function makeChoice() {
    document.getElementById("Option1").innerHTML = choices[choiceNumber++];
    document.getElementById("Option2").innerText = choices[choiceNumber++];
    document.getElementById("Option3").innerText = choices[choiceNumber++];
    document.getElementById("Option4").innerText = choices[choiceNumber++];
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

